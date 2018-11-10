/**
 * Exports the `toUpperCase` function.
 * @since 10/29/18
 * @file
 */

import toString from '@foldr/to-string';

/**
 * Converts a string to uppercase like String#toUpperCase, but guards against nil input.
 * @param {string} str The string to conver to uppercase.
 * @returns {string} The string in uppercase.
 * @category util
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * toUpperCase('foobar');  // => 'FOOBAR'
 * toUpperCase('foo_bar'); // => 'FOO_BAR'
 */
export default function toUpperCase(str) {
  return toString(str).toUpperCase();
}
