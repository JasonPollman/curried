import toString from '@foldr/to-string';

/**
 * Capitalizes the first character of a string.
 *
 * @name toUpperFirst
 * @param {string} str The string to conver to upper first.
 * @returns {string} The string with the first character uppercased.
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
 * toUpperFirst('foobar'); // => 'Foobar'
 */
export default function toUpperFirst(str) {
  const string = toString(str);
  return string && string[0].toUpperCase() + string.slice(1, string.length);
}
