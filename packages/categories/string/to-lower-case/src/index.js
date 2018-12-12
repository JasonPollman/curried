import toString from '@foldr/to-string';

/**
 * Converts a string to lowercase like `String#toLowerCase`, but guards against nil input.
 *
 * @name toLowerCase
 * @param {string} str The string to conver to lowercase.
 * @returns {string} The string in lowercase.
 *
 * @arity 1
 * @category string
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { toLowerCase } from '@foldr/all';
 *
 * toLowerCase('FooBar');  // => 'foobar'
 * toLowerCase('FOO_BAR'); // => 'foo_bar'
 */
export default function toLowerCase(str) {
  return toString(str).toLowerCase();
}
