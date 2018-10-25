/**
 * Exports the flatten function.
 * @since 10/14/18
 * @file
 */

/*
  eslint-disable no-array-constructor,
  one-var,
  prefer-const,
  no-unused-vars,
  one-var-declaration-per-line
*/

/**
 * Flattens an array one level deep
 * @param {Array} array - the array to flatten
 * @category array
 * @memberof foldr
 * @since v0.0.0
 * @returns {Array} a newly flattened array
 */
function flatten(array) {
  if (!array || !array.length) return new Array();
  let len = -1, copy = new Array(), arrayInd = 0;

  while (++len < array.length) {
    if (!array[len] || array[len].constructor !== Array) {
      copy[arrayInd] = array[len];
      arrayInd++;
    } else {
      let sub = array[len], curr = -1, dec = sub.length;
      while (dec--) {
        copy[arrayInd] = sub[++curr];
        arrayInd++;
      }
    }
  }

  return copy;
}

export default flatten;
