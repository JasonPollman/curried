/**
 * Exports the `reverse` function.
 * @since 10/29/18
 * @file
 */

/**
 * Creates a new array with the values reversed. This is similar to
 * Array#reverse except that it does **not** mutate the original array.
 *
 * @name random
 * @param {Array} array The array to reverse.
 * @returns {Array} The reversed array.
 *
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * const items = ['foo', 'bar', 'baz'];
 * reverse(items); // => ['baz', 'bar', 'foo']
 */
export default function reverse(array) {
  const results = [];

  if (!array || !array.length) return results;

  let i = array.length;
  let n = 0;

  while (--i >= 0) {
    results[n++] = array[i];
  }

  return results;
}
