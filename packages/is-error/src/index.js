/**
 * Exports the `isError` function.
 * @since 10/14/18
 * @file
 */

import is from '@foldr/is';

/**
 * Determines if the given item is an instance of Error.
 * @param {any} thing The value to check.
 * @returns {boolean} True if `thing` is an Error object, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default is(Error);
