import some from '@foldr/some';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [some](#some).**
 *
 * Iterates over `collection`, calling `predicate` for each item in the collection. If `predicate`
 * returns truthy, iteration is broken and `true` is returned. Otherwise `false` is returned.
 *
 * Predicate functions are called with the signature `predicate(value)`, where:
 * - `value` is the current item in the collection being iterated over.
 *
 * @name someFx
 * @param {function} predicate The predicate iteratee function.
 * @param {Array|Object|String|Map|Set|Arguments} collection The collection to iterate over.
 * @returns {boolean} True if any item in the collection returns `true`
 * for `predicate`, false otherwise.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { someFx } from '@foldr/all';
 *
 * function isEven(x) {
 *   return x % 2 === 0;
 * }
 *
 * someFx(isEven, [1, 2, 3]);            // => true
 * someFx(isEven, [2, 4, 6]);            // => true
 * someFx(isEven)([1, 3, 5]);            // => false
 *
 * someFx(isEven, { a: 1, b: 2, c: 3 }); // => true
 * someFx(isEven)({ a: 2, b: 4, c: 6 }); // => true
 * someFx(isEven, { a: 1, b: 3, c: 5 }); // => false
 */
export default fmake(some, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});
