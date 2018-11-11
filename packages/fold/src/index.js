/**
 * Exports the `fold` function.
 * @since 11/10/18
 * @file
 */

import IteratorFactory from '@foldr/internal-iterator';

/* eslint-disable no-param-reassign */

/**
 * This function is similar to Array#reduce except that it works for Arrays, Objects, Strings,
 * Maps, Sets, and Arguments objects.
 *
 * Iterates over `collection`, calling `reducer` for each item in the collection and returning
 * the accumulation of the successive calls to `reducer`. Each invocation of `reducer` becomes
 * the "reduced" value of the previous call.
 *
 * Reduction functions are called with the signature `reducer(accumulator, value, key, collection)`,
 * where `accumulator` is either the initial value or the results of a pervious `reducer` call,
 * value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 *
 * Some libraries call this `reduce`.
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
 * fold([1, 2, 3], square, 0); // => 14
 */
export default IteratorFactory({
  inject: true,
  unwrap: results => results[0],
  Results: x => [x],
  handler: (results, iteratee, i, value, key, collection) => {
    results[0] = iteratee(results[0], value, key, collection);
  },
});
