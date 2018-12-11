import iterator from '@foldr/internal-iterator';

/**
 * This function is similar to `Array#map` except that is works for Array, Object, String,
 * Map, Set, and Arguments objects.
 *
 * Iterates over `collection`, calling `iteratee` for each item in the collection and returning
 * a new array containing the return values from the calls to `iteratee`.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
 * `value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 *
 * @name map
 * @param {Array|Object|String|Map|Set|Arguments} collection The collection to iterate over.
 * @param {function} iteratee The iterate function to use while mapping.
 * @returns {Array} The results of mapping `collection` to `iteratee`.
 *
 * @arity 2
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { map } from '@foldr/all';
 *
 * function square(x) {
 *   return x ** 2;
 * }
 *
 * map([1, 2, 3], square);            // => [1, 4, 9]
 * map({ a: 1, b: 2, c: 3 }, square); // => [1, 4, 9]
 * map('foobar', identity);           // => ['f', 'o', 'o', 'b', 'a', 'r']
 */
export default iterator({
  $$empty: () => [],
  $$results: () => [],
  $$handler: (context, results, iteratee, i, value, key, collection) => {
    // eslint-disable-next-line no-param-reassign
    results[i] = context && context.capped ? iteratee(value) : iteratee(value, key, collection);
  },
});
