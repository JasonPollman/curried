/**
 * Exports the `zip` function.
 * @since 10/29/18
 * @file
 */

import isArrayLike from '@foldr/is-array-like';
import FunctionalFactory from '@foldr/internal-fn-factory';

/**
 * Creates an array of values grouped by index.
 *
 * Returns an array of grouped arrays from the elements of the arrays provided. That is,
 * all elements of the first array in the returned array are the 0th index, the second array
 * in the return array is all the elements at index 1, and so on.
 *
 * This method operates on "array-like" objects so Arguments and strings will work as expected.
 * Non-array-like values will be ignored from the input arguments.
 *
 * @name zip
 * @param {...Array} The arrays to zip.
 * @returns {Array<Array>} The (grouped) arrays.
 *
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * zip([1, 2, 3], ['a', 'b', 'c']); // => [[1, 'a'], [2, 'b'], [3, 'c']]
 * zip(['x', 1], ['y', 2]);         // => [['x', 'y'], [1, 2]]
 * zip('foo', 'bar');               // => [['f', 'b'], ['o', 'a'], ['a', 'r']]
 */
export default function zip() {
  const args = arguments;
  const size = args.length;

  if (!size) return [];

  const results = [];
  const filtered = [];

  let i = 0;
  let n = 0;
  let z = 0;
  let current;

  while (i < size) {
    current = args[i++];

    if (isArrayLike(current)) {
      filtered[z++] = current;
      current = current.length;
      if (n < current) n = current;
    }
  }

  while (--n >= 0) {
    i = z;
    results[n] = [];

    while (--i >= 0) {
      results[n][i] = filtered[i][n];
    }
  }

  return results;
}

/**
 * Functional, autocurried version of [zip](#zip).
 * Creates an array of values grouped by index.
 *
 * Returns an array of grouped arrays from the elements of the arrays provided. That is,
 * all elements of the first array in the returned array are the 0th index, the second array
 * in the return array is all the elements at index 1, and so on.
 *
 * This method operates on "array-like" objects so Arguments and strings will work as expected.
 * Non-array-like values will be ignored from the input arguments.
 *
 * @name zip.f
 * @param {Array} y The second array to zip using.
 * @param {Array} x The first array to zip using.
 * @returns {Array<Array>} The (grouped) arrays.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * zip.f(['a', 'b', 'c'], [1, 2, 3]); // => [[1, 'a'], [2, 'b'], [3, 'c']]
 * zip.f(['y', 2], ['x', 1]);         // => [['x', 'y'], [1, 2]]
 * zip.f('bar')('foo');               // => [['f', 'b'], ['o', 'a'], ['a', 'r']]
 */
export const f = FunctionalFactory(zip, {
  arity: 2,
  signature: [1, 0],
});
