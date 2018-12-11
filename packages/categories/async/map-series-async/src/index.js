import reduce from '@foldr/reduce';

const identity = x => x;

/**
 * Asynchronous map series function.
 *
 * Iterates over `collection` serially, in order, and one item at a time invoking `iteratee`
 * for each item.
 *
 * Iteratee functions are invoked with the signature: `iteratee(value, key, collection)`, where:
 * - `value` is the current item in the collection being iterated over.
 * - `key` is the corresponding key for `value`.
 * - `collection` is collection.
 *
 * @name mapSeriesAsync
 * @param {Array|Object|Map|Set|Arguments} collection The collection to map the values of.
 * @param {function} iteratee The callback function to invoke for each item in `collection`.
 * @returns {Promise<Array>} Resolves with an array of resolved values from invoking `iteratee`
 * in the order the input was given.
 *
 * @arity 2
 * @category async
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { mapSeriesAsync } from '@foldr/all';
 *
 * function processItem(x) {
 *   // Do something async...
 *   return Promise.resolve(x * 2);
 * }
 *
 * const items = [1, 2, 3];
 *
 * await mapSeriesAsync(items, processItem);
 * // => [2, 4, 6];
 */
export default function mapSeriesAsync(collection, iteratee) {
  // eslint-disable-next-line no-param-reassign
  if (typeof iteratee !== 'function') iteratee = identity;

  let i = 0;
  const results = [];

  const reducer = (parent, value, key) => {
    const index = i++;

    return parent
      .then(this && this.capped ? () => iteratee(value) : () => iteratee(value, key, collection))
      .then((resolved) => { results[index] = resolved; });
  };

  return reduce(collection, reducer, Promise.resolve()).then(() => results);
}
