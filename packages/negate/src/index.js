/**
 * Exports the `negate` function.
 * @since 11/10/18
 * @file
 */

/**
 * Creates a function that negates the result of `fn`.
 * @param {function} fn The function to negate.
 * @returns {function} The negated version of `fn`.
 * @category function
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * function truthy() {
 *    return true;
 * }
 *
 * const falsy = negate(truthy);
 * falsy(); // => false
 */
export default function negate(fn) {
  return function negated() {
    return !fn.apply(this, arguments);
  };
}
