/**
 * A function that always returns a new `Object` instance.
 *
 * @name stubObject
 * @returns {Object} A new, empty object.
 *
 * @arity 0
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { stubObject } from '@foldr/all';
 *
 * stubObject(); // => {}
 */
export default function stubObject() {
  return {};
}
