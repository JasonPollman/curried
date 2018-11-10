/**
 * Exports the `toUpperFirst` function.
 * @since 10/29/18
 * @file
 */

import toString from '@foldr/to-string';

/**
 * Converts the first character of a string to uppercase.
 * @param {string} str The string to conver to upper first.
 * @returns {string} The string with the first character uppercased.
 * @category util
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * toUpperFirst('foobar'); // => 'Foobar'
 */
export default function toUpperFirst(str) {
  const string = toString(str);
  return string && string[0].toUpperCase() + string.slice(1, string.length);
}
