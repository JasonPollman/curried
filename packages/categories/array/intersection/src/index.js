import indexOf from '@foldr/index-of';
import isArrayLike from '@foldr/is-array-like';

/**
 * Computes the intersection between two arrays.
 * @param {Array} x The first array.
 * @param {Array} y The second array.
 * @returns {Array} The intersection between the two arrays.
 */
function intersectTwo(x, y) {
  const results = [];

  // Select the smaller array to iterate over
  // since members must exist in both arrays.
  const a = x.length > y.length ? y : x;
  const b = a === x ? y : x;

  let i = 0;
  let value;

  const size = a.length;

  while (i < size) {
    value = a[i++];

    if (indexOf(b, value) !== -1 && indexOf(results, value) === -1) {
      results[results.length] = value;
    }
  }

  return results;
}

/**
 * Base functionality for `intersection`, below.
 * @param {...Array} arrays The arrays to compute the intersection of.
 * @returns {Array} The intersection of all of the given arrays.
 */
function intersectBase(arrays) {
  const intermediate = [];

  let i = 0;
  let n = 0;
  let size = arrays.length;

  while (i < size) {
    n = i + 1;
    intermediate[intermediate.length] = n < size ? intersectTwo(arrays[i], arrays[n]) : arrays[i];
    i += 2;
  }

  size = intermediate.length;
  if (size > 2) return intersectBase(intermediate);
  return size === 1 ? intermediate[0] : intersectTwo(intermediate[0], intermediate[1]);
}

/**
 * Creates a new array of all the values that exist in *all* of the given arrays.
 *
 * @name intersection
 * @param {...Array} arrays The arrays to compute the intersection of.
 * @returns {Array} The difference between `base` and `comparators`.
 *
 * @arity Infinity
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { intersection } from '@foldr/all';
 *
 * intersection([1, 2, 3], [2, 3, 4], [3, 4, 5]);
 * // => [3]
 *
 * intersection([1, 2, 3], [4, 5, 6]);
 * // => []
 *
 * intersection([1, 2, 3]);
 * // => [1, 2, 3]
 */
export default function intersection() {
  const args = arguments;
  const size = args.length;
  let i = 0;

  while (i < size) if (!isArrayLike(args[i++])) return [];

  if (size === 0) return [];
  if (size === 1) return args[0];

  return intersectBase(args);
}
