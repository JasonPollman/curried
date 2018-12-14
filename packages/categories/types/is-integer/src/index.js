import isFinite from '@foldr/is-finite';

const { floor } = Math;

/**
 * Determines if the given value is an integer.
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
 * Determines if the given value is an integer.
 *
 * @name isInteger
 * @param {any} x The value to assert.
 * @returns {boolean} True if `x` is an integer, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isInteger } from '@foldr/all';
 *
 * isInteger(1);    // => true
 * isInteger(1.01); // => false
 */
export default Number.isInteger || /* istanbul ignore next */ isIntegerPolyfill;
