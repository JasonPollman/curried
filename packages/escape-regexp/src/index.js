/**
 * Exports the `escapeRegExp` function.
 * @since 10/28/18
 * @file
 */

import toString from '@foldr/to-string';

/* eslint-disable no-param-reassign */

const ESCAPE_RE = /[\\^$.*+?()[\]{}|]/g;
const { replace } = String.prototype;

/**
 * Escapes characters that have special meaning in regular expressions. That is:
 * `\\`, `^`, `$`, `.`, `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}`, and `|`. This
 * is useful to creating new regular expressions from user input, for example.
 * @param {string} string The string to escape.
 * @returns {string} The escaped string.
 * @category utility
 * @memberof foldr
 * @since v0.0.0
 * @example
 *
 * escapeRegExp('$1.00');                      // => '\\$1\\.00'
 * escapeRegExp('foobar');                     // => 'foobar'
 * escapeRegExp('Is there anybody in there?'); // => 'Is there anybody in there\\?'
 */
export default function escapeRegExp(string) {
  string = toString(string);
  return string && ESCAPE_RE.test(string) ? replace.call(string, ESCAPE_RE, '\\$&') : string;
}
