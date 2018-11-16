/**
 * Exports the `mapRight` function.
 * @since 11/10/18
 * @file
 */

import IteratorFactory from '@foldr/internal-iterator';

/**
 * This function is like `map` except that iteration is performed from right to left.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
 * `value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @param {function} iteratee The iterate function to use while mapping.
 * @returns {Array} The results of mapping `collection` to `iteratee`.
 * @category collection
 * @memberof foldr
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
export default IteratorFactory({
  reverse: true,
  Empty: () => [],
  Results: () => [],
  handler: (context, results, iteratee, i, value, key, collection) => {
    results[i] = iteratee(value, key, collection); // eslint-disable-line no-param-reassign
  },
});
