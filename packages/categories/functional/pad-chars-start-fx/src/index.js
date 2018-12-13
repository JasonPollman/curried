import fmake from '@foldr/internal-fmake';
import padStart from '@foldr/pad-start';

/**
 * **Functional, autocurried version of [padStart](#pad-start) with custom charset.**
 *
 * Pads the beginning of a string to the given `length` using `chars`.
 *
 * If `length` is less than or equal to zero or the the original string is returned.
 *
 * @name padCharsStartFx
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
 * import { padCharsStartFx } from '@foldr/all';
 *
 * padCharsStartFx('?')(5)('foo'); // => '??foo';
 * padCharsStartFx('?', 8, 'foo'); // => '?????foo';
 */
export default fmake(padStart, {
  arity: 3,
  signature: [2, 1, 0],
});
