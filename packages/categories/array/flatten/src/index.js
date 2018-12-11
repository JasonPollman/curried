/**
 * Flattens an array *one* level deep.
 *
 * This will iterate over the provided array pushing all items into a new array.
 * If the current item is an array, it's contents will also be pushed into the new array.
 *
 * @param {Array} array The array to flatten.
 * @returns {Array} A newly flattened array.
 *
 * @arity 1
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { flatten } from '@foldr/all';
 *
 * flatten([1, 2, 3, 4]);       // => [1, 2, 3, 4]
 * flatten([1, [2, 3], 4]);     // => [1, 2, 3, 4]
 * flatten([[1], [2], [3], 4]); // => [1, 2, 3, 4]
 */
export default function flatten(array) {
  if (!array || !array.length) return [];

  const copy = [];
  const size = array.length;

  let len = -1;
  let arrayInd = 0;

  while (++len < size) {
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
