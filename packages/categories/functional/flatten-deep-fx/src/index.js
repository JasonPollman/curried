import fmake from '@foldr/internal-fmake';
import flattenDeep from '@foldr/flatten-deep';

/**
 * **Functional, autocurried version of [flattenDeep](#flatten-deep).**
 *
 * Flattens an array to the specified depth (which defaults to `Infinity`).
 *
 * This will iterate over the provided array pushing all items into a new array.
 * If the current item is an array, it's contents will also be pushed into the new array.
 *
 * @name flattenDeepFx
 * @param {number} maxDepth The maximum depth to flatten to.
 * @param {Array} array The array to deeply flatten.
 * @returns {Array} A newly flattened array.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { flattenDeepFx } from '@foldr/all';
 *
 * flattenDeepFx(1)([1, 2, 3, 4]);                  // => [1, 2, 3, 4]
 * flattenDeepFx(10)([1, [2, [3, 4, [5, 6]], [7]]); // => [1, 2, 3, 4, 5, 6, 7]
 * flattenDeepFx(Infinity)([[1], [2], [3], 4]);     // => [1, 2, 3, 4]
 */
export default fmake(flattenDeep, {
  arity: 2,
  signature: [1, 0],
});
