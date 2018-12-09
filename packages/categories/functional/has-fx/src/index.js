import has from '@foldr/has';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [has](#has).**
 *
 * Checks that `thing` contains it's own property `property`.
 * A variant of Object.prototype.hasOwnProperty.
 *
 * @name hasFx
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
 * import { hasFx } from '@foldr/all';
 *
 * hasFx('foo')({ foo: 1 });  // => true
 * hasFx('bar', { bar: 1 });  // => false
 */
export default fmake(has, {
  arity: 2,
  signature: [1, 0],
});
