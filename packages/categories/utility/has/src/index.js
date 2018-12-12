const { hasOwnProperty } = Object.prototype;

/**
 * Checks if `value` contains own property `property`.
 *
 * This is a variant of Object.prototype.hasOwnProperty.
 *
 * @name has
 * @param {Object} value The value to determine membership of `property`.
 * @param {string} property The property to assert membership.
 * @returns {boolean} True if `thing` has it's own property `property`.
 *
 * @arity 2
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { has } from '@foldr/all';
 *
 * has({ foo: 1 }, 'foo');  // => true
 * has({ bar: 1 }, 'bar');  // => false
 */
export default function has(value, property) {
  return !!value && hasOwnProperty.call(value, property);
}
