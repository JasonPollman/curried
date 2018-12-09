/**
 * Exports the `isSafeInteger` function.
 * This is based off the MDN polyfill:
 * @since 9/25/18
 * @file
 */

import isInteger from '@foldr/is-integer';

/**
 * This is based on the polyfill from
 * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger).
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is a safe integer, false otherwise.
 */
export function isSafeIntegerPolyfill(x) {
  return isInteger(x) && Math.abs(x) <= Number.MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
 * double precision number which isn't the result of a rounded unsafe integer.
 *
 * @name isSafeInteger
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is a safe integer, false otherwise.
 *
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * isSafeInterger(0);        // => true
 * isSafeInterger(10);       // => true
 * isSafeInterger(NaN);      // => false
 * isSafeInterger(1.1);      // => false
 * isSafeInterger(Infinity); // => false
 */
export default Number.isSafeInteger || /* istanbul ignore next */ isSafeIntegerPolyfill;
