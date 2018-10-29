/**
 * Exports the "interpolateBraces" function.
 * @since 10/13/18
 * @file
 */

import interpolate from '@foldr/interpolate';

/**
 * Interpolates string, replacing values between braces (`{}`) with properties from `tokens`.
 * @param {string} string The string to interpolate.
 * @param {Object} tokens The set of tokens that can be used as replacements in `string`.
 * @returns {string} The interpolated string.
 * @category string
 * @memberof foldr
 * @since v0.0.0
 * @autocurried
 * @export
 * @example
 *
 * const string = 'The {verb} brown {thing} jumped over the lazy brown {animal}';
 *
 * interpolateBraces(string, {
 *   verb: 'quick',
 *   thing: 'fox',
 *   animal: 'dog',
 * });
 * // => 'The quick brown fox jumped over the lazy brown dog'
 */
export default interpolate({
  delims: ['{', '}'],
});
