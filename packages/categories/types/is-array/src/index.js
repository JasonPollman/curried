/**
 * Determines is `x` is an Array instance.
 * Note, this is based on the native `Array.isArray` method.
 *
 * @name isArray
 * @param {any} x The thing to check.
 * @returns {boolean} True if `x` is an Array instance, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isArray } from '@foldr/all';
 *
 * isArray([]);     // => true
 * isArray('foo');  // => false
 */
export default Array.isArray;
