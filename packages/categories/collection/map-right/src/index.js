import iterator from '@foldr/internal-iterator';

const EmptyArray = () => [];

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
 * @arity 2
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { mapRight } from '@foldr/all';
 *
 * function square(x) {
 *   return x ** 2;
 * }
 *
 * mapRight([1, 2, 3], square);            // => [9, 4, 1]
 * mapRight({ a: 1, b: 2, c: 3 }, square); // => [9, 4, 1]
 * mapRight('foobar', identity);           // => ['r', 'a', 'b', 'o', 'o', 'f']
 */
export default iterator({
  $$empty: EmptyArray,
  $$reverse: true,
  $$results: (initial, collection) => {
    // Yes, there is a distinct difference here.
    // If we know the size `new Array` is faster, otherwise `[]` is.
    // For arrays and strings, we know the result set size, for objects we don't.
    const size = collection.length;
    return size ? new Array(size) : [];
  },
  $$handler: (context, results, iteratee, i, value, key, collection) => {
    // eslint-disable-next-line no-param-reassign
    results[i] = context && context.capped ? iteratee(value) : iteratee(value, key, collection);
  },
});
