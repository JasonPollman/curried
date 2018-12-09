import attempt from '@foldr/attempt';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [attempt](#attempt).**
 *
 * Invokes and returns the return value from `fn`. If the call to `fn` throws,
 * the caught error is returned.
 *
 * @name attemptFx
 * @param {Array|null|undefined} args An array of arguments to pass to `fn`.
 * @param {function} fn The function to attempt to invoke.
 * @returns {any} The return value from `fn` or the caught error.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { attemptFx } from '@foldr/all';
 *
 * function assertIsPositive() {
 *    if (x < 0) throw new Error('x must be a positive number');
 *    return x;
 * }
 *
 * // Call was okay.
 * const attemptFx([1])(assertIsPositive); // => 1;
 *
 * // Call threw.
 * const attemptFx([-1], assertIsPositive); => Error('x must be a positive number');
 */
export default fmake(attempt, {
  arity: 2,
  signature: [1, 0],
  optimized: false,
});
