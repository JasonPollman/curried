import toWords from '@foldr/to-words';

/**
 * Converts a string to kebab-case.
 * This is sometimes refered to as "spinal case".
 *
 * @name toKebabCase
 * @param {string} string The string to convert to camel case.
 * @returns {Array<string>} The camel cased string.
 *
 * @arity 1
 * @category string
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { toKebabCase } from '@foldr/all';
 *
 * toKebabCase('fooBar');  // => 'foo-bar'
 * toKebabCase('foo bar');  // => 'foo-bar'
 * toKebabCase('foo_bar');  // => 'foo-bar'
 */
export default function toKebabCase(string) {
  const words = toWords(string);
  const count = words.length;

  if (!count) return '';

  let i = 1;
  let result = words[0].toLowerCase();

  while (i < count) {
    result += `-${words[i++].toLowerCase()}`;
  }

  return result;
}
