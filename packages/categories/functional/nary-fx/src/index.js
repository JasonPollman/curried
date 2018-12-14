import nary from '@foldr/nary';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [nary](#nary).**
 *
 * @name naryFx
 * @param {number} n The function to fix the arity of.
 * @param {function} fn The function to fix the arity of.
 * @returns {function} The function with a fixed arity of `n`.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { naryFx } from '@foldr/all';
 *
 * function foo() {
 *    return arguments;
 * }
 *
 * const fixed = naryFx(2)(foo);
 * fixed('a', 'b', 'c', 'd'); // => { 0: 'a', 1: 'b' }
 */
export default fmake(nary, {
  arity: 2,
  signature: [1, 0],
});
