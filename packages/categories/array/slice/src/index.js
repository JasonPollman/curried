/* eslint-disable no-param-reassign */

import toInteger from '@foldr/to-integer';

/**
 * Slices an array, like Array#slice, except that this version guards against
 * "bad" input and always returns an Array.
 *
 * @name slice
 * @param {Array} array The array to slice.
 * @param {number} start The index to start the slice from (inclusive).
 * @param {number} end The index to end the slice at (exclusive).
 * @returns {Array} The sliced array.
 *
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { slice } from '@foldr/all';
 *
 * slice([1, 2, 3, 4, 5], 2);    // => [3, 4, 5]
 * slice([1, 2, 3, 4, 5], 0, 2); // => [1, 2]
 * slice([1, 2, 3, 4, 5], -2);   // => [4, 5]
 */
export default function slice(array, start, end) {
  if (!array) return [];

  const size = array.length;
  if (!size) return [];

  // Defaulting start/end based on received arguments.
  start = start === undefined ? 0 : toInteger(start) || 0;
  end = end === undefined ? size : toInteger(end) || 0;

  if (start < 0) {
    start = size + start;
    start = start < 0 ? 0 : start;
  }

  if (end < 0) {
    end = size + end;
  }

  if (end > size) end = size;
  if (end <= start) return [];

  const results = new Array(end - start);
  while (--end >= start) results[end - start] = array[end];

  return results;
}
