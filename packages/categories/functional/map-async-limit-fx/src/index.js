import fmake from '@foldr/internal-fmake';
import mapAsync from '@foldr/map-async';

/**
 * **Functional, autocurried version of [mapAsync](#map-async).**
 *
 * This function is similar to [mapAsyncFx](#map-async-fx), except that it accepts
 * a `maxConcurrency` parameter. See [mapAsync](#map-async) for more details.
 *
 * Invokes `iteratee` for each item in `collection` up to `maxConcurrency` items
 * at a time and waits for all iteratee functions to resolve before returning
 * an Array of the resolved iteratee results.
 *
 * Iteratee functions are invoked with the signature: `iteratee(value)`, where:
 * - `value` is the current item in the collection being iterated over.
 *
 * @name mapAsyncFx
 * @param {function} iteratee The callback function to invoke once per item in the collection.
 * @param {Array|Object|Map|Set|Arguments} collection The collection to map.
 * @returns {Promise<Array>} Resolves with the mapped array.
 *
 * @arity 3
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { mapAsyncLimitFx } from '@foldr/all';
 *
 * function getUserById(id) {
 *   // Magically get the user from the database somehow...
 *   return Promise.resolve({ id });
 * }
 *
 * const mapAsync2 = mapAsyncLimitFx(2);
 * const getUsersById = mapAsync2(getUserById);
 *
 * const users = await getUsersById([1, 2, 3, 4]);
 * // => [{ id: 1}, { id: 2 }, { id: 3 }, { id: 4 }]
 *
 * // Altogether now...
 * const users = await mapAsyncLimitFx(2, getUserBydId, [1, 2, 3, 4]);
 * // => [{ id: 1}, { id: 2 }, { id: 3 }, { id: 4 }]
 */
export default fmake(mapAsync, {
  arity: 3,
  capped: true,
  context: 'config',
  signature: [2, 1, 0],
});
