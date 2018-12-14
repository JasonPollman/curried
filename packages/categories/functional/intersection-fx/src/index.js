import fmake from '@foldr/internal-fmake';
import intersection from '@foldr/intersection';

/**
 * **Functional, autocurried version of [intersection](#intersection).**
 *
 * Computes the intersection of the two given arrays.
 *
 * @name intersectionFx
 * @param {Array} x The first array to compute the intersection of.
 * @param {Array} y The second array to compute the intersection of.
 *
 * @arity 2
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { intersectionFx } from '@foldr/all';
 *
 * intersectionFx([1, 2, 3], [2, 3, 4], [3, 4, 5]);
 * // => [3]
 *
 * intersectionFx([1, 2, 3], [4, 5, 6]);
 * // => []
 *
 * intersectionFx([1, 2, 3]);
 * // => [1, 2, 3]
 */
export default fmake(intersection, {
  arity: 2,
});
