import map from '@foldr/map';
import forEach from '@foldr/for-each';
import toInteger from '@foldr/to-integer';

/* eslint-disable require-jsdoc, no-param-reassign */

const identity = x => x;

/**
 * Asynchronous mapping function that executes up to `maxConcurrency` items at a time.
 * @param {any} context The `this` value from `mapAsync` below.
 * @param {Array|Object|Map|Set|Arguments} collection The collection to map.
 * @param {function} iteratee The callback function to invoke for each item in `collection`.
 * @param {number} maxConcurrency The maximum number of concurrent items to run at once.
 * @returns {Promise} Resolves once mapping `collection` to `iteratee` is complete.
 */
function concurrentMapAsync(context, collection, iteratee, maxConcurrency) {
  if (typeof iteratee !== 'function') iteratee = identity;

  return new Promise((resolve, reject) => {
    let i = 0;
    let n = 0;

    let size;
    let child;

    const pending = [];
    const results = [];

    function process(index, value, key) {
      return function iterateeWrapper() {
        // Invokes the iteratee function and assigns the results of it
        // in the index of the result set for which it occured.
        function invoke() {
          results[index] = context && context.capped
            ? iteratee(value)
            : iteratee(value, key, collection);

          return results[index];
        }

        // After the iteratee function runs to completion, if there's any pending
        // functions to invoke that exceeded the concurrency, invoke the next one.
        function postinvoke(resolved) {
          size = pending.length;
          if (n >= size) return resolved;

          child = pending[n]();
          if (n++ === size - 1) child.then(() => Promise.all(results).then(resolve).catch(reject));

          return resolved;
        }

        return Promise.resolve().then(invoke).then(postinvoke).catch(reject);
      };
    }

    // Iterate over all of the items in the collection.
    // Immediately invoke the iteratee for all items < concurrency.
    // If we reach the maximum concurrency, then queue up the remaining
    // items to be invoked once each of the previous completes.
    forEach(collection, (value, key) => {
      if (i < maxConcurrency) {
        results[i] = process(i++, value, key)();
        return;
      }

      pending[pending.length] = process(i++, value, key);
    });

    // Nothing to tick post resolve of initial < maxConcurrency
    // promises, so resolve once all the initial promises are done.
    if (!pending.length) Promise.all(results).then(resolve).catch(reject);
  });
}

/**
 * Asynchronous mapping function.
 *
 * Invokes `iteratee` for each item in `collection` and waits for all iteratee functions
 * to resolve before returning an Array of the resolved iteratee results.
 *
 * This function is similar to [map](#map), except that it accepts Promise returning
 * iteratee functions and returns a `Promise`.
 *
 * Iteratee functions are invoked with the signature: `iteratee(value, key, collection)`, where:
 * - `value` is the current item in the collection being iterated over.
 * - `key` is the corresponding key for `value`.
 * - `collection` is collection.
 *
 * @name mapAsync
 * @param {Array|Object|Map|Set|Arguments} collection The collection to map.
 * @param {function} iteratee The callback function to invoke for each item in `collection`.
 * @param {number=} maxConcurrency The maximum number of concurrent items to run at once.
 * If `maxConcurrency` is less than or equal to zero, it will be ignored.
 * @returns {Promise<Array>} Resolves with the awaited return values from `iteratee`.
 *
 * @arity 3
 * @category async
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { mapAsync } from '@foldr/all';
 *
 * function getUserById(id) {
 *   // Magically get the user from the database somehow...
 *   return Promise.resolve({ id });
 * }
 *
 * const userIdList = [1, 2, 3, 4];
 * const users = await mapAsync(userIdList, getUserById);
 * // => [{ id: 1}, { id: 2 }, { id: 3 }, { id: 4 }]
 */
export default function mapAsync(collection, iteratee, maxConcurrency) {
  maxConcurrency = maxConcurrency ? toInteger(maxConcurrency) : 0;

  return maxConcurrency > 0
    ? concurrentMapAsync(this, collection, iteratee, maxConcurrency)
    : Promise.all(map.call(this, collection, iteratee));
}
