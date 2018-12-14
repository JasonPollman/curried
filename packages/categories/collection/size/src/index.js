import keys from '@foldr/keys';
import isArrayLike from '@foldr/is-array-like';
import toStringTag from '@foldr/to-string-tag';

/**
 * Gets the *size* of an object.
 *
 * That is, the number of the object's own enumerable properties.
 *
 * @name size
 * @param {any} x The value to get the size of.
 * @returns {number} The size (or "length") of the object.
 *
 * @arity 1
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { size } from '@foldr/all';
 *
 * size([1, 2, 3]);       // => 3
 * size({ foo: 'bar' });  // => 1
 * size(null);            // => 0
 *
 * const set = new Set([1, 2, 3]);
 * size(set); // => 3
 */
export default function size(x) {
  if (!x) return 0;
  if (isArrayLike(x)) return x.length;

  const tag = toStringTag(x);
  return tag === '[object Map]' || tag === '[object Set]' ? x.size : keys(x).length;
}
