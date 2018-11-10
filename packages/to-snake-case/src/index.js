/**
 * Exports the `toSnakeCase` function.
 * @since 10/29/18
 * @file
 */

import toWords from '@foldr/to-words';

/**
 * Converts a string to camel case.
 * @param {string} string The string to convert to camel case.
 * @returns {Array<string>} The camel cased string.
 * @category utility
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * toSnakeCase('fooBar');  // => 'foo_bar'
 * toSnakeCase('foo bar');  // => 'foo_bar'
 * toSnakeCase('foo-bar');  // => 'foo_bar'
 */
export default function toSnakeCase(string) {
  const words = toWords(string);
  const count = words.length;

  if (!count) return '';

  let i = 1;
  let result = words[0].toLowerCase();

  while (i < count) {
    result += `_${words[i++].toLowerCase()}`;
  }

  return result;
}
