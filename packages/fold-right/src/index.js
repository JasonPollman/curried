/**
 * Exports the `fold` function.
 * @since 11/10/18
 * @file
 */

import IteratorFactory from '@foldr/internal-iterator';

/* eslint-disable no-param-reassign */

/**
 * This function is similar to `fold`, except that iteration is performed from right to left.
 * Some libraries call this `reduceRight`.
 * @param {Array|Object|String|Arguments} collection The collection to fold or "reduce".
 * @param {function} reducer The reduction function to use while folding.
 * @param {any} initial The inital, "primer" value for folding.
 * @returns {Array} The results of folding `collection` onto `reducer`.
 * @category collection
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * function square(acc, x) {
 *   return acc + x ** 2;
 * }
 *
 * foldRight[1, 2, 3], square, 0); // => 14
 */
export default IteratorFactory({
  inject: true,
  unwrap: results => results[0],
  reverse: true,
  Results: x => [x],
  handler: (results, iteratee, i, value, key, collection) => {
    results[0] = iteratee(results[0], value, key, collection);
  },
});
