import mapRight from '@foldr/map-right';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [mapRight](#map-right).**
 *
 * This function is like [mapFx](#map-fx) except that iteration is performed from right to left.
 *
 * Iteratee functions are called with the signature `iteratee(value)`, where:
 * - `value` is the current item in the collection being iterated over.
 *
 * @name mapRightFx
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
 * import { mapRightFx } from '@foldr/all';
 *
 * function square(x) {
 *   return x ** 2;
 * }
 *
 * mapRightFx(square)([1, 2, 3]);            // => [9, 4, 1]
 * mapRightFx(square)({ a: 1, b: 2, c: 3 }); // => [9, 4, 1]
 * mapRightFx(identity, 'foobar');           // => ['r', 'a', 'b', 'o', 'o', 'f']
 */
export default fmake(mapRight, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});
