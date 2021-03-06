import SafeSymbolFor from '@foldr/internal-symbol';

/* eslint-disable require-jsdoc */

/**
 * Used to track the arity of curried functions.
 * @type {SafeSymbol}
 */
export const ARITY = SafeSymbolFor('source-arity');

/**
 * Used to track the arity of capped functions.
 * @type {SafeSymbol}
 */
export const SOURCE = SafeSymbolFor('source-fn');

/**
 * The `toString` implementation for capped functions.
 * This will print the original function's source string
 * prepended with a friendly message that the function is capped.
 * @returns {string} The source function's code with a comment
 * informing the user that the function is curried.
 */
function toStringForCapped() {
  return `/* Arity Capped to ${this[ARITY]} */\r\n`.concat(this[SOURCE].toString());
}

/**
 * Limits the [arity](https://en.wikipedia.org/wiki/Arity) of the given function to the given value.
 *
 * @name nary
 * @param {function} fn The function to fix the arity of.
 * @param {number} n The maximum number of arguments the returned function will accept.
 * @returns {function} The function with a fixed arity of `n`.
 *
 * @arty 2
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { nary } from '@foldr/all';
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

  function fixed() {
    const args = arguments;
    if (args.length > cap) args.length = cap;
    return fn.apply(this, args);
  }

  fixed[ARITY] = cap;
  fixed[SOURCE] = fn;
  fixed.toString = toStringForCapped;

  return fixed;
}
