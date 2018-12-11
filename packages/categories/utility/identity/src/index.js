/**
 * The identity function.
 * Returns the value of the first argument provided to it.
 *
 * @param {any} x The value to passthrough.
 * @returns {any} The value of `x`.
 *
 * @arity 1
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { identity } from '@foldr/all';
 *
 * identity(5);         // => 5
 * identity([1, 2, 3]); // => [1, 2, 3]
 */
export default function identity(x) {
  return x;
}
