import iterator, { BREAK } from '@foldr/internal-iterator';

/**
 * This function is similar to `Array#some` except that is works for Array, Object, String,
 * Map, Set, and Arguments objects.
 *
 * Iterates over `collection`, calling `predicate` for each item in the collection. If `predicate`
 * returns truthy, iteration is broken and `true` is returned. Otherwise `false` is returned.
 *
 * Predicate functions are called with the signature `predicate(value, key, collection)`, where:
 * - `value` is the current item in the collection being iterated over.
 * - `key` is the key of the current item in the collection being iterated over.
 * - `collection` is the passed in collection.
 *
 * @name some
 * @param {Array|Object|String|Arguments} collection The collection to iterate over.
 * @param {function} predicate The predicate iteratee function.
 * @returns {boolean} True if any item in the collection returns `true`
 * for `predicate`, false otherwise.
 *
 * @arity 2
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { some } from '@foldr/all';
 *
 * function isEven(x) {
 *   return x % 2 === 0;
 * }
 *
 * some([1, 2, 3], isEven);            // => true
 * some([2, 4, 6], isEven);            // => true
 * some([1, 3, 5], isEven);            // => false
 *
 * some({ a: 1, b: 2, c: 3 }, isEven); // => true
 * some({ a: 2, b: 4, c: 6 }, isEven); // => true
 * some({ a: 1, b: 3, c: 5 }, isEven); // => false
 */
export default iterator({
  $$empty: () => false,
  $$unwrap: results => results[0],
  $$results: () => [false],
  $$handler: (context, results, iteratee, i, value, key, collection) => {
    if (context && context.capped ? !iteratee(value) : !iteratee(value, key, collection)) {
      return undefined;
    }

    // eslint-disable-next-line no-param-reassign
    results[0] = true;
    return BREAK;
  },
});
