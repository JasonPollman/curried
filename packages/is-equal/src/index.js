/**
 * Exports the `isEqual` function.
 * @since 11/17/18
 * @file
 */

/* eslint-disable no-self-compare */

/**
 * Determines is `x` is equal to `y` according to the SameValueZero comparison.
 * This is basically the equivalent of `===`, except that it accounts for
 * `NaN === NaN`, which returns `false` when using `===` and true according to the
 * SameValueZero comparison.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
 *
 * @name isEqual
 * @param {any} x The first value to compare.
 * @param {any} y The seconds value to compare.
 * @returns {boolean} True if `x` is equal to `y`.
 *
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * isEqual(1, 1);         // => true
 * isEqual(1, '1');       // => false
 *
 * isEqual('foo', 'foo'); // => true
 * isEqual(NaN, NaN);     // => true
 * isEqual(0, NaN);       // => false
 *
 * isEqual({}, {});       // => false
 *
 * const obj = {};
 * isEqual(obj, obj);     // => true
 */
export default function isEqual(x, y) {
  return x === x ? x === y : y !== y;
}
