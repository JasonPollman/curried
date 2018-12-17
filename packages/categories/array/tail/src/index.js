
/**
 * Returns a new array containing all elements of the provided array except the first.
 *
 * @name tail
 * @param {Array} array The array to get the tail of.
 * @returns {Array} A new array containing the elements (0..N] from the original array.
 *
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { tail } from '@foldr/all';
 *
 * tail([1, 2, 3, 4]); // => [2, 3, 4]
 * tail([1]);          // => []
 * tail([]);           // => []
 */
export default function tail(array) {
  let size = array ? array.length || 0 : 0;
  if (size < 2) return [];

  const results = new Array(size - 1);
  while (--size) results[size - 1] = array[size];

  return results;
}
