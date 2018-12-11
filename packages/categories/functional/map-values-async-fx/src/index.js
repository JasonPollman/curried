import fmake from '@foldr/internal-fmake';
import mapValuesAsync from '@foldr/map-values-async';

/**
 * **Functional, autocurried version of [mapValuesAsync](#map-values-async).**
 *
 * Invokes `iteratee` for each item in `collection` and waits for all iteratee functions
 * to resolve before returning an Object of asynchronously mapping the values of `collection`.
 *
 * Iteratee functions are invoked with the signature: `iteratee(value, key, collection)`, where:
 * - `value` is the current item in the collection being iterated over.
 *
 * @name mapValuesAsyncFx
 * @param {function} iteratee The callback function to invoke for each item in `collection`.
 * @param {Array|Object|Map|Set|Arguments} collection The collection to map the values of.
 * @returns {Promise<Object>} Resolves with the asynchronously mapped object.
 *
 * @arity 2
 * @category async
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { mapValuesAsyncFx } from '@foldr/all';
 *
 * const getUserObjectDetails = mapValuesAsyncFx(function (id) {
 *   // Magically get user details from the server somehow...
 *   return Promise.resolve({ id });
 * });
 *
 * const users = await getUserObjectDetails({
 *   bob: 2,
 *   john: 1,
 *   willy: 4,
 * });
 *
 * // =>
 * // {
 * //   bob: { id: 2 },
 * //   john: { id: 1 },
 * //   willy: { id: 4 },
 * // }
 */
export default fmake(mapValuesAsync, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});
