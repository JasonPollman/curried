import iterator from '@foldr/internal-iterator';

/**
 * This function is similar to [reduce](#reduce), except that
 * iteration is performed from right to left.
 *
 * Reducer iteratee functions are called with the signature
 * `reducer(accumulator, value, key, collection)`, where:
 * - `accumulator` is either the initial value or the results of a previous `reducer` call.
 * - `value` is the current item in the collection being iterated over,
 * - `key` is the key of the current item in the collection being iterated over
 * - `collection` is the passed in collection.
 *
 * @name reduceRight
 * @param {Array|Object|String|Arguments} collection The collection to reduce.
 * @param {function} reducer The reduction function to use while folding.
 * @param {any} initial The inital, "primer" value for folding.
 * @returns {Array} The results of folding `collection` onto `reducer`.
 *
 * @arity 3
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { reduceRight } from '@foldr/all';
 *
 * function square(acc, x) {
 *   return acc + x ** 2;
 * }
 *
 * reduceRight([1, 2, 3], square, 0); // => 14
 */
export default iterator({
  $$empty: x => x,
  $$unwrap: results => results[0],
  $$reverse: true,
  $$results: x => [x],
  $$handler: (context, results, iteratee, i, value, key, collection) => {
    // eslint-disable-next-line no-param-reassign
    results[0] = context && context.capped
      ? iteratee(results[0], value)
      : iteratee(results[0], value, key, collection);
  },
});
