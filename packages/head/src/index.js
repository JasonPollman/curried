/**
 * Head function, which returns the first index of a proven array
 * @memberof foldr
 * @since v0.0.0
 * @param {Array} array - the array that will provide the first index
 * @returns {Array} - the value at the first index of an array
 */
function head(array) {
  if (array && array.length) return array[0];
  return undefined;
}
module.exports = head;
