import fmake from '@foldr/internal-fmake';
import invokeTimes from '@foldr/invoke-times';

/**
 * **Functional, autocurried version of [invokeTimes](#invoke-times).**
 *
 * Invokes the given `iteratee` function `n` times and returns an array containing the
 * results from each iteration.
 *
 * The iteratee function is called with the current iteration index.
 *
 * @param {function} iteratee The function to invoke `n` times.
 * @param {number} n The number of times to invoke `iteratee`.
 * @returns {Array} The results from each invocation of `iteratee`.
 *
 * @arity 2
 * @autocurried
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { invokeTimesFx } from '@foldr/all';
 *
 * const results = invokeTimesFx(i => i * 2)(3);
 * // => [0, 2, 4]
 */
export default fmake(invokeTimes, {
  arity: 2,
  signature: [1, 0],
});
