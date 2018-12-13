import flattenDepth from '@foldr/flatten-depth';

/**
 * Flattens an array to depth `Infinity`.
 *
 * Internally this uses [flattenDepth](#flatten-depth).
 *
 * @name flattenDeep
 * @param {Array} array The array to deeply flatten.
 * @returns {Array} A newly flattened array.
 *
 * @arity 1
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { flattenDeep } from '@foldr/all';
 *
 * flattenDeep([1, 2, 3, 4]);                 // => [1, 2, 3, 4]
 * flattenDeep([1, [2, [3, 4, [5, 6]], [7]]); // => [1, 2, 3, 4, 5, 6, 7]
 * flattenDeep([[1], [2], [3], 4]);           // => [1, 2, 3, 4]
 */
export default function flattenDeep(array) {
  return flattenDepth(array, Infinity);
}
