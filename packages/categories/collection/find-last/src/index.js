import getIteratee from '@foldr/internal-iteratee';
import iterator, { BREAK } from '@foldr/internal-iterator';

/**
 * This function is similar to [find](#find), except it iterates from right to left.
 *
 * A collection is an Array, Object, String, Map, Set, or Arguments object.
 *
 * Iterates over `collection`, calling `iteratee` for each item in the collection. If
 * `iteratee` returns `true`, the current value will be returned. If all items are exhausted
 * then `undefined` is returned.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where:
 * - `value` is the current item in the collection being iterated over.
 * - `key` is the key of the current item in the collection being iterated over.
 * - `collection` is the passed in collection.
 *
 * @name findLast
 * @param {Array|Object|String|Map|Set|Arguments} collection The collection to iterate over.
 * @param {function} predicate The iteratee function to use while finding a value.
 * @returns {any} The found value (or undefined).
 *
 * @arity 2
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { findLast } from '@foldr/all';
 *
 * function isEven(x) {
 *   return x % 2 === 0;
 * }
 *
 * findLast([1, 2, 3, 4], isEven);               // => 4
 * findLast({ a: 1, b: 2, c: 3, d: 4 }, isEven); // => 4
 * findLast({ a: 1, b: 3, c: 5 }, isEven);       // => undefined
 */
export default iterator({
  $$empty: () => undefined,
  $$unwrap: results => results.x,
  $$results: () => ({ x: undefined }),
  $$reverse: true,
  $$prepare: getIteratee,
  $$handler: (context, results, iteratee, i, value, key, collection) => {
    if (context && context.capped ? !iteratee(value) : !iteratee(value, key, collection)) {
      return undefined;
    }

    // eslint-disable-next-line no-param-reassign
    results.x = value;
    return BREAK;
  },
});
