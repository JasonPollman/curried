/**
 * Exports the `forEachRight` function.
 * @since 11/10/18
 * @file
 */

import IteratorFactory from '@foldr/internal-iterator';

/**
 * This function is similar `forEach` except that iteration is performed from right to left.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
 * `value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @param {function} iteratee The iteratee function to call for each item in `collection`.
 * @returns {undefined}
 * @category collection
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * function log(x) {
 *   console.log(x);
 * }
 *
 * forEach([1, 2, 3], log); // Prints 3, then 2, then 1.
 */
export default IteratorFactory({
  reverse: true,
  Results: () => undefined,
  handler: (results, iteratee, i, value, key, collection) => {
    iteratee(value, key, collection);
  },
});
