/**
 * Exports the `has` function.
 * @since 10/23/18
 * @file
 */

import FunctionalFactory from '@foldr/internal-fmake';

const { hasOwnProperty } = Object.prototype;

/**
 * Checks that `thing` contains it's own property `property`.
 * A variant of Object.prototype.hasOwnProperty.
 *
 * @name has
 * @param {Object} thing The thing to determine membership of `property`.
 * @param {string} property The property to assert membership.
 * @returns {boolean} True if `thing` has it's own property `property`.
 *
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * has({ foo: 1 }, 'foo');  // => true
 * has({ bar: 1 }, 'bar');  // => false
 */
export default function has(thing, property) {
  return !!thing && hasOwnProperty.call(thing, property);
}

/**
 * Functional, autocurried version of [has](#has).
 *
 * Checks that `thing` contains it's own property `property`.
 * A variant of Object.prototype.hasOwnProperty.
 *
 * @name has.f
 * @param {string} property The property to assert membership.
 * @param {Object} thing The thing to determine membership of `property`.
 * @returns {boolean} True if `thing` has it's own property `property`.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * has.f('foo')({ foo: 1 });  // => true
 * has.f('bar', { bar: 1 });  // => false
 */
export const f = FunctionalFactory(has, {
  arity: 2,
  signature: [1, 0],
});
