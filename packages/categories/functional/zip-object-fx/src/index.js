import fmake from '@foldr/internal-fmake';
import zipObject from '@foldr/zip-object';

/**
 * **Functional, autocurried version of [zipObject](#zip-object).**
 *
 * Creates an object using the arrays `keys` and `values` where `keys` and `values`
 * are parallel arrays representing the object's own properties and their values,
 * respectively.
 *
 * @name zipObjectFx
 * @param {Array} values The object's values.
 * @param {Array} keys The object's keys.
 * @returns {Object} The object created from `keys` and `values`.
 *
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { zipObject } from '@foldr/all';
 *
 * const keys = ['foo', 'bar'];
 * const values = [1, 2];
 *
 * zipObject(values)(keys);
 * // => { foo: 1, bar: 2 }
 */
export default fmake(zipObject, {
  arity: 2,
  signature: [1, 0],
});
