/**
 * Returns a new array containing all elements of the provided array except the last.
 *
 * @name init
 * @param {Array} array The array to get all except for the last element of.
 * @returns {Array} A new array containing the elements [0..N) from the original array.
 *
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * init([1, 2, 3, 4]); // => [1, 2, 3]
 * init([1]);          // => []
 * init([]);           // => []
 */
export default function init(array) {
  const length = array == null ? 0 : array.length;
  if (!length) return [];

  let size = array.length - 1;

  // If you know the eventual size of the array, it's
  // much faster to initialize with a given size since
  // this will prevent reallocation later.
  const results = new Array(size);

  while (--size >= 0) results[size] = array[size];
  return results;
}
