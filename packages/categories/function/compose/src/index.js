import SafeSymbolFor from '@foldr/internal-symbol';

/* eslint-disable require-jsdoc */

/**
 * Used to track the arity of composed functions.
 * @type {SafeSymbol}
 */
export const ARITY = SafeSymbolFor('source-arity');

/**
 * *Function composition.*
 *
 * Creates a new function that returns the result of invoking
 * the given functions in successive order from right to left,
 * passing the results of the previous invocation to the next.
 *
 * Each function will be invoked with the `this` binding available
 * to the newly created function.
 *
 * This function is very similar to `pipe`, except that the order
 * of function execution flows from right to left (bottom to top).
 *
 * @name compose
 * @param {...function} functions The functions to compose.
 * @returns {function} The composite function.
 *
 * @arity Infinity
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { compose } from '@foldr/all';
 *
 * function add(a, b) {
 *   return a + b;
 * }
 *
 * function square(x) {
 *   return x * x;
 * }
 *
 * const sumSquared = compose(square, add);
 * sumSquared(1, 2); // => 9
 * sumSquared(2, 3); // => 25
 */
export default function compose() {
  const fns = arguments;
  let n = fns.length;

  if (n < 2) {
    throw new Error('You must provide at least two functions to compose.');
  }

  while (--n >= 0) {
    if (typeof fns[n] !== 'function') {
      throw new TypeError('The compose function only accepts functions as arguments.');
    }
  }

  const size = fns.length - 1;
  const last = fns[size];

  function composed() {
    let i = size;
    let result = fns[i].apply(this, arguments);

    while (--i >= 0) result = fns[i].call(this, result);
    return result;
  }

  // So we can apply function transformations to composed functions,
  // we stash the arity here. For example, currying a composed function.
  composed[ARITY] = last[ARITY] !== undefined ? last[ARITY] : last.length;
  return composed;
}
