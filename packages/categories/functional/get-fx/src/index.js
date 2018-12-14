import get from '@foldr/get';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [get](#get).**
 *
 * Walks the given object or string and finds the property
 * defined by `path`, which is a "path string" in the format
 * `foo.bar.baz`, `foo[1].bar`, `foo[bar][baz]`.
 *
 * @name getFx
 * @param {string} path The path of the property to get.
 * @param {Object|Array|String} object The object to walk.
 * @returns {any} The value of off `object` at the given path.
 *
 * @arity 2
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @export
 * @example
 *
 * import { getFx } from '@foldr/all';
 *
 * const thing = {
 *   foo: [
 *     { bar: 1 },
 *     { bar: 2 },
 *     { bar: 3 }
 *   ],
 * };
 *
 * getFx('foo', thing);             // => [{ bar: 1 }, { bar: 2 }, { bar: 3 }]
 * getFx('foo[0]')(thing);          // => { bar: 1 }
 * getFx('foo[0].bar', thing);      // => 1
 * getFx('foo[0].bar.baz')(thing);  // => undefined
 */
export default fmake(get, {
  arity: 2,
  signature: [1, 0],
});
