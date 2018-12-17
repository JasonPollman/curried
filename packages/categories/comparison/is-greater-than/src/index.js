import toNumber from '@foldr/to-number';

/**
 * Determines if `x` is greater than `y`.
 *
 * @name isGreaterThan
 * @param {string|number} x The value to compare to `y`.
 * @param {string|number} y The value to compare to `x`.
 * @returns {boolean} True if `x > y`, false otherwise.
 *
 * @arity 2
 * @category comparison
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isGreaterThan } from '@foldr/all';
 *
 * isGreaterThan(1, 2);     // false
 * isGreaterThan(2, 1);     // true
 * isGreaterThan(2, 2);     // false
 * isGreaterThan('b', 'a'); // true
 */
export default function isGreaterThan(x, y) {
  return typeof x === 'string' && typeof y === 'string' ? x > y : toNumber(x) > toNumber(y);
}
