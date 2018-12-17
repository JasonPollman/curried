import fmake from '@foldr/internal-fmake';
import isLessThan from '@foldr/is-less-than';

/**
 * **Functional, autocurried version of [isLessThan](#is-less-than).**
 *
 * Determines if `x` is less than `y`.
 *
 * @name isLessThanFx
 * @param {string|number} y The value to compare to `x`.
 * @param {string|number} x The value to compare to `y`.
 * @returns {boolean} True if `x < y`, false otherwise.
 *
 * @arity 2
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isLessThan } from '@foldr/all';
 *
 * isLessThan(2)(1);     // true
 * isLessThan(1, 2);     // false
 * isLessThan(2)(2);     // false
 * isLessThan('b', 'a'); // true
 */
export default fmake(isLessThan, {
  arity: 2,
  signature: [1, 0],
});
