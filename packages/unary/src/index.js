/**
 * Exports the `unary` function.
 * @since 11/10/18
 * @file
 */

import nary from '@foldr/nary';
import partial from '@foldr/partial';

/**
 * Creates a function that wraps `fn` and invokes it with up to 1 argument.
 * Extraneous arguments passed to the wrapped function will be ignored.
 * @param {function} fn The function to fix the arity of.
 * @returns {function} The function with a fixed arity of 1.
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
 * const fixed = unary(foo);
 * fixed('a', 'b', 'c', 'd'); // => { 0: 'a' }
 */
export default partial(nary, partial._, 1);
