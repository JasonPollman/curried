/**
 * Exports the "isArrayLike" function.
 * @since 10/13/18
 * @file
 */

/**
 * Determines if the given `thing` is "array like", meaning
 * it is non-falsy and has a length property. This will be true
 * for arrays, arguments, strings, and array-like objects.
 * @param {any} thing The thing to check.
 * @returns {boolean} True if `thing` is array-like, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default function isArrayLike(thing) {
  return thing === '' || !!(thing && (thing.length || thing.length === 0));
}
