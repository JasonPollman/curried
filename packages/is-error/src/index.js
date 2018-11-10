/**
 * Exports the `isError` function.
 * @since 10/14/18
 * @file
 */

import is from '@foldr/is';

/**
 * Determines if the given item is an instance of Error.
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is an Error object, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * ieError(new Error());  // => true
 * ieError('foo');       // => false
 */
export default is(Error);
