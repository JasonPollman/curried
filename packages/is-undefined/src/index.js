/**
 * Exports the `isUndefined` function.
 * @since 10/14/18
 * @file
 */

/**
 * Determines if the given item is undefined.
 *
 * @name isUndefined
 * @param {any} x The value to assert undefined-ness.
 * @returns {boolean} True if `x` is undefined, false otherwise.
 *
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * isUndefined(undefined);  // => true
 * isUndefined(null);       // => false
 * isUndefined('foo');      // => false
 */
export default function isUndefined(x) {
  return x === undefined;
}
