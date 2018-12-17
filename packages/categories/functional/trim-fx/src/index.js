import trim from '@foldr/trim';
import fmake from '@foldr/internal-fmake';

/**
 * Trims whitespace from the beginning and end of a string.
 *
 * @name trimFx
 * @param {string} string The string to trim
 * @returns {string} The trimmed string.
 *
 * @arity 1
 * @category string
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { trimFx } from '@foldr/all';
 *
 * trimFx('     foobar     ');       // => 'foobar'
 * trimFx('/foo/bar/', '/');         // => 'foo/bar'
 * trimFx('<><><foobar><><>', '<>'); // => 'foobar'
 */
export default fmake(trim, {
  arity: 1,
});
