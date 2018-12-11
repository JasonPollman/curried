import map from '@foldr/map';

const identity = x => x;

/**
 * Curried zip object style function.
 * @param {Array} keys The keys to zip using.
 * @returns {function} A function that given values
 * will zip an object using keys and values.
 */
function kzip(keys) {
  return (values) => {
    const results = {};
    let i = keys.length;

    while (--i >= 0) results[keys[i]] = values[i];
    return results;
  };
}

/**
 * Asynchronous version of [mapValues](#mapValues).
 *
 * Invokes `iteratee` for each item in `collection` and waits for all iteratee functions
 * to resolve before returning an Object of asynchronously mapping the values of `collection`.
 *
 * This function is similar to [mapValues](#map-values), except that it accepts Promise returning
 * iteratee functions and returns a `Promise`.
 *
 * Iteratee functions are invoked with the signature: `iteratee(value, key, collection)`, where:
 * - `value` is the current item in the collection being iterated over.
 * - `key` is the corresponding key for `value`.
 * - `collection` is collection.
 *
 * @name mapValuesAsync
 * @param {Array|Object|Map|Set|Arguments} collection The collection to map the values of.
 * @param {function} iteratee The callback function to invoke for each item in `collection`.
 * @returns {Promise<Object>} Resolves with the asynchronously mapped object.
 *
 * @arity 2
 * @category async
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { mapValuesAsync } from '@foldr/all';
 *
 * function getUserDetails(id) {
 *   // Magically get user details from the server somehow...
 *   return Promise.resolve({ id });
 * }
 *
 * const usersByName = {
 *   bob: 2,
 *   john: 1,
 *   willy: 4,
 * };
 *
 * const users = await mapValuesAsync(usersByName, getUserDetails);
 * // =>
 * // {
 * //   bob: { id: 2 },
 * //   john: { id: 1 },
 * //   willy: { id: 4 },
 * // }
 */
export default function mapValuesAsync(collection, iteratee) {
  let i = 0;

  // eslint-disable-next-line no-param-reassign
  if (typeof iteratee !== 'function') iteratee = identity;

  const keys = [];
  const resolved = Promise.resolve();

  // Map the object to an array of promises.
  // This will invoke the iteratee for each item in collection
  // at the next tick of the event loop.
  const promises = map(collection, (value, key) => {
    keys[i++] = key;

    return resolved.then(
      this && this.capped ? () => iteratee(value) : () => iteratee(value, key, collection),
    );
  });

  // Await all of the promises and zip up the keys and values.
  return Promise.all(promises).then(kzip(keys));
}
