import toString from '@foldr/to-string';

/**
 * Converts a string to uppercase like `String#toUpperCase`, but guards against nil input.
 *
 * @name toUpperCase
 * @param {string} str The string to conver to uppercase.
 * @returns {string} The string in uppercase.
 *
 * @arity 1
 * @category string
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { toUpperCase } from '@foldr/all';
 *
 * toUpperCase('foobar');  // => 'FOOBAR'
 * toUpperCase('foo_bar'); // => 'FOO_BAR'
 */
export default function toUpperCase(str) {
  return toString(str).toUpperCase();
}
