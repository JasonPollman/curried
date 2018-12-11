import fmake from '@foldr/internal-fmake';
import mapKeys from '@foldr/map-keys';

/**
 * **Functional, autocurried version of [mapKeys](#mapKeys).**
 *
 * Creates a new object with the same values as `collection` but with the keys mapped
 * using `iteratee`.
 *
 * Iteratee functions are called with the signature `iteratee(key)`, where:
 * - `key` is the key of the current item in the collection that's being iterated over.
 *
 * @name mapKeysFx
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
 * import { mapKeysFx } from '@foldr/all';
 *
 * function uppercaseKey(key) {
 *   return key.toUpperCase();
 * }
 *
 * mapKeysFx(uppercaseKey)({ foo: 1, bar: 2, baz: 3 }); // => { FOO: 1, BAR: 2, BAZ: 3 }
 */
export default fmake(mapKeys, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});
