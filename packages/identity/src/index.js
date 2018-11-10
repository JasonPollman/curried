/**
 * The identity function.
 * Returns the value of the first argument provided to it.
 * @param {any} x The value to passthrough.
 * @returns {any} The value of `x`.
 * @category function
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * identity(5);         // => 5
 * identity([1, 2, 3]); // => [1, 2, 3]
 */
export default function identity(x) {
  return x;
}
