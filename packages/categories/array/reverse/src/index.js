/**
 * Creates a new array with the values reversed.
 *
 * This is similar to Array#reverse except that it does **not** mutate the original array.
 *
 * @name reverse
 * @param {Array} array The array to reverse.
 * @returns {Array} A new array containing the reversed values of `array`.
 *
 * @arity 1
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { reverse } from '@foldr/all';
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
