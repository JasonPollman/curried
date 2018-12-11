import iterator from '@foldr/internal-iterator';

const Undefined = () => undefined;

/**
 * This function is similar to [forEach](#for-each) except
 * that iteration is performed from right to left.
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
 * import { forEachRight, unary } from '@foldr/all';
 *
 * forEach([1, 2, 3], unary(console.log)); // Prints 3, then 2, then 1.
 */
export default iterator({
  $$empty: Undefined,
  $$results: Undefined,
  $$reverse: true,
  $$handler: (context, results, iteratee, i, value, key, collection) => {
    iteratee(value, key, collection);
  },
});
