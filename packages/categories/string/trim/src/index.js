import toString from '@foldr/to-string';

/*
  eslint-disable
  no-labels,
  no-continue,
  no-param-reassign,
  no-restricted-syntax,
  no-multi-assign
*/

const WHITESPACE_RE = /^\s+|\s+$/g;

/**
 * Trims `chars` from the beginning and end of a string.
 *
 * If `chars` is `null` or `undefined`, all whitespace (` `, `\n`, `\r`, `\t`)
 * will be trimmed from the string.
 *
 * @name trim
 * @param {string} string The string to trim
 * @param {string=} characters The set of characters to trim from the string.
 * @returns {string} The trimmed string.
 *
 * @arity 2
 * @category string
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { trim } from '@foldr/all';
 *
 * trim('     foobar     ');       // => 'foobar'
 * trim('/foo/bar/', '/');         // => 'foo/bar'
 * trim('<><><foobar><><>', '<>'); // => 'foobar'
 */
export default function trim(string, characters) {
  if (string == null) return '';
  string = toString(string);

  const size = string.length;
  if (!size) return string;

  let i = -1;

  // If no chars were passed in or null was passed,
  // operate like String#trim. If greater than THRESHOLD,
  // native replace is faster, defer to it.
  if (characters == null) return string.replace(WHITESPACE_RE, '');

  const charSet = [];
  characters = toString(characters);

  const charSetSize = characters.length;
  if (!charSetSize) return string;

  // Prevents duplicate characters from being included
  // in the charSet we're looping over.
  const seen = {};

  while (++i < charSetSize) {
    const current = characters[i];

    if (!seen[current]) {
      seen[current] = charSet[i] = current;
    }
  }

  i = 0;

  let n;
  let current;
  let start = 0;
  let end = size - 1;

  // Find the start index for the trimmed string.
  // Loop forward until a non-charSet character is found.
  outer: while (i < size) {
    current = string[i++];
    n = charSetSize;

    while (--n >= 0) {
      if (current === charSet[n]) {
        start = i;
        continue outer;
      }
    }

    break;
  }

  i = size - 1;

  // Find the end index for the trimmed string.
  // Loop in reverse until a non-charSet character is found.
  outer: while (i > start) {
    current = string[i--];
    n = charSetSize;

    while (--n >= 0) {
      if (current === charSet[n]) {
        end = i;
        continue outer;
      }
    }

    break;
  }

  return string.slice(start, end + 1);
}
