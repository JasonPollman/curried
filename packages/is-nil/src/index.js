/**
 * Exports the `isNil` function.
 * @since 10/14/18
 * @file
 */

/**
 * Determines if the given item is either undefined or null.
 * @param {any} thing The value to assert the nil-ness of.
 * @returns {boolean} True if `thing` is nil, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default function isNil(thing) {
  return thing == null;
}
