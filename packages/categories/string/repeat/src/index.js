import toNumber from '@foldr/to-number';
import toString from '@foldr/to-string';

/* eslint-disable no-param-reassign */

const { floor } = Math;
const { MAX_SAFE_INTEGER } = Number;

/**
 * Repeats a string `n` times.
 *
 * @name repeat
 * @param {string} string The string to repeat.
 * @param {number} n The number of times to repeat `string`.
 * @returns {string} The repeated string.
 *
 * @arity 2
 * @category string
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { repeat } from '@foldr/all';
 *
 * repeat(' ', 10);   // => '          '
 * repeat('foo-', 3); // => 'foo-foo-foo'
 */
export default function repeat(string, n) {
  if (string == null) return '';

  string = toString(string);
  if (!string) return '';

  n = toNumber(n);
  if (!n || n < 0 || n > MAX_SAFE_INTEGER) return '';

  let results = '';

  // Optimization for small values of repeat
  // The advantage here is not having to call `floor`.
  if (n < 6) {
    while (--n >= 0) results += string;
    return results;
  }

  do {
    if (n % 2) results += string;
    n = floor(n / 2);
    if (n) string += string;
  } while (n);

  return results;
}
