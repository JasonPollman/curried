/**
 * Exports the compact function.
 * @since 10/18/18
 * @file
 */

import FunctionalFactory from '@foldr/internal-fn-factory';

/**
 * Compacts an array by removing falsy values.
 *
 * @name compact
 * @param {Array} array The array to remove falsy values from.
 * @returns {Array} A newly compacted array.
 *
 * @category array
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * compact([1, null, 3, undefined]); // => [1, 3]
 * compact(['', 0, 4]);              // => [4]
 */
export default function compact(array) {
  const arr = [];
  const len = array == null ? 0 : array.length;

  let i = -1;
  let ind = -1;

  while (++ind < len) {
    if (array[ind]) {
      arr[++i] = array[ind];
    }
  }

  return arr;
}

/**
 * Functional, autocurried version of [compact](#compact).
 *
 * Compacts an array by removing falsy values.
 *
 * @name compact.fn
 * @param {Array} array The array to remove falsy values from.
 * @returns {Array} A newly compacted array.
 *
 * @arity 1
 * @autocurried
 * @category array
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * compact.fn([1, null, 3, undefined]); // => [1, 3]
 * compact.fn(['', 0, 4]);              // => [4]
 */
export const fn = FunctionalFactory(compact);
