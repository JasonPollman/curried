import getIteratee from '@foldr/internal-iteratee';
import iterator, { BREAK } from '@foldr/internal-iterator';

/**
 * This function is similar to `Array#findIndex` except that is works for collections and guards
 * against bad input.
 *
 * A collection is an Array, Object, String, Map, Set, or Arguments object.
 *
 * Iterates over `collection`, calling `iteratee` for each item in the collection. If
 * `iteratee` returns `true`, the current key will be returned. If all items are exhausted,
 * `undefined` is returned.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where:
 * - `value` is the current item in the collection being iterated over.
 * - `key` is the key of the current item in the collection being iterated over.
 * - `collection` is the passed in collection.
 *
 * @name findKey
 * @param {Array|Object|String|Map|Set|Arguments} collection The collection to iterate over.
 * @param {function} iteratee The iteratee function to use while finding a key.
 * @returns {any} The found key (or undefined).
 *
 * @arity 2
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { findKey } from '@foldr/all';
 *
 * function isEven(x) {
 *   return x % 2 === 0;
 * }
 *
 * findKey([1, 2, 3], isEven);            // => 1
 * findKey({ a: 1, b: 2, c: 3 }, isEven); // => 'b'
 * findKey({ a: 1, b: 3, c: 5 }, isEven); // => undefined
 *
 * const data = new Map([['x', 1], ['y', 2]]);
 * findKey(data, isEven); // => 'y'
 */
export default iterator({
  $$empty: () => undefined,
  $$unwrap: results => results.x,
  $$results: () => ({ x: undefined }),
  $$prepare: getIteratee,
  $$handler: (context, results, iteratee, i, value, key, collection) => {
    if (context && context.capped ? !iteratee(value) : !iteratee(value, key, collection)) {
      return undefined;
    }

    // eslint-disable-next-line no-param-reassign
    results.x = key;
    return BREAK;
  },
});
