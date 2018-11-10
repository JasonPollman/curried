/**
 * Exports the flatten function.
 * @since 10/14/18
 * @file
 */

import isArray from '@foldr/is-array';

/**
 * Base recursive functionality for `flattenDeep`.
 * @param {Array} array The array to deeply flatten.
 * @param {number} maxDepth The maximum depth to flatten to.
 * @param {Array} results A results "collection" array.
 * @param {number} depth The current flattening depth.
 * @returns {Array} The flattened array.
 */
function flattenDeepBase(array, maxDepth, results, depth) {
  const size = array.length;
  const delta = depth + 1;

  let i = 0;
  let current;

  while (i < size) {
    current = array[i++];

    if (delta <= maxDepth && isArray(current)) {
      flattenDeepBase(current, maxDepth, results, delta);
    } else {
      results[results.length] = current; // eslint-disable-line no-param-reassign
    }
  }

  return results;
}

/**
 * Flattens an array to the specified depth (which defaults to `Infinity`).
 * This will iterate over the provided array pushing all items into a new array.
 * If the current item is an array, it's contents will also be pushed into the new array.
 * @param {Array} array The array to deeply flatten.
 * @param {number} maxDepth The maximum depth to flatten to.
 * @returns {Array} A newly flattened array.
 * @category array
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * flattenDeep([1, 2, 3, 4]);               // => [1, 2, 3, 4]
 * flattenDeep([1, [2, [3, 4, [5, 6]], [7]]); // => [1, 2, 3, 4, 5, 6, 7]
 * flattenDeep([[1], [2], [3], 4]);         // => [1, 2, 3, 4]
 */
export default function flattenDeep(array, maxDepth) {
  if (!array || !array.length) return [];
  return flattenDeepBase(array, +maxDepth || Infinity, [], 0);
}
