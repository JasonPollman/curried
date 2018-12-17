import trim from '@foldr/trim';
import fmake from '@foldr/internal-fmake';

/**
 * Trims `chars` from the beginning and end of a string.
 *
 * @name trimCharsFx
 * @param {string} string The string to trim
 * @param {string} chars The characters from trim from `string`.
 * @returns {string} The trimmed string.
 *
 * @arity 2
 * @category string
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { trimCharsFx } from '@foldr/all';
 *
 * trimFx(' ')('     foobar     ');  // => 'foobar'
 * trimFx('/')('/foo/bar/');         // => 'foo/bar'
 * trimFx('<>', '<><><foobar><><>'); // => 'foobar'
 */
export default fmake(trim, {
  arity: 2,
  signature: [1, 0],
});
