/**
 * Exports the `toNumber` function.
 * @since 10/29/18
 * @file
 */

import { IS_IE } from '@foldr/internal-env';

const toInt = parseInt;
const NAN = 0 / 0;

/**
 * Detects octal number strings.
 * For example: '0o7' and '0O7'
 * @type {RegExp}
 */
const IS_OCTAL = /^0o[0-7]+$/i;

/**
 * Detects binary number strings.
 * For example: '0b7' and '0B7'
 * @type {RegExp}
 */
const IS_BINARY = /^0b[0-1]+$/i;

/**
 * A version of `toNumber` for IE, since IE doesn't support
 * binary and octal number conversions like `+0b` and `+0o`.
 * @param {number} x The value to convert to a number.
 * @returns {number} `x` as a number.
 * @export
 */
export function toNumberIE(x) {
  if (typeof x === 'number') return x;
  if (typeof x === 'symbol') return NAN;

  const isBinary = IS_BINARY.test(x);
  if (isBinary || IS_OCTAL.test(x)) return toInt(x.slice(2), isBinary ? 2 : 8);

  return +x;
}

/**
 * Converts `x` to a number.
 * @param {number} x The value to convert to a number.
 * @returns {number} `x` as a number.
 * @export
 */
export function toNumber(x) {
  // eslint-disable-next-line no-nested-ternary
  return typeof x === 'number' ? x : typeof x === 'symbol' ? NAN : +x;
}

/**
 * Converts a value into a string by calling it's inherited or own `toString` method.
 * An empty string is returned for `null` and `undefined`.
 * @param {any} x The value to convert to a string.
 * @returns {string} The value to convert to a string.
 * @category util
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 * toString(null);      // => ''
 * toString(undefined); // => ''
 * toString(0);         // => '0'
 * toString('foo');     // => 'foo'
 * toString([1, 2, 3]); // => '1,2,3'
 *
 * toString({
 *   value: 'string-value',
 *   toString() { return this.value; },
 * }) // => 'value'
 */
export default !IS_IE ? toNumber : /* istanbul ignore next */ toNumberIE;
