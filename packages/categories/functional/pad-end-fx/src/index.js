import fmake from '@foldr/internal-fmake';
import padEnd from '@foldr/pad-end';

/**
 * **Functional, autocurried version of [padEnd](#pad-end).**
 *
 * Pads the end of a string to the given `length` with whitespace.
 *
 * If `length` is less than or equal to zero or the the original string is returned.
 *
 * @name padEndFx
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
 * import { padEndFx } from '@foldr/all';
 *
 * padEndFx(5)('foo'); // => 'foo  ';
 * padEndFx(8, 'foo'); // => 'foo     ';
 */
export default fmake(padEnd, {
  arity: 2,
  signature: [1, 0],
});
