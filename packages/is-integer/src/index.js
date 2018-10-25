/**
 * Exports the `isInteger` function.
 * @since 10/23/18
 * @file
 */

/* eslint-disable no-bitwise */

import isFinite from '@foldr/is-finite';

// Use Math.trunc if it's available, since
// it behaves more like a bitwise operation
// but work for both 32 and 64 bit numbers.

/* istanbul ignore next */
const floor = Math.trunc || Math.floor;

/**
 * Determines if the given item is an integer.
 * This is based on the `Number.isInteger` polyfill from
 * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger#Polyfill).
 * @param {any} x The value to assert.
 * @returns {boolean} True if `x` is an integer, false otherwise.
 * @export
 */
export function isIntegerPolyfill(x) {
  return isFinite(x) && floor(x) === x;
}

/**
 * Determines if the given item is an integer.
 * @param {any} x The value to assert.
 * @returns {boolean} True if `x` is an integer, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default Number.isInteger || /* istanbul ignore next */ isIntegerPolyfill;
