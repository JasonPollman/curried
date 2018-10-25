/**
 * Exports the `isFinite` function.
 * @since 10/23/18
 * @file
 */

import isNumber from '@foldr/is-number';
import { GLOBAL } from '@foldr/internal-env';

/**
 * Determines if the given item is a finite number. That is both a number and not Infinity.
 * This version is based on the `Number.isFinite` polyfill from
 * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill).
 * Exporting this for testing purposes only.
 * @param {any} x The value to assert finiteness.
 * @returns {boolean} True if `x` is a finite, false otherwise.
 * @export
 */
export function isFinitePolyfill(x) {
  return isNumber(x) && GLOBAL.isFinite(x);
}

/**
 * Determines if the given item is a finite primitive number (a number and not Infinity).
 * @param {any} x The value to assert finiteness.
 * @returns {boolean} True if `x` is a finite, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default Number.isFinite || /* istanbul ignore next */ isFinitePolyfill;
