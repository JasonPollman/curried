import fmake from '@foldr/internal-fmake';
import partition from '@foldr/partition';

/**
 * **Functional, autocurried version of [partition](#partition).**
 *
 * "Partitions" the given collection's values into two arrays: The first for which `partitioner`
 * returns truthy for and the second for which `partitioner` returns false.
 *
 * `partitioner` functions are called with the signature `partitioner(value)`,
 * where `value` is the current item in the collection being iterated over.
 *
 * @name partitionFx
 * @param {function} partitioner The iteratee function to use while partitioning.
 * @param {Array|Object|String|Map|Set|Arguments} collection The collection to iterate over.
 * @returns {Array<Array>} An array containing two sub-arrays.
 *
 * @arity 2
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { partition } from '@foldr/all';
 *
 * const toEvenOdd = partition(x => x % 2 === 0);
 *
 * toEvenOdd([1, 2, 3]);            // => [[2], [1, 3]]
 * toEvenOdd({ a: 1, b: 2, c: 3 }); // => [[2], [1, 3]]
 */
export default fmake(partition, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});
