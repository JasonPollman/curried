import difference from '@foldr/difference';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [difference](#difference).**
 *
 * Creates a new array of all the values that exist in the first array, but not
 * any of the other arrays provided.
 *
 * @name differenceFx
 * @param {Array} base The base array to inspect.
 * @param {Array} comparator The array to compare to `base`.
 * @returns {Array} The difference between `base` and `comparator`.
 *
 * @arity 2
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { differenceFx } from '@foldr/all';
 *
 * differenceFx([1, 2, 3])([2, 3, 4]);
 * // => [1]
 *
 * differenceFx([1, 2, 3])([4, 5, 6]);
 * // => [1, 2, 3]
 */
export default fmake(difference, {
  arity: 2,
});
