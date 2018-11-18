/**
 * Exports the `isObject` function.
 * @since 9/25/18
 * @file
 */

/**
 * Determines if the given item is an object (and not `null`).
 * Unlike `isObject`, this will not return `true` for values of `x` that are functions.
 *
 * @name isObjectLike
 * @param {any} x The value to assert object-ness.
 * @returns {boolean} True if `x` is an object, false otherwise.
 *
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * isObjectLike({});             // => true
 * isObjectLike([]);             // => true
 * isObjectLike(function () {}); // => false
 * isObjectLike('foobar');       // => false
 */
export default function isObjectLike(x) {
  return x != null && typeof x === 'object';
}
