/**
 * Exports the `filter` function.
 * @since 11/10/18
 * @file
 */

import IteratorFactory from '@foldr/internal-iterator';
import FunctionalFactory from '@foldr/internal-fn-factory';

/* eslint-disable no-param-reassign */

/**
 * This function is similar to `Array#filter` except that is works for Array, Object, String,
 * Map, Set, and Arguments objects.
 *
 * Iterates over `collection`, calling `filterFn` for each item in the collection. If
 * `filterFn` returns `true`, the value will be kept in the returned array, otherwise
 * the value is omitted from the returned array.
 *
 * Filterer functions are called with the signature `filterFn(value, key, collection)`, where
 * `value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 *
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @param {function} filterFn The iteratee function to use while filtering.
 * @returns {Array} The results of mapping `collection` to `filterFn`.
 *
 * @category collection
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * function isEven(x) {
 *   return x % 2 === 0;
 * }
 *
 * filter([1, 2, 3], isEven);            // => [2]
 * filter({ a: 1, b: 2, c: 3 }, isEven); // => [2]
 */
const filter = IteratorFactory({
  Empty: () => [],
  Results: () => [],
  handler: (context, results, iteratee, i, value, key, collection) => {
    if (context && context.capped ? iteratee(value) : iteratee(value, key, collection)) {
      results[results.length] = value;
    }
  },
});

/**
 * Functional, autocurried version of [filter](#filter).
 *
 * This function is similar to `Array#filter` except that is works for Array, Object, String,
 * Map, Set, and Arguments objects.
 *
 * Iterates over `collection`, calling `filterFn` for each item in the collection. If
 * `filterFn` returns `true`, the value will be kept in the returned array, otherwise
 * the value is omitted from the returned array.
 *
 * Filterer functions are called with the signature `filterFn(value)`, where
 * `value` is the current item in the collection being iterated over.
 *
 * @name filter.fn
 * @param {function} filterFn The iteratee function to use while filtering.
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @returns {Array} The results of filtering `collection` with `filterFn`.
 *
 * @arity 2
 * @autocurried
 * @category collection
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * function isEven(x) {
 *   return x % 2 === 0;
 * }
 *
 * filter.fn(isEven, [1, 2, 3]);            // => [2]
 * filter.fn(isEven, { a: 1, b: 2, c: 3 }); // => [2]
 */
export const fn = FunctionalFactory(filter, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});

export default filter;
