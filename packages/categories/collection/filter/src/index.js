import iterator from '@foldr/internal-iterator';

const EmptyArray = () => [];

/**
 * This function is similar to `Array#filter` except that is works for collections and guards
 * against bad input.
 *
 * A collection is an Array, Object, String, Map, Set, or Arguments object.
 *
 * Iterates over `collection`, calling `filterFn` for each item in the collection. If
 * `filterFn` returns `true`, the value will be kept in the returned array, otherwise
 * the value is omitted from the returned array.
 *
 * Filter functions are called with the signature `filterFn(value, key, collection)`, where:
 * - `value` is the current item in the collection being iterated over.
 * - `key` is the key of the current item in the collection being iterated over.
 * - `collection` is the passed in collection.
 *
 * @name filter
 * @param {Array|Object|String|Map|Set|Arguments} collection The collection to iterate over.
 * @param {function} filterFn The iteratee function to use while filtering.
 * @returns {Array} The results of mapping `collection` to `filterFn`.
 *
 * @arity 2
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { filter } from '@foldr/all';
 *
 * function isEven(x) {
 *   return x % 2 === 0;
 * }
 *
 * filter([1, 2, 3], isEven);            // => [2]
 * filter({ a: 1, b: 2, c: 3 }, isEven); // => [2]
 */
export default iterator({
  $$empty: EmptyArray,
  $$results: EmptyArray,
  $$handler: (context, results, iteratee, i, value, key, collection) => {
    if (context && context.capped ? iteratee(value) : iteratee(value, key, collection)) {
      // eslint-disable-next-line no-param-reassign
      results[results.length] = value;
    }
  },
});
