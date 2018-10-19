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
 */
function compact(array) {
  let arr = [], len = array == null ? 0 : array.length, i = -1, ind = 0;
  while (++ind < len) {
    if (!array[ind]) { continue; }
    arr[++i] = array[ind];
  }
  return arr;
}

module.exports = compact;
