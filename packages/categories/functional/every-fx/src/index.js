/**
 * Exports the `every` function.
 * @since 11/10/18
 * @file
 */

import FunctionalFactory from '@foldr/internal-fmake';
import IteratorFactory, { BREAK } from '@foldr/internal-iterator';

/* eslint-disable no-param-reassign */

/**
 * This function is similar to `Array#every`.
 *
 * Iterates over `collection`, calling `predicate` for each item in the collection. If `predicate`
 * returns `falsy`, iteration is broken and `false` is returned. Otherwise `true` is returned.
 *
 * Predicate functions are called with the signature `predicate(value, key, collection)`, where
 * `value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 *
 * @name every
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @param {function} predicate The predicate iteratee function.
 * @returns {boolean} True if all items in the collection return true
 * for `predicate`, false otherwise.
 *
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
 * every([1, 2, 3], isEven);            // => false
 * every([2, 4, 6], isEven);            // => true
 *
 * every({ a: 1, b: 2, c: 3 }, isEven); // => false
 * every({ a: 2, b: 4, c: 6 }, isEven); // => true
 */
const every = IteratorFactory({
  unwrap: results => results.x,
  Empty: () => true,
  Results: () => ({ x: true }),
  handler: (context, results, iteratee, i, value, key, collection) => {
    if (context && context.capped ? iteratee(value) : iteratee(value, key, collection)) {
      return undefined;
    }

    results.x = false;
    return BREAK;
  },
});

/**
 * Functional, autocurried version of [every](#every)
 *
 * Iterates over `collection`, calling `predicate` for each item in the collection. If `predicate`
 * returns `falsy`, iteration is broken and `false` is returned. Otherwise `true` is returned.
 *
 * Predicate functions are called with the signature `predicate(value)`, where
 * `value` is the current item in the collection being iterated over.
 *
 * @name every.f
 * @param {function} predicate The predicate iteratee function.
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @returns {boolean} True if all items in the collection return true
 * for `predicate`, false otherwise.
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
 * every.f(isEven, [1, 2, 3]);            // => false
 * every.f(isEven, [2, 4, 6]);            // => true
 *
 * every.f(isEven, { a: 1, b: 2, c: 3 }); // => false
 * every.f(isEven, { a: 2, b: 4, c: 6 }); // => true
 */
export const f = FunctionalFactory(every, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});

export default every;
