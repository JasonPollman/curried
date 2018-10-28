/**
 * Exports the compact function.
 * @since 10/18/18
 * @file
 */

/*
  eslint-disable
  one-var,
  prefer-const,
  one-var-declaration-per-line,
*/

/**
 * Compacts an array by removing falsy values.
 * @param {Array} array - the array to remove falsy values from
 * @returns {Array} a newly compacted array
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 * compact([1, null, 3, undefined]);       // => [1, 3]
 * compact(['', 0, 4]);                    // => [4]
 */
export default function compact(array) {
  let arr = [], len = array == null ? 0 : array.length, i = -1, ind = -1;
  while (++ind < len) {
    if (array[ind]) {
      arr[++i] = array[ind];
    }
  }
  return arr;
}
