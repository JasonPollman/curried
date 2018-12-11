import map from '@foldr/map';

const identity = x => x;

/**
 * Converts `x` to an array.
 *
 * *If `x` is already an array, a shallow copy of it is returned.*
 *
 * @name toArray
 * @param {Array|Object|Map|Set|Arguments|string} x The value to convert to an array.
 * @returns {Array} The array equivalent of `x`.
 *
 * @arity 1
 * @category conversion
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { toArray } from '@foldr/all';
 *
 * toArray({ foo: 'bar', baz: 'quxx }); // => ['bar', 'quxx']
 * toArray(new Set([1, 2, 3]));         // => [1, 2, 3]
 * toArray('foobar');                   // => ['f', 'o', 'o', 'b', 'a', 'r']
 */
export default function toArray(x) {
  return map(x, identity);
}
