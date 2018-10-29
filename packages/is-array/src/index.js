/**
 * Exports the "isArray" function.
 * @since 10/13/18
 * @file
 */

import is from '@foldr/is';

/**
 * Determines is `thing` is classified as an Array instance.
 * @param {any} thing The thing to check.
 * @returns {boolean} True if `thing` is an Array instance, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default is(Array);
