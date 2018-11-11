/**
 * Exports the `nary` function.
 * @since 11/10/18
 * @file
 */

/**
 * Creates a function that wraps `fn` and invokes it with up to `n` arguments.
 * @param {function} fn The function to fix the arity of.
 * @param {number} n The function to fix the arity of.
 * @returns {function} The function with a fixed arity of `n`.
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
 * const fixed = nary(foo, 2);
 * fixed('a', 'b', 'c', 'd'); // => { 0: 'a', 1: 'b' }
 */
export default function nary(fn, n) {
  if (typeof fn !== 'function') throw new TypeError('Expected a function.');

  const ary = +n || 0;
  const cap = ary < 0 ? 0 : ary;

  return function fixed() {
    const args = arguments;
    if (args.length > cap) args.length = cap;
    return fn.apply(this, arguments);
  };
}
