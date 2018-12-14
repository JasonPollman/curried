import nary from '@foldr/nary';
import partial from '@foldr/partial';

/**
 * Limits the [arity](https://en.wikipedia.org/wiki/Arity) of the given function to 2.
 *
 * @name binary
 * @param {function} fn The function to fix the arity of.
 * @returns {function} The function with a fixed arity of 2.
 *
 * @arity 1
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { binary } from '@foldr/all';
 *
 * const fixed = binary(function () {
 *   return arguments;
 * });
 *
 * fixed('a', 'b', 'c', 'd'); // => { 0: 'a', 1: 'b' }
 */
export default partial(nary, partial._, 2);
