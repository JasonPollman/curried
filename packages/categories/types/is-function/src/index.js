/**
 * Determines if the given value is a function.
 *
 * @name isFunction
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is a Function object, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isFunction } from '@foldr/all';
 *
 * isFunction(() => {})); // => true
 * isFunction([]);        // => false
 */
export default function isFunction(x) {
  return typeof x === 'function';
}
