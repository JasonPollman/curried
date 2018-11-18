/**
 * Exports the compact function.
 * @since 10/18/18
 * @file
 */

/**
 * Compacts an array by removing falsy values.
 *
 * @name compact
 * @param {Array} array The array to remove falsy values from.
 * @returns {Array} A newly compacted array.
 *
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * compact([1, null, 3, undefined]); // => [1, 3]
 * compact(['', 0, 4]);              // => [4]
 */
export default function compact(array) {
  const arr = [];
  const len = array == null ? 0 : array.length;

  let i = 0;
  let ind = -1;

  while (++ind < len) {
    if (array[ind]) {
      arr[i++] = array[ind];
    }
  }

  return arr;
}
