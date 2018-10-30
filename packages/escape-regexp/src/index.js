/**
 * Exports the `escapeRegExp` function.
 * @since 10/28/18
 * @file
 */

const ESCAPE_RE = /[\\^$.*+?()[\]{}|]/g;

/**
 * Escapes characters that have special meaning in regular expressions. That is:
 * `\\`, `^`, `$`, `.`, `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}`, and `|`. This
 * is useful to creating new regular expressions from user input, for example.
 * @param {string} value The string to escape.
 * @returns {string} The escaped string.
 * @category utility
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default function escapeRegExp(value) {
  const string = value == null ? '' : value.toString();
  return string && string.replace(ESCAPE_RE, '\\$&');
}
