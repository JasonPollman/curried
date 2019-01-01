import union from '@foldr/union';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [union](#union).**
 *
 * Creates a new array containing all of the unique the values from arrays `a` and `b`.
 *
 * @name unionFx
 * @param {Array} a The first array to take the union of.
 * @param {Array} b The second array to take the union of.
 * @returns {Array} The set of values unique to both `a` and `b`.
 *
 * @arity 2
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { unionFx } from '@foldr/all';
 *
 * unionFx([1, 2, 3])([2, 3, 4]);
 * // => [1, 2, 3, 4]
 *
 * unionFx([1, 2, 3])([4, 5, 6]);
 * // => [1, 2, 3, 4, 5, 6]
 */
export default fmake(union, {
  arity: 2,
});
