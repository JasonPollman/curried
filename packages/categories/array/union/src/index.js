import indexOf from '@foldr/index-of';
import isArrayLike from '@foldr/is-array-like';

/**
 * Creates a new array containing all of the unique the values from `arrays`.
 *
 * @name union
 * @param {...Array} arrays The arrays to take the union of.
 * @returns {Array} The set of values unique to all of the given arrays.
 *
 * @arity Infinity
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { union } from '@foldr/all';
 *
 * union([1, 2, 3], [2, 3, 4], [3, 4, 5]);
 * // => [1, 2, 3, 4, 5]
 *
 * union([1, 2, 3], [4, 5, 6]);
 * // => [1, 2, 3, 4, 5, 6]
 */
export default function union(...arrays) {
  const size = arrays.length;
  if (!size) return [];

  const results = [];

  let item;
  let count;
  let array;

  let i = 0;
  let n = 0;
  let k = 0;

  while (i < size) {
    array = arrays[i++];

    if (isArrayLike(array)) {
      count = array.length;
      n = 0;

      while (n < count) {
        item = array[n++];

        if (size === 1 || !k || indexOf(results, item) === -1) {
          results[k++] = item;
        }
      }
    }
  }

  return results;
}
