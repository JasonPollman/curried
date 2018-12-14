import fmake from '@foldr/internal-fmake';
import padStart from '@foldr/pad-start';

/**
 * **Functional, autocurried version of [padStart](#pad-start).**
 *
 * Pads the beginning of a string to the given `length` with whitespace.
 *
 * If `length` is less than or equal to zero or the the original string is returned.
 *
 * @name padStartFx
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
 * import { padStartFx } from '@foldr/all';
 *
 * padStartFx(5)('foo'); // => '  foo';
 * padStartFx(8, 'foo'); // => '     foo';
 */
export default fmake(padStart, {
  arity: 2,
  signature: [1, 0],
});
