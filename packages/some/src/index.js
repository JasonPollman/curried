/**
 * Exports the `some` function.
 * @since 11/10/18
 * @file
 */

import FunctionalFactory from '@foldr/internal-f-factory';
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
 *
 * @name some
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @param {function} predicate The predicate iteratee function.
 * @returns {boolean} True if any item in the collection returns `true`
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
 * some([1, 2, 3], isEven);            // => true
 * some([2, 4, 6], isEven);            // => true
 * some([1, 3, 5], isEven);            // => false
 *
 * some({ a: 1, b: 2, c: 3 }, isEven); // => true
 * some({ a: 2, b: 4, c: 6 }, isEven); // => true
 * some({ a: 1, b: 3, c: 5 }, isEven); // => false
 */
const some = IteratorFactory({
  unwrap: results => results[0],
  Empty: () => false,
  Results: () => [false],
  handler: (context, results, iteratee, i, value, key, collection) => {
    if (context && context.capped ? !iteratee(value) : !iteratee(value, key, collection)) {
      return undefined;
    }

    results[0] = true;
    return BREAK;
  },
});

/**
 * Functional, autocurried version of [some](#some).
 *
 * Iterates over `collection`, calling `predicate` for each item in the collection. If `predicate`
 * returns truthy, iteration is broken and `true` is returned. Otherwise `false` is returned.
 *
 * Predicate functions are called with the signature `predicate(value)`, where
 * `value` is the current item in the collection being iterated over.
 *
 * @name some.f
 * @param {function} predicate The predicate iteratee function.
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @returns {boolean} True if any item in the collection returns `true`
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
 * some.f(isEven, [1, 2, 3]);            // => true
 * some.f(isEven, [2, 4, 6]);            // => true
 * some.f(isEven)([1, 3, 5]);            // => false
 *
 * some.f(isEven, { a: 1, b: 2, c: 3 }); // => true
 * some.f(isEven)({ a: 2, b: 4, c: 6 }); // => true
 * some.f(isEven, { a: 1, b: 3, c: 5 }); // => false
 */
export const f = FunctionalFactory(some, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});

export default some;
