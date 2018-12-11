const noop = () => {};

/**
 * Creates a function that returns the first input value to it, but also invokes `fn`
 * in a "fire and forget" manner.
 *
 * `fn` is invoked will the context of the wrapping `tap` function and all arguments
 * passed to it.
 *
 * This is useful for chaining promises without interrupting return values and for
 * performing composion with inert functions.
 *
 * @name tap
 * @param {function} fn The function to invoke.
 * @returns {function} A function that returns the first value input to it.
 *
 * @arity 1
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { tap, compose } from '@foldr/all';
 *
 * const sum = (x, y) => x + y;
 * const double = x => x * 2;
 *
 * const sumAndDouble = compose(
 *   double,
 *   tap(console.log),
 *   sum,
 * );
 *
 * sumAndDouble(3, 5);
 * // Prints "8"
 * // => 16
 */
export default function tap(fn) {
  // eslint-disable-next-line no-param-reassign
  if (typeof fn !== 'function') fn = noop;

  return function tappable(x) {
    fn.apply(this, arguments);
    return x;
  };
}
