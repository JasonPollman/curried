/**
 * Exports the `filter` function.
 * @since 11/10/18
 * @file
 */

import IteratorFactory from '@foldr/internal-iterator';

/* eslint-disable no-param-reassign */

/**
 * This function is similar to `Array#filter` except that is works for Array, Object, String,
 * Map, Set, and Arguments objects.
 *
 * Iterates over `collection`, calling `filterer` for each item in the collection. If
 * `filterer` returns `true`, the value will be kept in the returned array, otherwise
 * the value is omitted from the returned array.
 *
 * Filterer functions are called with the signature `filterer(value, key, collection)`, where
 * `value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @param {function} filterer The iteratee function to use while filtering.
 * @returns {Array} The results of mapping `collection` to `filterer`.
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
export default IteratorFactory({
  Empty: () => [],
  Results: () => [],
  handler: (results, iteratee, i, value, key, collection) => {
    const retained = iteratee(value, key, collection);
    if (retained) results[results.length] = value;
  },
});
