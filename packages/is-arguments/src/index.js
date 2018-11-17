/**
 * Exports the "isArray" function.
 * Note: Array.isArray is available in IE9+.
 * @since 10/13/18
 * @file
 */

import toStringTag from '@foldr/to-string-tag';

/**
 * Determines is `x` is an Arguments instance.
 * @param {any} x The thing to check.
 * @returns {boolean} True if `thing` is an Arguments instance, false otherwise.
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * (function () {
 *   return isArguments(arguments);
 * }());
 * // => true
 *
 * isArguments([]);     // => false
 * isArguments('foo');  // => false
 */
export default function isArguments(x) {
  return !!x && toStringTag(x) === '[object Arguments]';
}
