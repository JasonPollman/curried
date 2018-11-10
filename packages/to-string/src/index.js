/**
 * Exports the `t` function.
 * @since 10/29/18
 * @file
 */

/**
 * Converts a value into a string by calling it's inherited or own `toString` method.
 * An empty string is returned for `null` and `undefined`.
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
 *
 * toString({
 *   value: 'string-value',
 *   toString() { return this.value; },
 * }) // => 'value'
 */
export default function toString(thing) {
  if (typeof thing === 'string') return thing;
  return thing != null && typeof thing.toString === 'function' ? thing.toString() : '';
}
