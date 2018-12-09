import map from '@foldr/map';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [map](#map).**
 *
 * Iterates over `collection`, calling `iteratee` for each item in the collection and returning
 * a new array containing the return values from mapping `collection` to `iteratee`.
 *
 * Iteratee functions are called with a single argument (`value`), that is is the current item
 * in the collection being iterated over.
 *
 * @name mapFx
 * @param {function} iteratee The iterate function to use while mapping.
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @returns {Array} The results of mapping `collection` to `iteratee`.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { mapFx } from '@foldr/all';
 *
 * function square(x) {
 *   return x ** 2;
 * }
 *
 * mapFx(square, [1, 2, 3]);            // => [1, 4, 9]
 * mapFx(square, { a: 1, b: 2, c: 3 }); // => [1, 4, 9]
 * mapFx(identity, 'foobar');           // => ['f', 'o', 'o', 'b', 'a', 'r']
 */
export default fmake(map, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});
