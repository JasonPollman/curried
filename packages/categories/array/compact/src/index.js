/**
 * Compacts an array by removing falsy values.
 *
 * A *falsy* value is one for which `!value === true`.
 * So, `0`, `''`, `false`, `NaN`, `null`, or `undefined`.
 *
 * @name compact
 * @param {Array} array The array to remove falsy values from.
 * @returns {Array} A newly compacted array.
 *
 * @arity 1
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { compact } from '@foldr/all';
 *
 * compact([1, null, 3, undefined]); // => [1, 3]
 * compact(['', 0, 4]);              // => [4]
 */
export default function compact(array) {
  const arr = [];
  const len = array == null ? 0 : array.length;

  let i = 0;
  let index = -1;

  while (++index < len) {
    if (array[index]) {
      arr[i++] = array[index];
    }
  }

  return arr;
}
