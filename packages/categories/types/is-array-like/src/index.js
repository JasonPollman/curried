/**
 * Determines if the given value is "array-like".
 *
 * An item is array-like, if it is non-falsy and has a length property. This will be `true`
 * for arrays, arguments, strings, and other objects with a  `length` property.
 *
 * @name isArrayLike
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is array-like, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isArrayLike } from '@foldr/all';
 *
 * isArrayLike([]);     // => true
 * isArrayLike('foo');  // => true
 * isArrayLike({});     // => false
 */
export default function isArrayLike(x) {
  return (x === '' || !!(x && x.length >= 0)) && typeof x !== 'function';
}
