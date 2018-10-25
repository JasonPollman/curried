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
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is a safe integer, false otherwise.
 * @export
 */
export default Number.isSafeInteger || /* istanbul ignore next */ isSafeIntegerPolyfill;
