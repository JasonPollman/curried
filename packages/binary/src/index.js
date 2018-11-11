/**
 * Exports the `binary` function.
 * @since 11/10/18
 * @file
 */

import nary from '@foldr/nary';
import partial from '@foldr/partial';

/**
 * Creates a function that wraps `fn` and invokes it with up to 2 arguments.
 * Extraneous arguments passed to the wrapped function will be ignored.
 * @param {function} fn The function to fix the arity of.
 * @returns {function} The function with a fixed arity of 2.
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
export default partial(nary, partial._, 2);
