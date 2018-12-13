import isArray from '@foldr/is-array';

/* eslint-disable no-param-reassign */

/**
 * Base recursive functionality for `flattenDepth`.
 * @param {Array} array The array to deeply flatten.
 * @param {number} maxDepth The maximum depth to flatten to.
 * @param {Array} results A results "collection" array.
 * @param {number} depth The current flattening depth.
 * @returns {Array} The flattened array.
 */
function flattenDepthBase(array, maxDepth, results, depth) {
  const size = array.length;
  const delta = depth + 1;

  let i = 0;
  let current;

  while (i < size) {
    current = array[i++];

    if (delta <= maxDepth && isArray(current)) {
      flattenDepthBase(current, maxDepth, results, delta);
    } else {
      results[results.length] = current; // eslint-disable-line no-param-reassign
    }
  }

  return results;
}

/**
 * Recursively flattens an array to the specified depth (which defaults to `1`).
 *
 * This will iterate over the provided array pushing all items into a new array.
 * If the current item is an array, it's contents will also be pushed into the new array.
 *
 * @name flattenDepth
 * @param {Array} array The array to flatten to `depth`.
 * @param {number=} [maxDepth=1] The maximum depth to flatten to.
 * @returns {Array} A newly flattened array.
 *
 * @arity 2
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { flattenDepth } from '@foldr/all';
 *
 * flattenDepth([1, 2, 3, 4]);                    // => [1, 2, 3, 4]
 * flattenDepth([[1], [2], [3], 4]);              // => [1, 2, 3, 4]
 *
 * flattenDepth([1, [2, [3, 4, [5, 6]], [7]]);    // => [1, 2, 3, 4, 5, 6, 7]
 * flattenDepth([1, [2, [3, 4, [5, 6]], [7]], 2); // => [1, 2, [3, 4, [5, 6]], 7]
 */
export default function flattenDepth(array, maxDepth) {
  if (!array || !array.length) return [];

  maxDepth = +maxDepth;
  maxDepth = maxDepth === 0 ? 0 : maxDepth || 1;

  return flattenDepthBase(array, maxDepth, [], 0);
}
