import isNumber from '@foldr/is-number';

/**
 * Determines if the given value is a finite number. That is both a number and not Infinity.
 * This version is based on the `Number.isFinite` polyfill from
 * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill).
 * Exporting this for testing purposes only.
 * @param {any} x The value to assert finiteness.
 * @returns {boolean} True if `x` is a finite, false otherwise.
 * @export
 */
export function isFinitePolyfill(x) {
  return isNumber(x) && isFinite(x); // eslint-disable-line no-restricted-globals
}

/**
 * Determines if the given value is a finite primitive number (a number and not Infinity).
 *
 * @name isFinite
 * @param {any} x The value to assert finiteness.
 * @returns {boolean} True if `x` is a finite, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isFinite } from '@foldr/all';
 *
 * isFinite(1);         // => true
 * isFinite(Infinity);  // => false
 */
export default Number.isFinite || /* istanbul ignore next */ isFinitePolyfill;
