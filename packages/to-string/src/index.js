/**
 * Exports the `t` function.
 * @since 10/29/18
 * @file
 */

/**
 * Converts a value into a string by calling it's inherent `toString` method.
 * An empty string is returned for `null` and `undefined.
 * @param {any} thing The value to convert to a string.
 * @returns {string} The value to convert to a string.
 * @category util
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 * toString(null);      // => ''
 * toString(undefined); // => ''
 * toString(0);         // => '0'
 * toString('foo');     // => 'foo'
 * toString([1, 2, 3]); // => '1,2,3'
 */
export default function toString(thing) {
  return thing != null && thing.toString ? thing.toString() : '';
}
