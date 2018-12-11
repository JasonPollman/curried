/**
 * Creates a function that negates the result of calling `fn`.
 *
 * @name negate
 * @param {function} fn The function to negate.
 * @returns {function} The negated version of `fn`.
 *
 * @arity 1
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { negate } from '@foldr/all';
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
