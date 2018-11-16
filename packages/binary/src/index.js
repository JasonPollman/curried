/**
 * Exports the `binary` function.
 * @since 11/10/18
 * @file
 */

import nary from '@foldr/nary';
import partial from '@foldr/partial';
import FunctionalFactory from '@foldr/internal-fn-factory';

/**
 * Creates a wrapper function around `fn` that limits
 * the number of arguments passed to `fn` to 2.
 *
 * @name binary
 * @param {function} fn The function to fix the arity of.
 * @returns {function} The function with a fixed arity of 2.
 *
 * @category function
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * function foo() {
 *    return arguments;
 * }
 *
 * const fixed = binary(foo);
 * fixed('a', 'b', 'c', 'd'); // => { 0: 'a', 1: 'b' }
 */
const binary = partial(nary, partial._, 2);
export default binary;

/**
 * Creates a wrapper function around `fn` that limits
 * the number of arguments passed to `fn` to 2.
 *
 * @name binary.fn
 * @param {function} fn The function to fix the arity of.
 * @returns {function} The function with a fixed arity of 2.
 *
 * @arity 1
 * @autocurried
 * @category functional
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * function foo() {
 *    return arguments;
 * }
 *
 * const fixed = binary.fn(foo);
 * fixed('a', 'b', 'c', 'd'); // => { 0: 'a', 1: 'b' }
 */
export const fn = FunctionalFactory(binary);
