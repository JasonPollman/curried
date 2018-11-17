/**
 * Exports the `fold` function.
 * @since 11/10/18
 * @file
 */

import IteratorFactory from '@foldr/internal-iterator';
import FunctionalFactory from '@foldr/internal-fn-factory';

/* eslint-disable no-param-reassign */

/**
 * This function is similar to `fold`, except that iteration is performed from right to left.
 * Some libraries call this `reduceRight`.
 *
 * @name foldRight
 * @param {Array|Object|String|Arguments} collection The collection to fold or "reduce".
 * @param {function} reducer The reduction function to use while folding.
 * @param {any} initial The inital, "primer" value for folding.
 * @returns {Array} The results of folding `collection` onto `reducer`.
 *
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * function square(acc, x) {
 *   return acc + x ** 2;
 * }
 *
 * foldRight([1, 2, 3], square, 0); // => 14
 */
const foldRight = IteratorFactory({
  Empty: x => x,
  unwrap: results => results[0],
  reverse: true,
  Results: x => [x],
  initial: true,
  handler: (context, results, iteratee, i, value, key, collection) => {
    results[0] = context && context.capped
      ? iteratee(results[0], value)
      : iteratee(results[0], value, key, collection);
  },
});

/**
 * Functional, autocurried version of [fold](#fold).
 *
 * @name foldRight.f
 * @param {Array|Object|String|Arguments} collection The collection to fold or "reduce".
 * @param {any} initial The inital, "primer" value for folding.
 * @param {function} reducer The reduction function to use while folding.
 * @returns {Array} The results of folding `collection` onto `reducer`.
 *
 * @arity 3
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * function square(acc, x) {
 *   return acc + x ** 2;
 * }
 *
 * foldRight.f(square, 0)([1, 2, 3]); // => 14
 */
export const f = FunctionalFactory(foldRight, {
  arity: 3,
  capped: true,
  context: 'config',
  signature: [2, 0, 1],
});

export default foldRight;
