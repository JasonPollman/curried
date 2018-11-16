/**
 * Exports the compact function.
 * @since 10/18/18
 * @file
 */

import FunctionalFactory from '@foldr/internal-fn-factory';

/**
 * Function composition.
 *
 * Creates a new function that returns the result of invoking
 * the given functions in successive order from right to left
 * passing the results of the previous invocation to the next
 * function.
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
 * @category function
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
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

  return function composed() {
    let i = size;
    let result = fns[i].apply(this, arguments);

    while (--i >= 0) result = fns[i].call(this, result);
    return result;
  };
}

/**
 * Functional, autocurried version of [compose](#compose).
 *
 * Creates a new function that returns the result of invoking
 * the given functions in successive order from right to left
 * passing the results of the previous invocation to the next
 * function.
 *
 * Each function will be invoked with the `this` binding available
 * to the newly created function.
 *
 * This function is very similar to `pipe`, except that the order
 * of function execution flows from right to left (bottom to top).
 *
 * @name compose.fn
 * @param {...function} functions The functions to compose.
 * @returns {function} The composite function.
 *
 * @arity 2
 * @autocurried
 * @category function
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * function add(a, b) {
 *   return a + b;
 * }
 *
 * function square(x) {
 *   return x * x;
 * }
 *
 * const sumSquared = compose.fn(square)(add);
 * sumSquared(1, 2); // => 9
 * sumSquared(2, 3); // => 25
 */
export const fn = FunctionalFactory(compose, { arity: 2 });
