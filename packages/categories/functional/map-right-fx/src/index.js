/**
 * Exports the `mapRight` function.
 * @since 11/10/18
 * @file
 */

import IteratorFactory from '@foldr/internal-iterator';
import FunctionalFactory from '@foldr/internal-fmake';

/**
 * This function is like `map` except that iteration is performed from right to left.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
 * `value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 *
 * @name mapRight
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @param {function} iteratee The iterate function to use while mapping.
 * @returns {Array} The results of mapping `collection` to `iteratee`.
 *
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * function square(x) {
 *   return x ** 2;
 * }
 *
 * mapRight([1, 2, 3], square);            // => [9, 4, 1]
 * mapRight({ a: 1, b: 2, c: 3 }, square); // => [9, 4, 1]
 * mapRight('foobar', identity);           // => ['r', 'a', 'b', 'o', 'o', 'f']
 */
const mapRight = IteratorFactory({
  reverse: true,
  Empty: () => [],
  Results: () => [],
  handler: (context, results, iteratee, i, value, key, collection) => {
    // eslint-disable-next-line no-param-reassign
    results[i] = context && context.capped ? iteratee(value) : iteratee(value, key, collection);
  },
});

/**
 * Functional, autocurried version of `mapRight`.
 *
 * This function is like `map` except that iteration is performed from right to left.
 *
 * Iteratee functions are called with the signature `iteratee(value)`, where
 * `value` is the current item in the collection being iterated over.
 *
 * @name mapRight.f
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
 * function square(x) {
 *   return x ** 2;
 * }
 *
 * mapRight.f(square)([1, 2, 3]);            // => [9, 4, 1]
 * mapRight.f(square)({ a: 1, b: 2, c: 3 }); // => [9, 4, 1]
 * mapRight.f(identity, 'foobar');           // => ['r', 'a', 'b', 'o', 'o', 'f']
 */
export const f = FunctionalFactory(mapRight, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});

export default mapRight;
