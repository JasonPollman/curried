/**
 * Exports the `isRegExp` function.
 * @since 10/28/18
 * @file
 */

import is from '@foldr/is';

/**
 * Determines if the given item is an instance of RegExp.
 * @param {any} thing The value to check.
 * @returns {boolean} True if `thing` is a RegExp object, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default is(RegExp);
