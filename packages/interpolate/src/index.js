/**
 * Exports the "interpolate" function.
 * @since 10/13/18
 * @file
 */

import get from '@foldr/get';
import curry from '@foldr/internal-curry';
import escapeRegExp from '@foldr/escape-regexp';

export const INTERPOLATOR_RE_CACHE = {};

/**
 * Identity function.
 * @param {any} x The passthrough value.
 * @returns {any} The value of `x`.
 */
const identity = x => x;

/**
 * Creating interpolation regular expressions is both few and far
 * between and expensive, so we'll be caching them.
 * Gets the cached regular expression for the current delimiter.
 * If the current start/end delimiter combination isn't cached or
 * hasn't been used yet, the regular expression is created.
 * @param {string} start The start delimiter.
 * @param {string} end The end delimiter.
 * @returns {RegExp} The cached regular expression.
 */
function getInterpolationRegExp(start, end) {
  const key = start + end;

  if (!INTERPOLATOR_RE_CACHE[key]) {
    INTERPOLATOR_RE_CACHE[key] = new RegExp(`(^|.)(${start}\\s*([\\s\\S]*?)\\s*${end})`, 'gm');
  }

  return INTERPOLATOR_RE_CACHE[key];
}

/**
 * Creates a replacer for an interpolator.
 * @param {Object} options Interpolation replacement options.
 * @param {string=} [options.escape='\'] A string value that serves as a escape character
 * that indicates that the current match should be skipped. For example, if
 * '{', and '}' are the delimiters and `\` is the escape character, then
 * `\{foo}` wouldn't be interpolated, but `{foo}` would.
 * @param {string=} [options.strict=false] If true, if the matched value interpolated
 * isn't found in `tokens`, the original string is left untouched, otherwise it's
 * replaced with an empty string.
 * @param {function=} [options.onReplacement=identity] A function that's called each time
 * a replacement is made with the replacement value, the token path, and the
 * entire string being replaced.
 * @param {Object=} tokens The tokens that are available for interolation replacement.
 * @returns {function} A function that's passed to String#replace.
 */
function replacer({ escape = '\\', strict = false, onReplacement = identity }, tokens) {
  return ($0, $1, $2, $3) => {
    if ($0[0] === escape) return $0.slice(1);
    return `${$1}${onReplacement(get(tokens, $3, strict ? $2 : ''), $3, $2)}`;
  };
}

/**
 * Interpolates `string` using `options`, replacing all values with properties from `tokens`.
 * @param {Object} options Interpolation options.
 * @param {Array<string>} options.delims A tuple in which the first element is the start
 * delimiter and the second is the end delimiter. For example ['{', '}'] would replace
 * `{xxx}` in `hello {xxx}!` with `tokens.xxx`.
 * @param {string=} [options.escape='\'] A string value that serves as a escape character
 * that indicates that the current match should be skipped. For example, if
 * '{', and '}' are the delimiters and `\` is the escape character, then
 * `\{foo}` wouldn't be interpolated, but `{foo}` would.
 * @param {string=} [options.strict=false] If true, if the matched value interpolated
 * isn't found in `tokens`, the original string is left untouched, otherwise it's
 * replaced with an empty string.
 * @param {function=} [options.onReplacement=identity] A function that's called each time
 * a replacement is made with the replacement value, the token path, and the
 * entire string being replaced.
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
 * interpolate({ delims: ['{', '}'] }, string, {
 *   verb: 'quick',
 *   thing: 'fox',
 *   animal: 'dog',
 * });
 * // => 'The quick brown fox jumped over the lazy brown dog'
 */
function interpolate(options, string, tokens) {
  const settings = options || {};
  const delimiters = settings.delims || [];

  const interpolator = getInterpolationRegExp(
    escapeRegExp(delimiters[0] || '{').toString(),
    escapeRegExp(delimiters[1] || '}').toString(),
  );

  return string == null ? '' : string.toString().replace(interpolator, replacer(settings, tokens));
}

export default curry(interpolate);
