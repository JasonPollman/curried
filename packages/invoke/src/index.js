/**
 * Exports the `invoke` function.
 * @since 11/14/18
 * @file
 */

import toPath from '@foldr/to-path';
import FunctionalFactory from '@foldr/internal-f-factory';

/**
 * Invokes the function at `path` of `object`.
 * `invoke` will use the `this` binding of the object the function belongs to.
 *
 * @name invoke
 * @param {Object} object The object to walk and get the function to invoke from.
 * @param {Array|string} path The path to query `object` using.
 * @param {Array=} args A list of arguments to call the function with.
 * @returns {any} The return value from the invoked function. If the property
 * at path isn't a function `undefined` is returned.
 *
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
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
 * invoke(object, 'foo.bar');               // => 'invoked!'
 * invoke(object, 'foo.baz.slice', [0, 3]); // => [1, 2, 3]
 */
export default function invoke(object, path, args) {
  if (!object) return undefined;

  // Convert the path to an array of path tokens.
  const props = toPath(path);
  const size = props.length;

  if (!size) return undefined;

  let i = 0;
  let fn = object;
  let context = object;

  // Perform function lookup by walking the object
  while (i < size && fn != null) {
    context = fn;
    fn = fn[props[i++]];
  }

  if (typeof fn !== 'function') return undefined;
  return fn.apply(context, args && typeof args === 'object' ? args : undefined);
}

/**
 * Functional, autocurried version of [invoke](#invoke).
 *
 * Invokes the function at `path` of `object`.
 *
 * @name invoke.f
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
export const f = FunctionalFactory(invoke, {
  arity: 3,
  signature: [2, 0, 1],
});
