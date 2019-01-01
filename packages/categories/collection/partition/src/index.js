import iterator from '@foldr/internal-iterator';

const EmptyTuple = () => [[], []];

/**
 * "Partitions" the given collection's values into two arrays: The first for which `partitioner`
 * returns truthy for and the second for which `partitioner` returns false.
 *
 * A collection is an Array, Object, String, Map, Set, or Arguments object.
 *
 * Iterates over `collection`, calling `partitioner` for each item in the collection. If
 * `partitioner` returns truthy, the value will be put into the 0th array of the returned
 * array. Otherwise, it will be present in the second.
 *
 * `partitioner` functions are called with the signature `partitioner(value, key, collection)`,
 * where:
 * - `value` is the current item in the collection being iterated over.
 * - `key` is the key of the current item in the collection being iterated over.
 * - `collection` is the passed in collection.
 *
 * @name partition
 * @param {Array|Object|String|Map|Set|Arguments} collection The collection to iterate over.
 * @param {function} partitioner The iteratee function to use while partitioning.
 * @returns {Array<Array>} An array containing two sub-arrays.
 *
 * @arity 2
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { partition } from '@foldr/all';
 *
 * function isEven(x) {
 *   return x % 2 === 0;
 * }
 *
 * partition([1, 2, 3], isEven);            // => [[2], [1, 3]]
 * partition({ a: 1, b: 2, c: 3 }, isEven); // => [[2], [1, 3]]
 */
export default iterator({
  $$empty: EmptyTuple,
  $$results: EmptyTuple,
  $$handler: (context, results, iteratee, i, value, key, collection) => {
    const predicate = context && context.capped
      ? iteratee(value)
      : iteratee(value, key, collection);

    const bucket = results[predicate ? 0 : 1];
    bucket[bucket.length] = value;
  },
});
