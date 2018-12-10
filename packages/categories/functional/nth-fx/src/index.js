import nth from '@foldr/nth';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [nth](#nth).**
 *
 * Returns the nth element in an array.
 *
 * If the value of `n` is greater than zero, the nth element of `array` will be returned.
 * If `n` is less than zero, the nth value of the array starting from the end of the array
 * will be returned.
 *
 * @name nthFx
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
 * import { nthFx } from '@foldr/all';
 *
 * nthFx(1, [1, 2, 3, 4]);  // => 2
 * nthFx(-2)([1, 2, 3, 4]); // => 3
 * nthFx(1)([]);            // => undefined
 */
export default fmake(nth, {
  arity: 2,
  signature: [1, 0],
});
