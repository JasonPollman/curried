import pad from '@foldr/pad';
import toString from '@foldr/to-string';

/**
 * Pads the beginning of a string to `length` using `chars` (which default to a space).
 *
 * If `length` is less than or equal to zero or the `toString` evaluation of `chars`
 * is an empty string, the original string is returned.
 *
 * @name padStart
 * @param {string} string The string to left pad.
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
 * import { padStart } from '@foldr/all';

 * padStart('foo', 5); // => '  foo';
 * padStart('foo', 8); // => '     foo';
 *
 * // Using the optional `chars` argument
 * pad('foo', 10, '<>'); // => '<><><><foo';
 */
export default function padStart(string, length, chars) {
  string = toString(string); // eslint-disable-line no-param-reassign

  const paddingSize = length - string.length;
  if (paddingSize < 0) return string;

  return pad('', paddingSize, chars) + string;
}
