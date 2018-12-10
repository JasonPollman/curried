import isArray from '@foldr/is-array';

/**
 * Converts the given value to an array.
 *
 * If `x` is an array, it will be returned, otherwise it
 * will be "cast" as an array.
 *
 * @name castArray
 * @param {any} x The value to cast as an array.
 * @returns {function} The "cast" array.
 *
 * @arity 1
 * @category conversion
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { castArray } from '@foldr/all';
 *
 * castArray(0);  // => [0]
 * castArray({}); // => [{}]
 *
 * castArray([1, 2, 3]); // => [1, 2, 3]
 */
export default function castArray(x) {
  return isArray(x) ? x : [x];
}
