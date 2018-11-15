/**
 * Exports the `filter` function.
 * @since 11/10/18
 * @file
 */

import getIteratee from '@foldr/internal-iteratee';
import IteratorFactory, { BREAK } from '@foldr/internal-iterator';

/* eslint-disable no-param-reassign */

/**
 * This function is similar to `Array#find` except that is works for Array, Object, String,
 * Map, Set, and Arguments objects and this function iterates from right to left.
 *
 * Iterates over `collection`, calling `iteratee` for each item in the collection. If
 * `iteratee` returns `true`, the current value will be returned. If all items are exhausted
 * then `undefined` is returned.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
 * `value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @param {function} filterer The iteratee function to use while finding a value.
 * @returns {any} The found value (or undefined).
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
 * filter([1, 2, 3, 4], isEven);               // => 4
 * filter({ a: 1, b: 2, c: 3, d: 4 }, isEven); // => 4
 * filter({ a: 1, b: 3, c: 5 }, isEven);       // => undefined
 */
export default IteratorFactory({
  Empty: () => undefined,
  unwrap: results => results.x,
  Results: () => ({ x: undefined }),
  reverse: true,
  prepare: getIteratee,
  handler: (results, iteratee, i, value, key, collection) => {
    if (!iteratee(value, key, collection)) return undefined;
    results.x = value;
    return BREAK;
  },
});
