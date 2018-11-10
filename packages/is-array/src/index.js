/**
 * Exports the "isArray" function.
 * Note: Array.isArray is available in IE9+.
 * @since 10/13/18
 * @file
 */

/**
 * Determines is `x` is an Array instance.
 * Note, this is based on the native `Array.isArray` method.
 * @param {any} x The thing to check.
 * @returns {boolean} True if `thing` is an Array instance, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * isArray([]);     // => true
 * isArray('foo');  // => false
 */
export default Array.isArray;
