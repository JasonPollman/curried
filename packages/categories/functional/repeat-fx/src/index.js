import fmake from '@foldr/internal-fmake';
import repeat from '@foldr/repeat';

/**
 * **Functional, autocurried version of [repeat](#repeat).**
 *
 * Repeats a string `n` times.
 *
 * @name repeatFx
 * @param {number} n The number of times to repeat `string`.
 * @param {string} string The string to repeat.
 * @returns {string} The repeated string.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { repeat } from '@foldr/all';
 *
 * repeat(10)(' ');   // => '          '
 * repeat(3, 'foo-'); // => 'foo-foo-foo'
 */
export default fmake(repeat, {
  arity: 2,
  signature: [1, 0],
});
