/**
 * Exports the `find` function.
 * @since 11/10/18
 * @file
 */

import getIteratee from '@foldr/internal-iteratee';
import FunctionalFactory from '@foldr/internal-f-factory';
import IteratorFactory, { BREAK } from '@foldr/internal-iterator';

/* eslint-disable no-param-reassign */

/**
 * This function is similar to `Array#find` except that is works for Array, Object, String,
 * Map, Set, and Arguments objects.
 *
 * Iterates over `collection`, calling `iteratee` for each item in the collection. If
 * `iteratee` returns `true`, the current value will be returned. If all items are exhausted
 * then `undefined` is returned.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
 * `value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 *
 * @name find
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @param {function} predicate The iteratee function to use while finding a value.
 * @returns {any} The found value (or undefined).
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
 * find([1, 2, 3], isEven);            // => 2
 * find({ a: 1, b: 2, c: 3 }, isEven); // => 2
 * find({ a: 1, b: 3, c: 5 }, isEven); // => undefined
 */
const find = IteratorFactory({
  Empty: () => undefined,
  unwrap: results => results[0],
  Results: () => [undefined],
  prepare: getIteratee,
  handler: (context, results, iteratee, i, value, key, collection) => {
    if (context && context.capped ? !iteratee(value) : !iteratee(value, key, collection)) {
      return undefined;
    }

    results[0] = value;
    return BREAK;
  },
});

/**
 * Functional, autocurried version of [find](#find).
 *
 * Iterates over `collection`, calling `iteratee` for each item in the collection. If
 * `iteratee` returns `true`, the current value will be returned. If all items are exhausted
 * then `undefined` is returned.
 *
 * Iteratee functions are called with the signature `iteratee(value)`, where
 * `value` is the current item in the collection being iterated over.
 *
 * @name find.f
 * @param {function} predicate The iteratee function to use while finding a value.
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @returns {any} The found value (or undefined).
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
 * find.f(isEven, [1, 2, 3]);            // => 2
 * find.f(isEven)({ a: 1, b: 2, c: 3 }); // => 2
 * find.f(isEven)({ a: 1, b: 3, c: 5 }); // => undefined
 */
export const f = FunctionalFactory(find, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});

export default find;
