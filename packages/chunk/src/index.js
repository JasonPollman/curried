/**
 * Exports the `chunk` function.
 * @since 11/18/18
 * @file
 */

import toNumber from '@foldr/to-number';
import FunctionalFactory from '@foldr/internal-f-factory';

const { ceil } = Math;

/* eslint-disable no-param-reassign, no-multi-assign, no-bitwise */

/**
 * Chunks an array into equal arrays of size `n`. If the number of elements in the array
 * doesn't split evenly, the last array in the returned array will contain the remaining
 * elements.
 *
 * @name chunk
 * @param {Array} array The array to chunk.
 * @param {number} [n=1] The number of elements (size) that should be in each chunk.
 * @returns {Array<Array>} The chunked array.
 *
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * chunk([1, 2, 3, 4]);       // => [[1], [2], [3], [4]]
 * chunk([1, 2, 3, 4], 2);    // => [[1, 2], [3, 4]]
 * chunk([1, 2, 3, 4, 5], 3); // => [[1, 2], [3, 4], [5]]
 */
export default function chunk(array, n) {
  const size = array.length;
  if (!size) return [];

  n = (n != null ? (toNumber(n) || 0) : 1) | 0;
  if (n <= 0) return [];

  let i = 0;
  let c = 0;
  let e = 0;

  // If you know the eventual size of the array, it's
  // much faster to initialize with a given size since
  // this will prevent reallocation later.
  const results = new Array(ceil(size / n));
  results[0] = new Array(size < n ? size : n);

  while (i < size) {
    results[c][e++] = array[i++];

    if (e > n - 1 && i !== size) {
      results[++c] = new Array(size - i < n ? size - i : n);
      e = 0;
    }
  }

  return results;
}

/**
 * Functional, autocurried version of [chunk](#chunk).
 *
 * Chunks an array into equal arrays of size `n`. If the number of elements in the array
 * doesn't split evenly, the last array in the returned array will contain the remaining
 * elements.
 *
 * @name chunk
 * @param {Array} array The array to chunk.
 * @param {number} [n=1] The size of each chunk.
 * @returns {Array<Array>} The chunked array.
 *
 * @arity 2
 * @autocurried
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * chunk([1, 2, 3, 4]);       // => [[1], [2], [3], [4]]
 * chunk([1, 2, 3, 4], 2);    // => [[1, 2], [3, 4]]
 * chunk([1, 2, 3, 4, 5], 3); // => [[1, 2], [3, 4], [5]]
 */
export const f = FunctionalFactory(chunk, {
  arity: 2,
  signature: [1, 0],
});
