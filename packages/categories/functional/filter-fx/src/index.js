import fmake from '@foldr/internal-fmake';
import filter from '@foldr/filter';

/**
 * **Functional, autocurried version of [filter](#filter).**
 *
 * This function is similar to `Array#filter` except that is works for collections
 * and guards against bad input.
 *
 * Iterates over `collection`, calling `filterFn` for each item in the collection. If
 * `filterFn` returns `true`, the value will be kept in the returned array, otherwise
 * the value is omitted from the returned array.
 *
 * Filterer functions are called with the signature `filterFn(value)`, where:
 * - `value` is the current item in the collection being iterated over.
 *
 * @name filterFx
 * @param {function} filterFn The iteratee function to use to filter the collection.
 * @param {Array|Object|String|Map|Set|Arguments} collection The collection to iterate over.
 * @returns {Array} The results of filtering `collection` with `filterFn`.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { filterFx } from '@foldr/all';
 *
 * function isEven(x) {
 *   return x % 2 === 0;
 * }
 *
 * filterFx(isEven, [1, 2, 3]);            // => [2]
 * filterFx(isEven, { a: 1, b: 2, c: 3 }); // => [2]
 */
export default fmake(filter, {
  arity: 2,
  capped: true,
  context: 'config',
  signature: [1, 0],
});
