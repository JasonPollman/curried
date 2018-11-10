/**
 * Exports the `isDate` function.
 * @since 10/28/18
 * @file
 */

import is from '@foldr/is';

/**
 * Determines if the given item is an instance of Date.
 * @param {any} thing The value to check.
 * @returns {boolean} True if `thing` is a Date object, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * isDate(new Date());  // => true
 * isDate('foo');       // => false
 */
export default is(Date);
