/**
 * Exports the `isBoolean` function.
 * @since 10/28/18
 * @file
 */

import toStringTag from '@foldr/to-string-tag';
import isObjectLike from '@foldr/is-object-like';

/**
 * Determines if the given item is a boolean.
 *
 * @name isBoolean
 * @param {any} x The value to check.
 * @returns {boolean} True if `thing` is a boolean, false otherwise.
 *
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * isBoolean(true);           // => true
 * isBoolean(false);          // => true
 * isBoolean(new Boolean(1)); // => true
 * isBoolean('foobar');       // => false
 */
export default function isBoolean(x) {
  return x === true || x === false || (isObjectLike(x) && toStringTag(x) === '[object Boolean]');
}
