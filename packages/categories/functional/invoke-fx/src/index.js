import invoke from '@foldr/invoke';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [invoke](#invoke).**
 *
 * Invokes the function at `path` of `object`.
 *
 * @name invokeFx
 * @param {Array|string} path The path to query `object` using.
 * @param {Array=} args A list of arguments to call the function with.
 * @param {Object} object The object to walk and get the function to invoke from.
 * @returns {any} The return value from the invoked function. If the property
 * at path isn't a function `undefined` is returned.
 *
 * @arity 3
 * @autocurried
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { invokeFx } from '@foldr/all';
 *
 * const object = {
 *   foo: {
 *     bar() {
 *       return 'invoked!';
 *     },
 *     baz: [1, 2, 3, 4],
 *   },
 * };
 *
 * invoke('foo.bar', [])(object);           // => 'invoked!'
 * invoke('foo.baz.slice', [0, 3])(object); // => [1, 2, 3]
 */
export default fmake(invoke, {
  arity: 3,
  signature: [2, 0, 1],
});
