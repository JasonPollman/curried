/**
 * Exports the `toLowerCase` function.
 * @since 10/29/18
 * @file
 */

import toString from '@foldr/to-string';

/**
 * Converts a string to lowercase like String#toLowerCase, but guards against nil input.
 * @param {string} str The string to conver to lowercase.
 * @returns {string} The string in lowercase.
 * @category util
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 * toLowerCase('FooBar');  // => 'foobar'
 * toLowerCase('FOO_BAR'); // => 'foo_bar'
 */
export default function toLowerCase(str) {
  return toString(str).toLowerCase();
}
