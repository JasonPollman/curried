import indexOf from '@foldr/index-of';
import isArrayLike from '@foldr/is-array-like';

/* eslint-disable no-continue, no-labels, no-restricted-syntax */

/**
 * Creates a new array of all the values that exist in the first array, but not
 * any of the other arrays provided.
 *
 * @name difference
 * @param {Array} base The base array to inspect.
 * @param {...Array} comparators The arrays of values to exclude.
 * @returns {Array} The difference between `base` and `comparators`.
 *
 * @arity Infinity
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { difference } from '@foldr/all';
 *
 * difference([1, 2, 3], [2, 3, 4], [3, 4, 5]);
 * // => [1]
 *
 * difference([1, 2, 3], [4, 5, 6]);
 * // => [1, 2, 3]
 */
export default function difference(base, ...comparators) {
  if (!isArrayLike(base)) return [];

  const results = [];
  const filtered = [];
  const count = base.length;

  let size = comparators.length;
  let i = 0;
  let n = 0;
  let value;
  let current;

  // Filter any trash from the comparators (keep only array-like objects)
  // We're doing this here because it could be expensive in the loop below.
  while (n < size) {
    current = comparators[n++];
    if (isArrayLike(current)) filtered[filtered.length] = current;
  }

  size = filtered.length;

  // Loop through each item in base, if it's found
  // in any of the comparator arrays, skip it, otherwise
  // include it in the results set.
  outer: while (i < count) {
    value = base[i++];
    n = 0;

    while (n < size) {
      if (indexOf(filtered[n++], value) > -1) continue outer;
    }

    results[results.length] = value;
  }

  return results;
}
