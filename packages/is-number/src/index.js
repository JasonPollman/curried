/**
 * Exports the `isNumber` function.
 * @since 9/25/18
 * @file
 */

import is from '@foldr/is';

/**
 * Determines if the given item is a number.
 * @param {any} thing The value to determine Number membership.
 * @returns {boolean} True if `thing` is a number, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default is(Number);
