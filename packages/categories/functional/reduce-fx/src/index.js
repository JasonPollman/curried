import fmake from '@foldr/internal-fmake';
import reduce from '@foldr/reduce';

/**
 * **Functional, autocurried version of [reduce](#reduce).**
 *
 * @name reduceFx
 * @param {Array|Object|String|Map|Set|Arguments} collection The collection to reduce.
 * @param {function} reducer The reduction function to use while reducing.
 * @param {any} initial The inital, "primer" value for reduction.
 * @returns {Array} The results of reducting `collection` onto `reducer`.
 *
 * @arity 3
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { reduceFx } from '@foldr/all';
 *
 * function square(acc, x) {
 *   return acc + x ** 2;
 * }
 *
 * reduceFx(square, 0)([1, 2, 3]); // => 14
 */
export default fmake(reduce, {
  arity: 3,
  capped: true,
  context: 'config',
  signature: [2, 0, 1],
});
