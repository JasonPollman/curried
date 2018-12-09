import isObject from '@foldr/is-object';

/**
 * *Attempts* to invoke `fn`.
 *
 * Invokes and returns the return value from `fn`. If the call to `fn` throws,
 * either the `fallback` value (if provided) or the caught error is returned.
 *
 * @name attempt
 * @param {function} fn The function to attempt to invoke.
 * @param {Array|Arguments=} args An array of arguments to pass to `fn`.
 * @param {any=} fallback The fallback value to use if `fn` throws.
 * @returns {any} The return value from `fn`, `fallback`, or the caught error.
 *
 * @arity 3
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { attempt } from '@foldr/all';
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
 * const attempt(assertIsPositive, [-1], 0); => 0;
 *
 */
export default function attempt(fn, args, fallback) {
  try {
    return fn.apply(undefined, isObject(args) ? args : undefined);
  } catch (e) {
    return arguments.length > 2 ? fallback : e;
  }
}
