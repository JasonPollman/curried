
const { hasOwnProperty } = Object.prototype;

/**
 * Checks that `thing` contains it's own property `property`.
 * A variant of Object.prototype.hasOwnProperty.
 * @param {any} thing The thing to determine membership of `property`.
 * @param {string} property The property to assert membership.
 * @returns {boolean} True if `thing` has it's own property `property`.
 * @category utility
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 * has({ foo: 1 }, 'foo');  // true
 * has({ bar: 1 }, 'bar');  // false
 */
export default function has(thing, property) {
  return !!thing && hasOwnProperty.call(thing, property);
}
