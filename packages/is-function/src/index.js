/**
 * Exports the `isFunction` function.
 * @since 10/28/18
 * @file
 */

/**
 * Determines if the given item is an instance of Function.
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is a Function object, false otherwise.
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * isFunction(() => {})); // => true
 * isFunction([]);        // => false
 */
export default function isFunction(x) {
  return typeof x === 'function';
}
