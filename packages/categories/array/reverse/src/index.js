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
  const size = array ? array.length || 0 : 0;
  if (!size) return [];

  let i = size;
  let n = 0;

  const results = new Array(size);
  while (--i >= 0) results[n++] = array[i];
  return results;
}
