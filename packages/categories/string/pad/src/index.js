import toString from '@foldr/to-string';
import toNumber from '@foldr/to-number';

const { floor } = Math;

/* eslint-disable no-param-reassign */

/**
 * Internal, optimized string repeat function.
 * @param {string} string The string to repeat.
 * @param {number} n The number of times to repeat the string.
 * @returns {string} The repeated string.
 */
function repeat(string, n) {
  let results = '';

  do {
    if (n % 2) results += string;
    n = floor(n / 2);
    if (n) string += string;
  } while (n);

  return results;
}

/**
 * Pads both ends of a string to the given `length` using `chars` (which default to a single space).
 *
 * If the length is odd, the remaining uneven character will be
 * applied to the *right* side of the returned string.
 *
 * If `length` is less than or equal to zero or the `toString` evaluation of `chars`
 * is an empty string, the original string is returned.
 *
 * @name pad
 * @param {string} string The string to pad.
 * @param {number} length The length to pad `string` to.
 * @param {chars=} [chars=' '] The character set to pad `string` using.
 * @returns {string} The padded string.
 *
 * @arity 3
 * @category string
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { pad } from '@foldr/all';
 *
 * pad('foo', 5); // => ' foo ';
 * pad('foo', 8); // => '  foo   ';
 *
 * // Using the optional `chars` argument
 * pad('foo', 10, '<>'); // => '<><foo<><>';
 */
export default function pad(string, length, chars) {
  string = toString(string);
  length = toNumber(length);

  if (!length) return string;

  let paddingSize = length - string.length;
  if (paddingSize < 0) return string;

  // Uses a whitespace character for `null` and `undefined`.
  // All others are passed to `toString`, which will yield
  // *some* kind of string value, albeit ''.
  chars = chars == null ? ' ' : toString(chars);
  if (!chars) return string;

  const charsSize = chars.length;

  let n = 0;
  let i = 0;
  let results = '';

  // Nothing to put into the middle, so we can't split
  // the padding up like we're doing below...
  if (!string) {
    results = repeat(chars, floor(length / charsSize));
    const remaining = length - results.length;
    while (i++ < remaining) results += chars[n++ % charsSize];
    return results;
  }

  let padded;

  // If n is odd, make it even, so division by 2 results in an integer.
  // This also allows us to create the same padding on the left and right at once
  // use it on both sides and append the final character if paddingSize is odd.
  const hasOddSizedPadding = paddingSize % 2;
  if (hasOddSizedPadding) paddingSize -= 1;

  const halfOfPaddingSize = paddingSize / 2;

  // Optimization to circumvent floor and the while loop below.
  if (charsSize === 1) {
    padded = repeat(chars, halfOfPaddingSize);
    results = padded + string + padded;
    return hasOddSizedPadding ? results + chars : results;
  }

  // Repeat the padding characters as many times necessary
  // to reach half the padding size, but don't exceed it.
  const repeatSize = floor(halfOfPaddingSize / charsSize);
  padded = repeatSize ? repeat(chars, repeatSize) : '';

  // Apply remaining padding characters to the padding
  // that weren't captured by the repeat above.
  const remaining = halfOfPaddingSize - padded.length;
  while (i++ < remaining) padded += chars[n++ % charsSize];

  results = padded + string + padded;
  return hasOddSizedPadding ? results + chars[n % charsSize] : results;
}
