import fmake from '@foldr/internal-fmake';
import mapAsync from '@foldr/map-async';

/**
 * **Functional, autocurried version of [mapAsync](#map-async).**
 *
 * Invokes `iteratee` for each item in `collection` and waits for all iteratee functions
 * to resolve before returning an Array of the resolved iteratee results.
 *
 * Iteratee functions are invoked with the signature: `iteratee(value)`, where:
 * - `value` is the current item in the collection being iterated over.
 *
 * @name mapAsyncFx
 * @param {function} iteratee The callback function to invoke once per item in the collection.
 * @param {Array|Object|Map|Set|Arguments} collection The collection to map.
 * @returns {Promise<Array>} Resolves with the mapped array.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { mapAsyncFx } from '@foldr/all';
 *
 * function getUserById(id) {
 *   // Magically get the user from the database somehow...
 *   return Promise.resolve({ id });
 * }
 *
 * const getUsersById = mapAsyncFx(getUserById);
 *
 * const users = await getUsersById([1, 2, 3, 4]);
 * // => [{ id: 1}, { id: 2 }, { id: 3 }, { id: 4 }]
 */
export default fmake(mapAsync, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});
