/**
 * Exports the `clamp` function.
 * @since 11/14/18
 * @file
 */

import toNumber from '@foldr/to-number';
import FunctionalFactory from '@foldr/internal-fn-factory';

const INF = Infinity;

/* eslint-disable no-nested-ternary, no-param-reassign, no-self-compare */

/**
 * Clamps a number in the range `lower` and `upper`.
 * If `lower` in greater than `upper`, `lower` takes precedence.
 *
 * If called with only two arguments, the signature becomes: `clamp(x, upper)`.
 *
 * This function will coerce `x`, `lower`, and `upper` to numbers,
 * so string values like `'1'` and `'0b101'` can be used.
 *
 * If `x` is `NaN` it cannot be clamped, so `NaN` is returned.
 * If `lower` or `upper` is NaN, they are converted to `-Infinity`
 * and `Infinity`, respectively.
 *
 * @name clamp
 * @param {number} x The value to clamp.
 * @param {number=} lower The minimum value `x` can be.
 * @param {number} upper The maximum value `x` can be.
 * @returns {number} The clamped value.
 *
 * @category number
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * clamp(5, 0, 10);   // => 5
 * clamp(-10, 0, 10); // => 0
 * clamp(20, 0, 10);  // => 10
 */
export default function clamp(x, lower, upper) {
  // Note, if called with 2 arguments the signature will be clamp(x, upper).
  if (upper === undefined) {
    upper = lower;
    lower = -INF;
  }

  x = toNumber(x);

  // `x` is NaN, don't even attempt to clamp.
  if (x !== x) return x;

  lower = toNumber(lower);
  upper = toNumber(upper);

  // Either `upper` or `lower` is NaN
  if (upper !== upper) upper = INF;
  if (lower !== lower) lower = -INF;

  // Note, if lower > upper, lower has precedence.
  if (lower > upper) upper = lower;
  return x < lower ? lower : x > upper ? upper : x;
}

/**
 * Functional, autocurried version of [clamp](#clamp).
 *
 * Clamps a number in the range `lower` and `upper`.
 * If `lower` in greater than `upper`, `lower` takes precedence.
 *
 * If called with only two arguments, the signature becomes: `clamp(x, upper)`.
 *
 * This function will coerce `x`, `lower`, and `upper` to numbers,
 * so string values like `'1'` and `'0b101'` can be used.
 *
 * If `x` is `NaN` it cannot be clamped, so `NaN` is returned.
 * If `lower` or `upper` is `NaN`, they are converted to `-Infinity`
 * and `Infinity`, respectively.
 *
 * @name clamp.fn
 * @param {number=} lower The minimum value `x` can be.
 * @param {number} upper The maximum value `x` can be.
 * @param {number} x The value to clamp.
 * @returns {number} The clamped value.
 *
 * @arity 3
 * @autocurried
 * @category functional
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * clamp.fn(0, 10)(5);   // => 5
 * clamp.fn(0, 10)(-10); // => 0
 * clamp.fn(10)(20)(0);  // => 10
 */
export const fn = FunctionalFactory(clamp, {
  arity: 3,
  signature: [2, 0, 1],
});
