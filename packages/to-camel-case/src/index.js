/**
 * Exports the `toCamelCase` function.
 * @since 10/29/18
 * @file
 */

import toWords from '@foldr/to-words';
import toUpperFirst from '@foldr/to-upper-first';

/**
 * Converts a string to camel case.
 *
 * @name toCamelCase
 * @param {string} string The string to convert to camel case.
 * @returns {Array<string>} The camel cased string.
 *
 * @category string
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * toCamelCase('foo bar');  // => 'fooBar'
 * toCamelCase('foo-bar');  // => 'fooBar'
 * toCamelCase('foo_bar');  // => 'fooBar'
 */
export default function toCamelCase(string) {
  const words = toWords(string);
  const count = words.length;

  if (!count) return '';

  let i = 1;
  let result = words[0].toLowerCase();

  while (i < count) {
    result += toUpperFirst(words[i++]);
  }

  return result;
}
