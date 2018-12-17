import toNumber from '@foldr/to-number';

/**
 * Determines if `x` is less than or equal to `y`.
 *
 * @name isLessThanOrEqual
 * @param {string|number} x The value to compare to `y`.
 * @param {string|number} y The value to compare to `x`.
 * @returns {boolean} True if `x <= y`, false otherwise.
 *
 * @arity 2
 * @category comparison
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isLessThanOrEqual } from '@foldr/all';
 *
 * isLessThanOrEqual(1, 2);     // true
 * isLessThanOrEqual(2, 1);     // false
 * isLessThanOrEqual(2, 2);     // true
 * isLessThanOrEqual('a', 'b'); // true
 */
export default function isLessThanOrEqual(x, y) {
  return typeof x === 'string' && typeof y === 'string' ? x <= y : toNumber(x) <= toNumber(y);
}
