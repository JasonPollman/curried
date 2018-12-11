/**
 * Determines if the given value is undefined.
 *
 * @name isUndefined
 * @param {any} x The value to assert undefined-ness.
 * @returns {boolean} True if `x` is undefined, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isUndefined } from '@foldr/all';
 *
 * isUndefined(undefined);  // => true
 * isUndefined(null);       // => false
 * isUndefined('foo');      // => false
 */
export default function isUndefined(x) {
  return x === undefined;
}
