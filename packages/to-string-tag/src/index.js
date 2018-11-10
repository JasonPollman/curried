/**
 * Exports the "toStringTag" function.
 * @since 10/11/18
 * @file
 */

const { toString } = Object.prototype;

/**
 * Calls Object.prototype.toString on `thing`.
 * This is primarily used internally, but could be useful as cross-frame compatible "instanceof"
 * checks, since `x instanceof Array`, for example, won't work across browser frames.
 * @param {any} thing The thing to get the toString tag of.
 * @returns {string} The `thing's` toString representation.
 * @category utility
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * toStringTag([]);    // => '[object Array]'
 * toStringTag({});    // => '[object Object]'
 * toStringTag(10);    // => '[object Number]'
 * toStringTag('foo'); // => '[object String]'
 */
export default function toStringTag(thing) {
  return toString.apply(thing);
}
