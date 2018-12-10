import indexOf from '@foldr/index-of';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [indexOf](#index-of).**
 *
 * This method is like [Array#indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
 * except that it uses [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) comparsion so it works for `NaN` values.
 *
 * Finds the index of `value` in `array`.
 *
 * @name indexOfFx
 * @param {any} value The value to find the index of.
 * @param {Array} array The array use when finding the index of the given value.
 * @returns {number} The index of `value` in `array`, or `-1` if `value` doesn't
 * exist in array.
 *
 * @arity 2
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { indexOfFx } from '@foldr/index-of';
 *
 * indexOfFx(2)([1, 2, 3]);      // => 1
 * indexOfFx(10, [1, 2, 3]);     // => -1
 * indexOf(NaN)([1, NaN, 2, 3]); // => 1
 */
export default fmake(indexOf, {
  arity: 2,
  signature: [1, 0],
});
