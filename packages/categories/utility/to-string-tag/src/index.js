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
 * @arity 1
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { toStringTag } from '@foldr/all';
 *
 * toStringTag([]);    // => '[object Array]'
 * toStringTag({});    // => '[object Object]'
 * toStringTag(10);    // => '[object Number]'
 * toStringTag('foo'); // => '[object String]'
 */
export default function toStringTag(x) {
  return toString.apply(x);
}
