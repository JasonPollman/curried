/**
 * Exports the `toTitleCase` function.
 * @since 10/29/18
 * @file
 */

import toWords from '@foldr/to-words';
import toUpperFirst from '@foldr/to-upper-first';

/**
 * Converts a string to camel case.
 * @param {string} string The string to convert to camel case.
 * @returns {Array<string>} The camel cased string.
 * @category utility
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default function toTitleCase(string) {
  const words = toWords(string);
  const count = words.length;

  if (!count) return '';

  let i = 1;
  let result = toUpperFirst(words[0].toLowerCase());

  while (i < count) {
    result += ` ${toUpperFirst(words[i++].toLowerCase())}`;
  }

  return result;
}
