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
 * @param {string|number|Object} x The value to convert to a number.
 * @returns {number} `x` as a number.
 * @export
 */
export function toNumber(x) {
  // eslint-disable-next-line no-nested-ternary
  return typeof x === 'number' ? x : typeof x === 'symbol' ? NAN : +x;
}

/**
 * Converts `x` to a number.
 * If `x` is a number, it will be returned, if `x` is a string it will be coerced to
 * a number using `+x`. If `x` is an object, it's `valueOf` method will be called, if
 * available.
 *
 * Binary, octal, and hexidecimal strings (i.e. '0b101') will be converted
 * to their number equivalent.
 *
 * @name toNumber
 * @param {string|number|Object} x The value to convert to a number.
 * @returns {number} The number equivalent of `x`.
 *
 * @category number
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * toNumber(0);     // => 0;
 * toNumber('0');   // => 0;
 * toNumber('1e6'); // => 1000000;
 *
 * toNumber({
 *   value: 'string-value',
 *   valueOf() { return 5; },
 * }) // => 5
 */
export default !IS_IE ? toNumber : /* istanbul ignore next */ toNumberIE;
