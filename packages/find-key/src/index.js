/**
 * Exports the `findKey` function.
 * @since 11/10/18
 * @file
 */

import getIteratee from '@foldr/internal-iteratee';
import FunctionalFactory from '@foldr/internal-f-factory';
import IteratorFactory, { BREAK } from '@foldr/internal-iterator';

/* eslint-disable no-param-reassign */

/**
 * This function is similar to `Array#findIndex` except that is works for Array, Object, String,
 * Map, Set, and Arguments objects.
 *
 * Iterates over `collection`, calling `iteratee` for each item in the collection. If
 * `iteratee` returns `true`, the current key will be returned. If all items are exhausted
 * then `undefined` is returned.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
 * `value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 *
 * @name findKey
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @param {function} filterer The iteratee function to use while finding a key.
 * @returns {any} The found key (or undefined).
 *
 * @arity 2
 * @autocurried
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * function isEven(x) {
 *   return x % 2 === 0;
 * }
 *
 * findKey([1, 2, 3], isEven);            // => 1
 * findKey({ a: 1, b: 2, c: 3 }, isEven); // => 'b'
 * findKey({ a: 1, b: 3, c: 5 }, isEven); // => undefined
 */
const findKey = IteratorFactory({
  Empty: () => undefined,
  unwrap: results => results.x,
  Results: () => ({ x: undefined }),
  prepare: getIteratee,
  handler: (context, results, iteratee, i, value, key, collection) => {
    if (context && context.capped ? !iteratee(value) : !iteratee(value, key, collection)) {
      return undefined;
    }

    results.x = key;
    return BREAK;
  },
});

/**
 * This function is similar to `Array#findIndex` except that is works for Array, Object, String,
 * Map, Set, and Arguments objects.
 *
 * Iterates over `collection`, calling `iteratee` for each item in the collection. If
 * `iteratee` returns `true`, the current key will be returned. If all items are exhausted
 * then `undefined` is returned.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
 * `value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 *
 * @name findKey.f
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @param {function} filterer The iteratee function to use while finding a key.
 * @returns {any} The found key (or undefined).
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * function isEven(x) {
 *   return x % 2 === 0;
 * }
 *
 * findKey.f(isEven, [1, 2, 3]);            // => 1
 * findKey.f(isEven, { a: 1, b: 2, c: 3 }); // => 'b'
 * findKey.f(isEven)({ a: 1, b: 3, c: 5 }); // => undefined
 */
export const f = FunctionalFactory(findKey, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});

export default findKey;
