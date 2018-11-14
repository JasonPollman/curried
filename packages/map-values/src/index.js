/**
 * Exports the `mapValues` function.
 * @since 11/10/18
 * @file
 */

import getIteratee from '@foldr/internal-iteratee';
import IteratorFactory from '@foldr/internal-iterator';

/* eslint-disable no-param-reassign */

/**
 * Creates a new object with the same keys as `collection` by mapping over `collection` and
 * calling `iteratee` for each value in the collection.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
 * `value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 *
 * @param {Object} collection The collection to map the values of.
 * @param {function} iteratee The iteratee function to use while mapping values.
 * @returns {Object} The results of mapping the `collection` using `iteratee`.
 * @category object
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * function square(x) {
 *   return x ** 2;
 * }
 *
 * mapValues({ foo: 1, bar: 2, baz: 3 }, square); // => { foo: 1, bar: 4, baz: 9 }
 *
 * // Using the shorthand string iteratee you can
 * // map an object to a property of the object.
 *
 * const people = {
 *   1: { name: 'Ben', age: 21 },
 *   2: { name: 'John', age: 32 },
 *   3: { name: 'Al', age: 18 },
 * };
 * mapValues(people, 'name'); // => { 1: 'Ben', 2: 'John', 3: 'Al' }
 */
export default IteratorFactory({
  Empty: () => ({}),
  Results: () => ({}),
  prepare: getIteratee,
  handler: (results, iteratee, i, value, key, collection) => {
    results[key] = iteratee(value, key, collection);
  },
});
