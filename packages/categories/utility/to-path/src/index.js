import memoize from '@foldr/memoize';
import isArray from '@foldr/is-array';
import toString from '@foldr/to-string';

const MAX_ITEMS = 100;
export const cache = new memoize.Cache();

/**
 * The cache resolver for the memoized `toPath` method.
 * @param {Arguments} args The arguments from the call to the memoized method.
 * @returns {any} The first argument.
 */
function resolver(args) {
  if (cache.size > MAX_ITEMS) cache.clear();
  return args[0];
}

/**
 * Converts a string to an array of object path tokens.
 * @param {string} path The value to convert to a set of path tokens.
 * @returns {Array} An array of paths.
 */
function toStringPath(path) {
  const results = [];
  const size = path.length;

  if (!path || !size) return results;

  let i = 0;
  let n = 0;

  // True if inside of a string. Note, that mismatched
  // quote types are handled as expected.
  let inString = false;

  // The type of string we're inside of, either `'` or `"`.
  let stringQuoteCharacter;

  // True if inside a brackets sequence ([ ... ])
  let inBrackets = false;

  // Keeps track of the current path "token". This is appended to
  // with each character as the path string is iterated over.
  let token = '';

  while (i < size) {
    const char = path[i++];

    switch (char) {
      case '.':
        // If we're not in a string or inside of a bracket set, then
        // this dot represents a "jump" to the next property in the path.
        if (!inString && !inBrackets) {
          if (token) {
            results[n++] = token;
            token = '';
          }
        } else {
          token += char;
        }

        break;

      case '[':
        // If we're not in a string or currently inside of a bracket set, then
        // this open bracket represents a "jump" to the next property in the path.
        if (!inString && !inBrackets) {
          inBrackets = true;

          if (token) {
            results[n++] = token;
            token = '';
          }
        } else {
          token += char;
        }

        break;

      case ']':
        // If we're not in a string and we are inside of a bracket set, then
        // this close bracket represents a "jump" to the next property in the path.
        if (!inString && inBrackets) {
          inBrackets = false;

          if (token) {
            results[n++] = token;
            token = '';
          }
        } else {
          token += char;
        }

        break;

      case '"':
      case "'":
        if (!inString) {
          // Found an opening quote.
          // If we're not inside of brackets, consider the quote as part of the property name.
          inString = true;
          stringQuoteCharacter = char;
          if (!inBrackets) token += char;
        } else if (stringQuoteCharacter === char) {
          // Found a closing quote.
          // If we're not inside of brackets, consider the quote as part of the property name.
          inString = false;
          if (!inBrackets) token += char;
        } else {
          // Not a closing or opening quote, this is for cases like "'" and '"'
          // where we found quotes when already inside of a string.
          token += char;
        }

        break;

      default:
        token += char;
    }
  }

  if (token) results[n] = token;
  return results;
}

const toStringPathMemoized = memoize(toStringPath, resolver, cache);

/**
 * Converts a string path (i.e. `foo.bar.baz`) to any array of "path tokens".
 * This works using both the dot and bracket notiation and supports strings.
 *
 * @name toPath
 * @param {string} value The value to convert to a path.
 * @returns {Array<string>} An array of paths.
 *
 * @arity 1
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { toPath } from '@foldr/all';
 *
 * toPath('foo');                  // => ['foo']
 * toPath('foo.bar.baz');          // => ['foo', 'bar', 'baz']
 * toPath('foo[bar].baz');         // => ['foo', 'bar', 'baz']
 * toPath('foo[0][1]["bar"].baz'); // => ['foo', '0', '1', 'bar', 'baz']
 */
export default function toPath(value) {
  return isArray(value) ? value : toStringPathMemoized(toString(value));
}
