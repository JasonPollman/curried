/**
 * Exports the `isError` function.
 * @since 10/14/18
 * @file
 */

import is from '@foldr/is';

/**
 * Determines if the given item is an instance of Error.
 *
 * @name isError
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is an Error object, false otherwise.
 *
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * isError(new Error());  // => true
 * isError('foo');       // => false
 */
export default is(Error);
