/**
 * Exports the `nullary` function.
 * @since 11/10/18
 * @file
 */

import nary from '@foldr/nary';
import partial from '@foldr/partial';

/**
 * Creates a function that wraps `fn` and invokes it with up to 0 argument.
 * This will effectively prevent `fn` from receiving any arguments.
 * @param {function} fn The function to fix the arity of.
 * @returns {function} The function with a fixed arity of 0.
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * function foo() {
 *    return arguments;
 * }
 *
 * const fixed = nullary(foo);
 * fixed('a', 'b', 'c', 'd'); // => {}
 */
export default partial(nary, partial._, 0);
