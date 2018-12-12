import fmake from '@foldr/internal-fmake';
import mapValues from '@foldr/map-values';

/**
 * **Functional, autocurried version of [mapValues](#map-values).**
 *
 * Creates a new object with the same keys as `collection` by mapping over `collection` and
 * calling `iteratee` for each value in the collection.
 *
 * Iteratee functions are called with the signature `iteratee(value)`, where:
 * - `value` is the current item in the collection being iterated over.
 *
 * @name mapValuesFx
 * @param {function} iteratee The iteratee function to use while mapping values.
 * @param {Object} collection The collection to map the values of.
 * @returns {Object} The results of mapping the `collection` using `iteratee`.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { mapValuesFx } from '@foldr/all';
 *
 * function square(x) {
 *   return x ** 2;
 * }
 *
 * mapValuesFx(square, { foo: 1, bar: 2, baz: 3 }); // => { foo: 1, bar: 4, baz: 9 }
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
 * mapValuesFx('name')(people); // => { 1: 'Ben', 2: 'John', 3: 'Al' }
 */
export default fmake(mapValues, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});
