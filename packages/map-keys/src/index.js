/**
 * Exports the `mapValues` function.
 * @since 11/10/18
 * @file
 */

import getIteratee from '@foldr/internal-iteratee';
import IteratorFactory from '@foldr/internal-iterator';
import FunctionalFactory from '@foldr/internal-f-factory';

/* eslint-disable no-param-reassign */

/**
 * Creates a new object with the same values as `collection` but with the keys mapped
 * using `iteratee`.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
 * `value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 *
 * @name mapKeys
 * @param {Object} collection The collection to map the keys of.
 * @param {function} iteratee The iteratee function to use while mapping keys.
 * @returns {Object} The results of mapping to keys of `collection` with `iteratee`.
 * @category object
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * function uppercaseKey(value, key) {
 *   return key.toUpperCase();
 * }
 *
 * mapValues({ foo: 1, bar: 2, baz: 3 }, square); // => { FOO: 1, BAR: 2, BAZ: 3 }
 *
 * // Using the shorthand string iteratee you can
 * // map an object to a property of the object.
 *
 * const people = {
 *   1: { name: 'Ben', age: 21 },
 *   2: { name: 'John', age: 32 },
 *   3: { name: 'Al', age: 18 },
 * };
 *
 * mapKeys(people, 'name');
 * // => {
 * //  Ben: { name: 'Ben', age: 21 },
 * //  John: { name: 'John', age: 32 },
 * //  Al: { name: 'Al', age: 18 },
 * // }
 */
const mapKeys = IteratorFactory({
  Empty: () => ({}),
  Results: () => ({}),
  prepare: getIteratee,
  handler: (context, results, iteratee, i, value, key, collection) => {
    results[context && context.capped ? iteratee(key) : iteratee(value, key, collection)] = value;
  },
});

/**
 * Functional, autocurried version of [mapKeys](#mapKeys).
 *
 * Creates a new object with the same values as `collection` but with the keys mapped
 * using `iteratee`.
 *
 * Iteratee functions are called with the signature `iteratee(key)`, where
 * `key` is the key of the current item in the collection that's being iterated over.
 *
 * @name mapKeys.f
 * @param {function} iteratee The iteratee function to use while mapping keys.
 * @param {Object} collection The collection to map the keys of.
 * @returns {Object} The results of mapping to keys of `collection` with `iteratee`.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * function uppercaseKey(key) {
 *   return key.toUpperCase();
 * }
 *
 * mapKeys(square)({ foo: 1, bar: 2, baz: 3 }); // => { FOO: 1, BAR: 2, BAZ: 3 }
 */
export const f = FunctionalFactory(mapKeys, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});

export default mapKeys;
