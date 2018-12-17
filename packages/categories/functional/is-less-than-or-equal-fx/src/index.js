import fmake from '@foldr/internal-fmake';
import isLessThanOrEqual from '@foldr/is-less-than-or-equal';

/**
 * **Functional, autocurried version of [isLessThanOrEqual](#is-less-than-or-equal).**
 *
 * Determines if `x` is less than or equal to `y`.
 *
 * @name isLessThanOrEqualFx
 * @param {string|number} y The value to compare to `x`.
 * @param {string|number} x The value to compare to `y`.
 * @returns {boolean} True if `x <= y`, false otherwise.
 *
 * @arity 2
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isLessThanOrEqual } from '@foldr/all';
 *
 * isLessThanOrEqual(2)(1);     // true
 * isLessThanOrEqual(1, 2);     // false
 * isLessThanOrEqual(2)(2);     // true
 * isLessThanOrEqual('b', 'a'); // true
 */
export default fmake(isLessThanOrEqual, {
  arity: 2,
  signature: [1, 0],
});
