/**
 * Exports the `isNumber` function.
 * @since 9/25/18
 * @file
 */

import toStringTag from '@foldr/to-string-tag';

/**
 * Determines if the given item is a "plain object". That is a
 * non-Array, non-function, non-null object.
 *
 * A plain object is one that is not an Array or function that inherits from the
 * Object constructor.
 *
 * Note, this is based on `Object.prototype.toString`.
 *
 * @param {any} thing The value to determine whether or not it's a plain object.
 * @returns {boolean} True if `thing` is a plain object, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * isPlainObject({});        // => true
 * isPlainObject([]);        // => true
 * isPlainObject(() => {});  // => false
 * isPlainObject('foo');     // => false
 */
export default function isPlainObject(thing) {
  return !!thing && toStringTag(thing) === '[object Object]';
}
