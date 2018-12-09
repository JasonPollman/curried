import omit from '@foldr/omit';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [omit](#omit).**
 *
 * Creates a new object by "omitting" the given properties from `collection`.
 *
 * Iteratee functions are called with the signature `iteratee(value)`, where:
 * - `value` is the current item in the collection being iterated over.
 *
 * @name omitFx
 * @param {Array|function} iteratee The iteratee function to use while omitting. If given
 * an array, all of the own properties of `collection` that exist in the array will be
 * omitted, all other values will be included in the results object.
 * @param {Object} collection The collection to omit properties from.
 * @returns {Object} A new object with all but the omitted values.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { omitFx } from '@foldr/all';
 *
 * const data = {
 *   foo: 'foo',
 *   bar: 'bar',
 *   baz: 'baz',
 * };
 *
 * // Using array shorthand
 * omitFx(['foo', 'baz'], omit); // => { bar: 'bar' }
 *
 * // Using a function
 * omitFx((value, key) => value[0] === 'b')(data); // => { foo: 'foo }
 */
export default fmake(omit, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});
