import fmake from '@foldr/internal-fmake';
import concat from '@foldr/concat';

/**
 * **Functional, autocurried version of [concat](#concat).**
 *
 * Concatenates all arguments into a single joined array.
 *
 * @param {any} first The first item to concatenate.
 * @param {any} second The second item to concatenate.
 * @returns {Array} The concatenated array.
 *
 * @arity 2
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { concatFx } from '@foldr/all';
 *
 * concatFx([1, 2, 3])([4, 5, 6]);   // => [1, 2, 3, 4, 5, 6]
 * concatFx(null)([4, 5, 6]);        // => [null, 4, 5, 6]
 * concatFx([4, 5, 6])(undefined);   // => [4, 5, 6, undefined]
 */
export default fmake(concat, {
  arity: 2,
});
