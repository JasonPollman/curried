import iterator from '@foldr/internal-iterator';

const Undefined = () => undefined;

/**
 * This function is similar to `Array#forEach` except that it works for Array, String,
 * Object, Map, Set and Arguments objects.
 *
 * Iterates over `collection`, calling `iteratee` for each item in the collection.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where:
 * - `value` is the current item in the collection being iterated over.
 * - `key` is the key of the current item in the collection being iterated over.
 * - `collection` is the passed in collection.
 *
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @param {function} iteratee The iteratee function to call for each item in `collection`.
 * @returns {undefined}
 *
 * @arity 2
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { forEach, unary } from '@foldr/all';
 *
 * forEach([1, 2, 3], unary(console.log)); // Prints 1, then 2, then 3.
 */
export default iterator({
  $$empty: Undefined,
  $$results: Undefined,
  $$handler: (context, results, iteratee, i, value, key, collection) => {
    iteratee(value, key, collection);
  },
});
