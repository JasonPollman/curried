import toNumber from '@foldr/to-number';

const truncate = Math.trunc || /* istanbul ignore next */ Math.floor;

/**
 * Converts `x` to an integer.
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
  return truncate(toNumber(x));
}
