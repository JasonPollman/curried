/**
 * Exports the `isObject` function.
 * @since 9/25/18
 * @file
 */

/**
 * Determines if the given item is an object (and not null).
 * This is based on the ECMA spec [Object](http://www.ecma-international.org/ecma-262/7.0/#sec-object-type) datatype specification.
 * That is: arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`.
 * @param {any} x The value to assert object-ness.
 * @returns {boolean} True if `x` is an object, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * isObject({});        // => true
 * isObject(() => {});  // => true
 * isObject('foo');     // => false
 */
export default function isObject(x) {
  const type = typeof x;
  return x != null && (type === 'object' || type === 'function');
}
