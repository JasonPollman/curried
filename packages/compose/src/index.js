/**
 * Creates a function that returns the result of invoking
 * the provided functions in successive order from right to left.
 * Each function will be invoked with the `this` binding available
 * to the newly created function.
 *
 * This function is very similar to `pipe`, except that the order
 * of function execution flows from right to left (bottom to top).
 *
 * @param {...function} functions The functions to compose.
 * @returns {function} The composite function.
 * @category function
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
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
  let n = arguments.length;

  if (n < 2) {
    throw new Error('You must provide at least two functions to compose.');
  }

  while (--n >= 0) {
    if (typeof arguments[n] !== 'function') {
      throw new TypeError('The compose function only accepts functions as arguments.');
    }
  }

  const fns = arguments;
  const size = fns.length - 1;

  return function composed() {
    let i = size;
    let result = fns[i].apply(this, arguments);

    while (--i >= 0) result = fns[i].call(this, result);
    return result;
  };
}
