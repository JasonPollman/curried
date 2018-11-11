/**
 * Exports the `size` function.
 * @since 11/10/18
 * @file
 */

import keys from '@foldr/keys';
import isArrayLike from '@foldr/is-array-like';
import toStringTag from '@foldr/to-string-tag';

/**
 * Gets the size of an object.
 * That is, the number of the object's own enumerable properties.
 * @param {any} x The value to get the size of.
 * @returns {number} The size (or length) of the object.
 * @category utility
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * size([1, 2, 3]);       // => 3
 * size({ foo: 'bar' });  // => 1
 * size(null);            // => 0
 */
export default function size(x) {
  if (!x) return 0;
  if (isArrayLike(x)) return x.length;

  const tag = toStringTag(x);
  return tag === '[object Map]' || tag === '[object Set]' ? x.size : keys(x).length;
}
