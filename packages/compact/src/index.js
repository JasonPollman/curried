/**
 * Exports the compact function.
 * @since 10/18/18
 * @file
 */

/*
  eslint-disable no-array-constructor,
  one-var,
  prefer-const,
  no-unused-vars,
  one-var-declaration-per-line,
  no-continue,
*/

/**
 * Flattens an array one level deep
 * @param {Array} array - the array to flatten
 * @returns {Array} a newly flattened array
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 * compact([1, null, 3, undefined]);       // => [1, 3]
 * compact(['', 0, 4]);     // => [4]
 */
function compact(array) {
  let arr = [], len = array == null ? 0 : array.length, i = -1, ind = -1;
  while (++ind < len) {
    if (array[ind]) {
      arr[++i] = array[ind];
    }
  }
  return arr;
}

module.exports = compact;
