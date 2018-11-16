/**
 * Exports the `some` function.
 * @since 11/10/18
 * @file
 */

import IteratorFactory, { BREAK } from '@foldr/internal-iterator';

/* eslint-disable no-param-reassign */

/**
 * This function is similar to `Array#some` except that is works for Array, Object, String,
 * Map, Set, and Arguments objects.
 *
 * Iterates over `collection`, calling `predicate` for each item in the collection. If `predicate`
 * returns truthy, iteration is broken and `true` is returned. Otherwise `false` is returned.
 *
 * Predicate functions are called with the signature `predicate(value, key, collection)`, where
 * `value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @param {function} predicate The predicate iteratee function.
 * @returns {boolean} True if any item in the collection return true
 * for `predicate`, false otherwise.
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
 * some([1, 2, 3], isEven);            // => true
 * some([2, 4, 6], isEven);            // => true
 * some([1, 3, 5], isEven);            // => false
 *
 * some({ a: 1, b: 2, c: 3 }, isEven); // => true
 * some({ a: 2, b: 4, c: 6 }, isEven); // => true
 * some({ a: 1, b: 3, c: 5 }, isEven); // => false
 */
export default IteratorFactory({
  unwrap: results => results[0],
  Empty: () => false,
  Results: () => [false],
  handler: (context, results, iteratee, i, value, key, collection) => {
    if (!iteratee(value, key, collection)) return undefined;
    results[0] = true;
    return BREAK;
  },
});
