/**
 * Exports the flatten function.
 * @since 10/14/18
 * @file
 */

/**
 * Flattens an array one level deep.
 * @param {Array} array - The array to flatten.
 * @returns {Array} A newly flattened array.
 * @category array
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 * flatten([1, 2, 3, 4]);       // => [1, 2, 3, 4]
 * flatten([1, [2, 3], 4]);     // => [1, 2, 3, 4]
 * flatten([[1], [2], [3], 4]); // => [1, 2, 3, 4]
 */
function flatten(array) {
  if (!array || !array.length) return [];

  const copy = [];

  let len = -1;
  let arrayInd = 0;

  while (++len < array.length) {
    if (!array[len] || array[len].constructor !== Array) {
      copy[arrayInd] = array[len];
      arrayInd++;
    } else {
      const sub = array[len];
      let curr = -1;
      let dec = sub.length;

      while (dec--) {
        copy[arrayInd] = sub[++curr];
        arrayInd++;
      }
    }
  }

  return copy;
}

export default flatten;
