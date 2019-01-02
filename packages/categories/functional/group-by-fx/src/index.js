import groupBy from '@foldr/group-by';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [groupBy](#group-by).**
 *
 * Groups a collection's values into an object of arrays keyed by the value returned
 * when invoking `iteratee` with the current value in the collection.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
 * `value` is the current item in the collection being iterated over.
 *
 * @name groupByFx
 * @param {function} iteratee The iteratee function to use to group collection's values.
 * @param {Array|Object|String|Map|Set|Arguments} collection The collection to iterate over.
 * @returns {Object<Array>} An object group according to `iteratee`.
 *
 * @arity 2
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { groupByFx } from '@foldr/all';
 *
 * groupByFx(x => x % 2 === 0)([1, 2, 3]); // => { false: [1, 3], true: [2] }
 *
 * const people = [
 *     { id: 0, name: 'John' }
 *     { id: 1, name: 'Bill' },
 *     { id: 2, name: 'John' },
 * ];
 *
 * // You can use the shorthand iteratee syntax here.
 * groupByFx('name')(people);
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
export default fmake(groupBy, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});
