/**
 * Exports the `isNil` function.
 * @since 10/14/18
 * @file
 */

/**
 * Determines if the given item is either `undefined` or `null`.
 * @param {any} x The value to assert the nil-ness of.
 * @returns {boolean} True if `x` is nil, false otherwise.
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * isNil(null);       // => true
 * isNil(undefined);  // => true
 * isNil('foo');      // => false
 */
export default function isNil(x) {
  return x == null;
}
