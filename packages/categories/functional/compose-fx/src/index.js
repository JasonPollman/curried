import fmake from '@foldr/internal-fmake';
import compose from '@foldr/compose';

/**
 * **Functional, autocurried version of [compose](#compose).**
 *
 * Creates a new function that returns the result of invoking
 * the two given functions in successive order from right to left
 * passing the results of the previous invocation to the next
 * function.
 *
 * Each function will be invoked with the `this` binding available
 * to the newly created function.
 *
 * This function is very similar to `pipe`, except that the order
 * of function execution flows from right to left (bottom to top).
 *
 * Remember `f(g(x))` from high school? This is it.
 *
 * @name composeFx
 * @param {function} g The first (wrapper) function to compose.
 * @param {function} f The second function to compose.
 * @returns {function} The composite function.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { composeFx } from '@foldr/all';
 *
 * function sum(a, b) {
 *   return a + b;
 * }
 *
 * function square(x) {
 *   return x * x;
 * }
 *
 * const sumSquared = composeFx(square)(sum);
 *
 * sumSquared(1, 2); // => 9
 * sumSquared(2, 3); // => 25
 */
export default fmake(compose, { arity: 2 });
