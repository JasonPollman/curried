/**
 * Returns the value at the last index of an array.
 *
 * @name last
 * @param {Array} array The array that will provide the last index.
 * @returns {Array} The value at the last index of an array.
 *
 * @arity 1
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { last } from '@foldr/all';
 *
 * last([1, 2, 3, 4]); // => 4
 * last([]);           // => undefined
 */
export default function last(array) {
  return array && array.length ? array[array.length - 1] : undefined;
}
