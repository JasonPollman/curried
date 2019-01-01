import toNumber from '@foldr/to-number';

const { ceil } = Math;

/**
 * Chunks an array into equal parts of size `n`.
 *
 * If the number of elements in the array doesn't split evenly, the last array in the
 * returned array will contain the remaining elements.
 *
 * @name chunk
 * @param {Array} array The array to chunk.
 * @param {number} [chunkSize=1] The number of elements (size) that should be in each chunk.
 * @returns {Array<Array>} The chunked array.
 *
 * @arity 2
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { chunk } from '@foldr/all';
 *
 * chunk([1, 2, 3, 4]);       // => [[1], [2], [3], [4]]
 * chunk([1, 2, 3, 4], 2);    // => [[1, 2], [3, 4]]
 * chunk([1, 2, 3, 4, 5], 3); // => [[1, 2], [3, 4], [5]]
 */
export default function chunk(array, chunkSize) {
  if (!array) return [];

  const size = array.length;
  if (!size) return [];

  const n = (chunkSize != null ? (toNumber(chunkSize) || 0) : 1) | 0;
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
