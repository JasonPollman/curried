/**
 * Determines if the given value is an object (and not null).
 *
 * This is based on the ECMA spec [Object](http://www.ecma-international.org/ecma-262/7.0/#sec-object-type) datatype specification.
 * That is: arrays, functions, objects, regular expressions, `new Number(0)`, and `new String('')`.
 *
 * @name isObject
 * @param {any} x The value to assert object-ness.
 * @returns {boolean} True if `x` is an object, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isObject } from '@foldr/all';
 *
 * isObject({});        // => true
 * isObject(() => {});  // => true
 * isObject('foo');     // => false
 */
export default function isObject(x) {
  const type = typeof x;
  return x != null && (type === 'object' || type === 'function');
}
