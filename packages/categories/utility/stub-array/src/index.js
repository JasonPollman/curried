/**
 * A function that always returns a new `Array` instance.
 *
 * @name stubArray
 * @returns {Object} A new, empty Array.
 *
 * @arity 0
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { stubArray } from '@foldr/all';
 *
 * stubArray(); // => []
 */
export default function stubArray() {
  return [];
}
