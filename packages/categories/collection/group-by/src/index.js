import iterator from '@foldr/internal-iterator';
import getIteratee from '@foldr/internal-iteratee';

const EmptyObject = () => ({});

/**
 * Groups a collection's values into an object of arrays keyed by the value returned
 * when invoking `iteratee` with the current value in the collection.
 *
 * A collection is an Array, Object, String, Map, Set, or Arguments object.
 *
 * Iterates over `collection`, calling `iteratee` for each item in the collection.
 * The item is added to the returned object's Array property that is the result
 * of invoking `iteratee` with the item.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where:
 * - `value` is the current item in the collection being iterated over.
 * - `key` is the key of the current item in the collection being iterated over.
 * - `collection` is the passed in collection.
 *
 * @name groupBy
 * @param {Array|Object|String|Map|Set|Arguments} collection The collection to iterate over.
 * @param {function} iteratee The iteratee function to use to group collection's values.
 * @returns {Object<Array>} An object group according to `iteratee`.
 *
 * @arity 2
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { groupBy } from '@foldr/all';
 *
 * groupBy([1, 2, 3], x => x % 2 === 0); // => { false: [1, 3], true: [2] }
 *
 * const people = [
 *     { id: 0, name: 'John' }
 *     { id: 1, name: 'Bill' },
 *     { id: 2, name: 'John' },
 * ];
 *
 * // You can use the shorthand iteratee syntax here.
 * groupBy(people, 'name');
 *
 * // => {
 * //     John: [
 * //       { id: 0, name: 'John' }
 * //       { id: 2, name: 'John' },
 * //     ],
 * //     Bill: [
 * //       { id: 1, name: 'Bill' },
 * //     ],
 * // }
 */
export default iterator({
  $$empty: EmptyObject,
  $$results: EmptyObject,
  $$prepare: getIteratee,
  $$handler: (context, results, iteratee, i, value, key, collection) => {
    const group = context && context.capped ? iteratee(value) : iteratee(value, key, collection);

    // eslint-disable-next-line no-param-reassign
    if (!results[group]) results[group] = [];

    const bucket = results[group];
    bucket[bucket.length] = value;
  },
});
