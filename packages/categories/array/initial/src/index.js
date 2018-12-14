/**
 * Returns a new array containing all elements of the provided array except the last.
 *
 * @name initial
 * @param {Array} array The array to get all except for the last element of.
 * @returns {Array} A new array containing the elements [0..N) from the original array.
 *
 * @arity 1
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { initial } from '@foldr/all';
 *
 * initial([1, 2, 3, 4]); // => [1, 2, 3]
 * initial([1]);          // => []
 * initial([]);           // => []
 */
export default function initial(array) {
  if (!array) return [];

  const len = array.length;
  if (len <= 0) return [];

  let size = len - 1 || 0;

  // If you know the eventual size of the array, it's
  // much faster to initialize with a given size since
  // this will prevent reallocation later.
  const results = new Array(size);

  while (--size >= 0) results[size] = array[size];
  return results;
}
