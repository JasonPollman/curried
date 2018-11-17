/**
 * Exports the `filter` function.
 * @since 11/10/18
 * @file
 */

import getIteratee from '@foldr/internal-iteratee';
import FunctionalFactory from '@foldr/internal-fn-factory';
import IteratorFactory, { BREAK } from '@foldr/internal-iterator';

/* eslint-disable no-param-reassign */

/**
 * This function is similar to `Array#find` except that is works for Array, Object, String,
 * Map, Set, and Arguments objects and also iterates from right to left.
 *
 * Iterates over `collection`, calling `iteratee` for each item in the collection. If
 * `iteratee` returns `true`, the current value will be returned. If all items are exhausted
 * then `undefined` is returned.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
 * `value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 *
 * @name findLast
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @param {function} predicate The iteratee function to use while finding a value.
 * @returns {any} The found value (or undefined).
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
 * findLast([1, 2, 3, 4], isEven);               // => 4
 * findLast({ a: 1, b: 2, c: 3, d: 4 }, isEven); // => 4
 * findLast({ a: 1, b: 3, c: 5 }, isEven);       // => undefined
 */
const findLast = IteratorFactory({
  Empty: () => undefined,
  unwrap: results => results.x,
  Results: () => ({ x: undefined }),
  reverse: true,
  prepare: getIteratee,
  handler: (context, results, iteratee, i, value, key, collection) => {
    if (context && context.capped ? !iteratee(value) : !iteratee(value, key, collection)) {
      return undefined;
    }

    results.x = value;
    return BREAK;
  },
});

/**
 * Functional, autocurried version of [findLast](#findLast).
 *
 * Iterates over `collection`, calling `iteratee` for each item in the collection. If
 * `iteratee` returns `true`, the current value will be returned. If all items are exhausted
 * then `undefined` is returned.
 *
 * Iteratee functions are called with the signature `iteratee(value)`, where
 * `value` is the current item in the collection being iterated over.
 *
 * @name findLast.f
 * @param {function} predicate The iteratee function to use while finding a value.
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @returns {any} The found value (or undefined).
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
 * findLast.f(isEven, [1, 2, 3, 4]);               // => 4
 * findLast.f(isEven, { a: 1, b: 2, c: 3, d: 4 }); // => 4
 * findLast.f(isEven)({ a: 1, b: 3, c: 5 });       // => undefined
 */
export const f = FunctionalFactory(findLast, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});

export default findLast;
