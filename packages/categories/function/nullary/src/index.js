import nary from '@foldr/nary';
import partial from '@foldr/partial';

/**
 * Creates a function that wraps `fn` and invokes it with up to 0 argument.
 * This will effectively prevent `fn` from receiving any arguments.
 *
 * @param {function} fn The function to fix the arity of.
 * @returns {function} The function with a fixed arity of 0.
 *
 * @arity 1
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { nullary } from '@foldr/all';
 *
 * function foo() {
 *    return arguments;
 * }
 *
 * const fixed = nullary(foo);
 * fixed('a', 'b', 'c', 'd'); // => {}
 */
export default partial(nary, partial._, 0);
