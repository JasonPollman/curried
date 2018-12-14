import fmake from '@foldr/internal-fmake';
import mapSeriesAsync from '@foldr/map-series-async';

/**
 * **Functional, autocurried version of [mapSeriesAsync](#map-series-async).**
 *
 * Iterates over `collection` serially, in order, and one item at a time invoking `iteratee`
 * for each item.
 *
 * Iteratee functions are invoked with the signature: `iteratee(value, key, collection)`, where:
 * - `value` is the current item in the collection being iterated over.
 *
 * @name mapSeriesAsyncFx
 * @param {function} iteratee The callback function to invoke for each item in `collection`.
 * @param {Array|Object|Map|Set|Arguments} collection The collection to map the values of.
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
 * import { mapSeriesAsyncFx } from '@foldr/all';
 *
 * function processItem(x) {
 *   // Do something async...
 *   return Promise.resolve(x * 2);
 * }
 *
 * const items = [1, 2, 3];
 *
 * await mapSeriesAsyncFx(processItem)(items);
 * // => [2, 4, 6];
 */
export default fmake(mapSeriesAsync, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});
