import iterator from '@foldr/internal-iterator';
import getIteratee from '@foldr/internal-iteratee';

const EmptyObject = () => ({});

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
 *
 * @arity 1
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { mapKeys } from '@foldr/all';
 *
 * function uppercaseKey(value, key) {
 *   return key.toUpperCase();
 * }
 *
 * mapKeys({ foo: 1, bar: 2, baz: 3 }, square); // => { FOO: 1, BAR: 2, BAZ: 3 }
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
export default iterator({
  $$empty: EmptyObject,
  $$results: EmptyObject,
  $$prepare: getIteratee,
  $$handler: (context, results, iteratee, i, value, key, collection) => {
    // eslint-disable-next-line no-param-reassign
    results[context && context.capped ? iteratee(key) : iteratee(value, key, collection)] = value;
  },
});
