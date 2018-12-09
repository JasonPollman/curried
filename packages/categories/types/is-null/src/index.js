/**
 * Determines if the given value is `null`.
 *
 * @name isNull
 * @param {any} x The value to assert null-ness.
 * @returns {boolean} True if `x` is null, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isNull } from '@foldr/all';
 *
 * isNull(null);       // => true
 * isNull(undefined);  // => false
 * isNull('foo');      // => false
 */
export default function isNull(x) {
  return x === null;
}
