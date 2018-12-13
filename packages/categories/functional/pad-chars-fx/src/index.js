import pad from '@foldr/pad';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [pad](#pad) with custom char set.**
 *
 * Pads both ends of a string to the given `length` with the given set of `chars`.
 *
 * If the length is odd, the remaining whitespace will be
 * applied to the *right* side of the returned string.
 *
 * If `length` is less than or equal to zero or the the original string is returned.
 *
 * @name padCharsFx
 * @param {number} length The length to pad `string` to.
 * @param {string} string The string to pad.
 * @returns {string} The padded string.
 *
 * @arity 3
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { padCharsFx } from '@foldr/all';
 *
 * padCharsFx('<>')(5)('foo'); // => '<foo<';
 * padCharsFx('<>', 8, 'foo'); // => '<>foo<><';
 *
 * const padZeros = padCharsFx(0);
 * padZeros(10, 1); // => '0000100000'
 */
export default fmake(pad, {
  arity: 3,
  signature: [2, 1, 0],
});
