/**
 * Exports the `nth` function.
 * @since 11/10/18
 * @file
 */

import FunctionalFactory from '@foldr/internal-f-factory';

/**
 * Returns the nth element in an array.
 * If the value of `n` is greater than zero, the nth element of `array` will be returned.
 * If `n` is less than zero, the nth value of the array starting from the end of the array
 * will be returned.
 *
 * @name nth
 * @param {Array} array The array to get the nth element of.
 * @param {number} index The index of the array to get the element of.
 * @returns {any} The value at the nth index of an array.
 *
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
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

/**
 * Functional, autocurried version of [nth](#nth).
 *
 * Returns the nth element in an array.
 * If the value of `n` is greater than zero, the nth element of `array` will be returned.
 * If `n` is less than zero, the nth value of the array starting from the end of the array
 * will be returned.
 *
 * @name nth.f
 * @param {number} index The index of the array to get the element of.
 * @param {Array} array The array to get the nth element of.
 * @returns {any} The value at the nth index of an array.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * nth.f(1, [1, 2, 3, 4]);  // => 2
 * nth.f(-2)([1, 2, 3, 4]); // => 3
 * nth.f(1)([]);            // => undefined
 */
export const f = FunctionalFactory(nth, {
  arity: 2,
  signature: [1, 0],
});
