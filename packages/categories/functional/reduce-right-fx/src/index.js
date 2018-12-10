import fmake from '@foldr/internal-fmake';
import reduceRight from '@foldr/reduce-right';

/**
 * **Functional, autocurried version of [reduceRight](#reduce-right).**
 *
 * @name reduceRightFx
 * @param {Array|Object|String|Map|Set|Arguments} collection The collection to fold or "reduce".
 * @param {any} initial The inital, "primer" value for folding.
 * @param {function} reducer The reduction function to use while folding.
 * @returns {Array} The results of folding `collection` onto `reducer`.
 *
 * @arity 3
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { reduceRightFx } from '@foldr/all';
 *
 * function square(acc, x) {
 *   return acc + x ** 2;
 * }
 *
 * reduceRightFx(square, 0)([1, 2, 3]); // => 14
 */
export default fmake(reduceRight, {
  arity: 3,
  capped: true,
  context: 'config',
  signature: [2, 0, 1],
});
