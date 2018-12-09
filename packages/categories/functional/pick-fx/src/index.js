import pick from '@foldr/pick';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [pick](#pick).**
 *
 * Creates a new object by "picking" (or selecting) the given properties.
 *
 * Iteratee functions are called with the signature `iteratee(value)`, where:
 * - `value` is the current item in the collection being iterated over.
 *
 * @name pickFx
 * @param {Array|function} iteratee The iteratee function to use while picking. If given
 * an array, all of the own properties of `collection` that exist in the array will be
 * picked, all other values will be ignored.
 * @param {Object} collection The collection to pick from.
 * @returns {Object} A new object with only the picked values.
 *
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { pickFx } from '@foldr/all';
 *
 * const data = {
 *   foo: 'foo',
 *   bar: 'bar',
 *   baz: 'baz',
 * };
 *
 * // Using array shorthand
 * pickFx(['foo', 'baz'], data); // => { foo: 'foo', baz: 'baz' }
 *
 * // Using function
 * pickFx((value, key) => value[0] === 'b')(data); // => { bar: 'bar', baz: 'baz' }
 */
export default fmake(pick, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});
