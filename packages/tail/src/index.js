
/**
 * Returns a new array containing all elements of the provided array except the first.
 * @param {Array} array The array to get the tail of.
 * @returns {Array} A new array containing the elements 1..N from the original array.
 * @category array
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 * tail([1, 2, 3, 4]); // => [2, 3, 4]
 * tail([]);           // => []
 */
export default function tail(array) {
  const results = [];
  if (!array) return results;

  const size = array.length;
  let i = 1;

  while (i < size) results[i - 1] = array[i++];
  return results;
}
