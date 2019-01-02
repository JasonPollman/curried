import fmake from '@foldr/internal-fmake';
import isGreaterThanOrEqual from '@foldr/is-greater-than-or-equal';

/**
 * **Functional, autocurried version of [isGreaterThanOrEqual](#is-greater-than-or-equal).**
 *
 * Determines if `x` is greater than or equal to `y`.
 *
 * @name isGreaterThanOrEqualFx
 * @param {string|number} y The value to compare to `x`.
 * @param {string|number} x The value to compare to `y`.
 * @returns {boolean} True if `x >= y`, false otherwise.
 *
 * @arity 2
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isGreaterThanOrEqual } from '@foldr/all';
 *
 * isGreaterThanOrEqual(2)(1);     // false
 * isGreaterThanOrEqual(1, 2);     // true
 * isGreaterThanOrEqual(2)(2);     // true
 * isGreaterThanOrEqual('a', 'b'); // true
 */
export default fmake(isGreaterThanOrEqual, {
  arity: 2,
  signature: [1, 0],
});
