import toFinite from '@foldr/to-finite';

/**
 * Converts `x` to an integer.
 *
 * Internally, this calls [toNumber](#to-number).
 *
 * @name toInteger
 * @param {string|number|Object} x The value to convert to a number.
 * @returns {number} The number equivalent of `x`.
 *
 * @arity 1
 * @category conversion
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { toInteger } from '@foldr/all';
 *
 * toInteger(1.123);     // => 1;
 * toInteger('1.123');   // => 1;
 * toInteger('1e6');     // => 1000000;
 *
 * toInteger({
 *   value: 'string-value',
 *   valueOf() { return 5.123; },
 * }) // => 5
 */
export default function toInteger(x) {
  x = toFinite(x); // eslint-disable-line no-param-reassign
  return x - (x % 1);
}
