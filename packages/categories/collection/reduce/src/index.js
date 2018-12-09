import iterator from '@foldr/internal-iterator';

/**
 * This function is similar to Array#reduce except that it works for collections and guards
 * against bad input.
 *
 * A collection is an Array, Object, String, Map, Set, or Arguments object.
 *
 * Iterates over `collection`, calling `reducer` for each item in the collection and returning
 * the accumulation of the successive calls to `reducer`. Each invocation of `reducer` becomes
 * the "reduced" value of the previous call.
 *
 * Reduction functions are called with the signature
 * `reducer(accumulator, value, key, collection)`, where:
 * - `accumulator` is either the initial value or the results of a previous `reducer` call.
 * - `value` is the current item in the collection being iterated over,
 * - `key` is the key of the current item in the collection being iterated over
 * - `collection` is the passed in collection.
 *
 * @name reduce
 * @param {Array|Object|String|Map|Set|Arguments} collection The collection to reduce.
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
 * import { reduce } from '@foldr/all';
 *
 * function square(acc, x) {
 *   return acc + x ** 2;
 * }
 *
 * reduce([1, 2, 3], square, 0); // => 14
 */
export default iterator({
  $$empty: x => x,
  $$unwrap: results => results[0],
  $$results: x => [x],
  $$handler: (context, results, iteratee, i, value, key, collection) => {
    // eslint-disable-next-line no-param-reassign
    results[0] = context && context.capped
      ? iteratee(results[0], value)
      : iteratee(results[0], value, key, collection);
  },
});
