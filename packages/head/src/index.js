
/**
 * Returns the first index of a proven array.
 * @param {Array} array - The array that will provide the first index.
 * @returns {Array} - The value at the first index of an array.
 * @category array
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 * head([1, 2, 3, 4]); // => 1
 * head([]);           // => undefined
 */
export default function head(array) {
  return array ? array[0] : undefined;
}
