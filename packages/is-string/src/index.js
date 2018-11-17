/**
 * Exports the `isString` function.
 * @since 10/14/18
 * @file
 */

import is from '@foldr/is';

const isStringObject = is(String);

/**
 * Determines if the given item is a string.
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is a string, false otherwise.
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * isString('foo'); // => true
 * isString('');    // => true
 * isString(100);   // => false
 */
export default function isString(x) {
  return typeof x === 'string' || isStringObject(x);
}
