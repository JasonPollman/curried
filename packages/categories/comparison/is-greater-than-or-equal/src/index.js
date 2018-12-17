import toNumber from '@foldr/to-number';

/**
 * Determines if `x` is greater than or equal to `y`.
 *
 * @name isGreaterThanOrEqual
 * @param {string|number} x The value to compare to `y`.
 * @param {string|number} y The value to compare to `x`.
 * @returns {boolean} True if `x >= y`, false otherwise.
 *
 * @arity 2
 * @category comparison
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isGreaterThanOrEqual } from '@foldr/all';
 *
 * isGreaterThanOrEqual(1, 2);     // false
 * isGreaterThanOrEqual(2, 1);     // true
 * isGreaterThanOrEqual(2, 2);     // true
 * isGreaterThanOrEqual('b', 'a'); // true
 */
export default function isGreaterThanOrEqual(x, y) {
  return typeof x === 'string' && typeof y === 'string' ? x >= y : toNumber(x) >= toNumber(y);
}
