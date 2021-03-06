/**
 * Converts a value into a string by calling it's inherited or own `toString` method.
 * An empty string is returned for `null` and `undefined`.
 *
 * @name toString
 * @param {any} x The value to convert to a string.
 * @returns {string} The value to convert to a string.
 *
 * @arity 1
 * @category conversion
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { toString } from '@foldr/all';
 *
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
export default function toString(x) {
  if (typeof x === 'string') return x;
  return x != null && typeof x.toString === 'function' ? x.toString() : '';
}
