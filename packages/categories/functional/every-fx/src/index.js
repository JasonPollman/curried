import fmake from '@foldr/internal-fmake';
import every from '@foldr/every';

/**
 * **Functional, autocurried version of [every](#every).**
 *
 * Iterates over `collection`, calling `predicate` for each item in the collection. If `predicate`
 * returns `falsy`, iteration is broken and `false` is returned. Otherwise `true` is returned.
 *
 * Predicate functions are called with the signature `predicate(value)`, where:
 * - `value` is the current item in the collection being iterated over.
 *
 * @name everyFx
 * @param {function} predicate The predicate iteratee function.
 * @param {Array|Object|String|Set|Map|Arguments} collection The collection to iterate over.
 * @returns {boolean} True if all items in the collection return true
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
 * import { everyFx } from '@foldr/all';
 *
 * function isEven(x) {
 *   return x % 2 === 0;
 * }
 *
 * everyFx(isEven, [1, 2, 3]);            // => false
 * everyFx(isEven)([2, 4, 6]);            // => true
 *
 * everyFx(isEven, { a: 1, b: 2, c: 3 }); // => false
 * everyFx(isEven)({ a: 2, b: 4, c: 6 }); // => true
 */
export default fmake(every, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});
