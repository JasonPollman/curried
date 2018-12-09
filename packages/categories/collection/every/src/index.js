import iterator, { BREAK } from '@foldr/internal-iterator';

/**
 * This function is similar to `Array#every` except that it works for collections and
 * guards against bad input.
 *
 * A collection is an Array, Object, String, Map, Set, or Arguments object.
 *
 * Iterates over `collection`, calling `predicate` for each item in the collection. If `predicate`
 * returns falsy, iteration is broken and `false` is returned. Otherwise `true` is returned.
 *
 * Predicate functions are called with the signature `predicate(value, key, collection)`, where:
 * - `value` is the current item in the collection being iterated over.
 * - `key` is the key of the current item in the collection being iterated over.
 * - `collection` is the passed in collection.
 *
 * @name every
 * @param {Array|Object|String|Map|Set|Arguments} collection The collection to iterate over.
 * @param {function} predicate The predicate iteratee function.
 * @returns {boolean} True if all items in the collection return true
 * for `predicate`, false otherwise.
 *
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { every } from '@foldr/all';
 *
 * function isEven(x) {
 *   return x % 2 === 0;
 * }
 *
 * every([1, 2, 3], isEven);            // => false
 * every([2, 4, 6], isEven);            // => true
 *
 * every({ a: 1, b: 2, c: 3 }, isEven); // => false
 * every({ a: 2, b: 4, c: 6 }, isEven); // => true
 */
export default iterator({
  $$empty: () => true,
  $$unwrap: results => results.x,
  $$results: () => ({ x: true }),
  $$handler: (context, results, iteratee, i, value, key, collection) => {
    if (context && context.capped ? iteratee(value) : iteratee(value, key, collection)) {
      return undefined;
    }

    // eslint-disable-next-line no-param-reassign
    results.x = false;
    return BREAK;
  },
});
