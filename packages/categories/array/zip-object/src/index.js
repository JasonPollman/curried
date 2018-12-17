/**
 * Creates an object using the arrays `keys` and `values` where `keys` and `values`
 * are parallel arrays representing the object's own properties and their values,
 * respectively.
 *
 * @name zipObject
 * @param {Array} keys The object's keys.
 * @param {Array} values The object's values.
 * @returns {Object} The object created from `keys` and `values`.
 *
 * @category array
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
 * zipObject(keys, values);
 * // => { foo: 1, bar: 2 }
 */
export default function zipObject(keys, values) {
  const ksize = keys ? keys.length : 0;
  if (!ksize) return {};

  const vals = values || [];
  const vsize = vals.length;

  const results = {};

  let i = -1;
  while (++i < ksize) results[keys[i]] = i < vsize ? vals[i] : undefined;
  return results;
}
