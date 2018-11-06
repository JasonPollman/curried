/**
 * Returns the nth element in an array.
 * @param {Array} array The array to get the nth element of.
 * @param {number} n The index of the array to get the element of.
 * @returns {any} The value at the nth index of an array.
 * @category array
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 * nth([1, 2, 3, 4], 1); // => 2
 * nth([], 1);           // => undefined
 */
export default function nth(array, n) {
  return array ? array[n] : undefined;
}
