/**
 * Exports the "interpolateBrackets" function.
 * @since 10/13/18
 * @file
 */

import interpolate from '@foldr/interpolate';

/**
 * Interpolates string, replacing values between brackets (`[]`) with properties from `tokens`.
 * @param {string} string The string to interpolate.
 * @param {Object} tokens The set of tokens that can be used as replacements in `string`.
 * @returns {string} The interpolated string.
 * @category string
 * @publishdoc
 * @since v0.0.0
 * @autocurried
 * @export
 * @example
 *
 * const string = 'The [verb] brown [thing] jumped over the lazy brown [animal]';
 * const template = interpolateBrackets(string);
 *
 * template({
 *   verb: 'quick',
 *   thing: 'fox',
 *   animal: 'dog',
 * });
 * // => 'The quick brown fox jumped over the lazy brown dog'
 *
 * template({
 *   verb: 'fast',
 *   thing: 'fox',
 *   animal: 'dog',
 * });
 * // => 'The fast brown fox jumped over the lazy brown dog'
 */
export default interpolate({
  delims: ['[', ']'],
});
