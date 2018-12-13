import pad from '@foldr/pad';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [pad](#pad).**
 *
 * Pads both ends of a string to the given `length` with whitespace.
 *
 * If the length is odd, the remaining whitespace will be
 * applied to the *right* side of the returned string.
 *
 * If `length` is less than or equal to zero or the the original string is returned.
 *
 * @name padFx
 * @param {number} length The length to pad `string` to.
 * @param {string} string The string to pad.
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
 * import { padFx } from '@foldr/all';
 *
 * padFx(5)('foo'); // => ' foo ';
 * padFx(8, 'foo'); // => '  foo   ';
 */
export default fmake(pad, {
  arity: 2,
  signature: [1, 0],
});
