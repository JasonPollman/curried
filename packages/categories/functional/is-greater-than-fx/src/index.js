import fmake from '@foldr/internal-fmake';
import isGreaterThan from '@foldr/is-greater-than';

/**
 * **Functional, autocurried version of [isGreaterThan](#is-greater-than).**
 *
 * Determines if `x` is greater than `y`.
 *
 * @name isGreaterThanFx
 * @param {string|number} y The value to compare to `x`.
 * @param {string|number} x The value to compare to `y`.
 * @returns {boolean} True if `x > y`, false otherwise.
 *
 * @arity 2
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isGreaterThan } from '@foldr/all';
 *
 * isGreaterThan(2)(1);     // false
 * isGreaterThan(1, 2);     // true
 * isGreaterThan(2, 2);     // false
 * isGreaterThan('a')('b'); // true
 */
export default fmake(isGreaterThan, {
  arity: 2,
  signature: [1, 0],
});
