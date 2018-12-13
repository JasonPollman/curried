import fmake from '@foldr/internal-fmake';
import padEnd from '@foldr/pad-end';

/**
 * **Functional, autocurried version of [padEnd](#pad-end) with custom charset.**
 *
 * Pads the end of a string to the given `length` with the given set of `chars`.
 *
 * If `length` is less than or equal to zero or the the original string is returned.
 *
 * @name padCharsEndFx
 * @param {string} chars The chars to pad `string` with.
 * @param {number} length The length to left pad `string` to.
 * @param {string} string The string to let pad.
 * @returns {string} The padded string.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { padCharsEndFx } from '@foldr/all';
 *
 * padCharsEndFx('?')(5)('foo'); // => 'foo??';
 * padCharsEndFx('?', 8, 'foo'); // => 'foo?????';
 */
export default fmake(padEnd, {
  arity: 3,
  signature: [2, 1, 0],
});
