/**
 * Exports the `isBoolean` function.
 * @since 10/28/18
 * @file
 */

import is from '@foldr/is';

/**
 * Determines if the given item is a boolean.
 * @param {any} thing The value to check.
 * @returns {boolean} True if `thing` is a boolean, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default is(Boolean);
