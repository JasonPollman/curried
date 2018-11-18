/**
 * Exports the "toStringTag" function.
 * @since 10/11/18
 * @file
 */

const { toString } = Object.prototype;

/**
 * Calls Object.prototype.toString on `x`.
 * This is primarily used internally, but could be useful as cross-frame compatible "instanceof"
 * checks, since `x instanceof Array`, for example, won't work across browser frames.
 *
 * @name toStringTag
 * @param {any} x The value to get the "toString" tag of.
 * @returns {string} The `x's` toString representation.
 *
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * toStringTag([]);    // => '[object Array]'
 * toStringTag({});    // => '[object Object]'
 * toStringTag(10);    // => '[object Number]'
 * toStringTag('foo'); // => '[object String]'
 */
export default function toStringTag(x) {
  return toString.apply(x);
}
