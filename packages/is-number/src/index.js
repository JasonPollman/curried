/**
 * Exports the `isNumber` function.
 * @since 9/25/18
 * @file
 */

import is from '@foldr/is';

const isObjectNumber = is(Number);

/**
 * Determines if the given item is a number.
 *
 * @name isNumber
 * @param {any} x The value to determine Number membership.
 * @returns {boolean} True if `x` is a number, false otherwise.
 *
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * isNumber(100);   // => true
 * isNumber('100'); // => false
 */
export default function isNumber(x) {
  return typeof x === 'number' || isObjectNumber(x);
}
