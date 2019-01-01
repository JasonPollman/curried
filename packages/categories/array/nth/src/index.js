/**
 * Returns the nth element in an array.
 *
 * If the value of `n` is greater than zero, the nth element of `array` will be returned.
 * If `n` is less than zero, the nth value of the array starting from the end of the array
 * will be returned.
 *
 * @name nth
 * @param {Array} array The array to get the nth element of.
 * @param {number} index The index of the array to get the element of.
 * @returns {any} The value at the nth index of an array.
 *
 * @arity 1
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { nth } from '@foldr/all';
 *
 * nth([1, 2, 3, 4], 1);  // => 2
 * nth([1, 2, 3, 4], -2); // => 3
 * nth([], 1);            // => undefined
 */
export default function nth(array, index) {
  if (!array) return undefined;

  const n = +index;
  const size = array.length;
  const idx = n >= 0 ? n : (size + n);

  return array && idx < size && idx > -1 ? array[idx] : undefined;
}
