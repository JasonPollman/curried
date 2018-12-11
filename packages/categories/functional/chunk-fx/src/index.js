import chunk from '@foldr/chunk';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [chunk](#chunk).**
 *
 * Chunks an array into equal parts of size `n`.
 *
 * If the number of elements in the array doesn't split evenly, the last array in the returned
 * set will contain the remaining items.
 *
 * @name chunkFx
 * @param {number} chunkSize The size of each chunk.
 * @param {Array} array The array to chunk.
 * @returns {Array<Array>} The chunked array.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { chunkFx } from '@foldr/all';
 *
 * chunkFx(1)([1, 2, 3, 4]);    // => [[1], [2], [3], [4]]
 * chunkFx(2)([1, 2, 3, 4]);    // => [[1, 2], [3, 4]]
 * chunkFx(3, [1, 2, 3, 4, 5]); // => [[1, 2], [3, 4], [5]]
 */
export default fmake(chunk, {
  arity: 2,
  signature: [1, 0],
});
