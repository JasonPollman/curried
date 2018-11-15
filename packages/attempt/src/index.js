/**
 * Exports the `attempt` function.
 * @since 11/14/18
 * @file
 */

import isObject from '@foldr/is-object';

/* eslint-disable prefer-spread */

/**
 * Attempts to invoke `fn`. If `fn` doesn't throw the return value is returned.
 * If `fn` throws, either the fallback value (if given) or the caught error
 * is returned.
 *
 * @param {function} fn The function to attempt to invoke.
 * @param {Array=} args An array of arguments to pass to `fn`.
 * @param {any=} fallback The fallback value to use if `fn` throws.
 * @returns {any} The return value from `fn`, `fallback`, or the caught error.
 * @category function
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * function assertIsPositive() {
 *    if (x < 0) throw new Error('x must be a positive number');
 *    return x;
 * }
 *
 * // Call was okay.
 * const attempt(assertIsPositive, [1]); // => 1;
 *
 * // Call threw, but no fallback value was given.
 * const attempt(assertIsPositive, [-1]); => Error('x must be a positive number');
 *
 * // Call threw, fallback was returned.
 * const attempt(assertIsPositive, [-1], 'fallback'); => 'fallback';
 *
 * // Call threw, don't care about fallback, but don't want an error either.
 * const attempt(assertIsPositive, [-1], undefined); => 0;
 */
export default function attempt(fn, args, fallback) {
  try {
    return fn.apply(undefined, isObject(args) ? args : undefined);
  } catch (e) {
    return arguments.length > 2 ? fallback : e;
  }
}
