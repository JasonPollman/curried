import toNumber from '@foldr/to-number';

/**
 * Determines if `x` is less than `y`.
 *
 * @name isLessThan
 * @param {string|number} x The value to compare to `y`.
 * @param {string|number} y The value to compare to `x`.
 * @returns {boolean} True if `x < y`, false otherwise.
 *
 * @arity 2
 * @category comparison
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isLessThan } from '@foldr/all';
 *
 * isLessThan(1, 2);     // true
 * isLessThan(2, 1);     // false
 * isLessThan(2, 2);     // false
 * isLessThan('a', 'b'); // true
 */
export default function isLessThan(x, y) {
  return typeof x === 'string' && typeof y === 'string' ? x < y : toNumber(x) < toNumber(y);
}
