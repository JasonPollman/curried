/**
 * Determines if the given value is either `undefined` or `null`.
 *
 * @name isNil
 * @param {any} x The value to assert the nil-ness of.
 * @returns {boolean} True if `x` is nil, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isNil } from '@foldr/all';
 *
 * isNil(null);       // => true
 * isNil(undefined);  // => true
 * isNil('foo');      // => false
 */
export default function isNil(x) {
  return x == null;
}
