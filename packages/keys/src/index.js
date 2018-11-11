/**
 * Exports the `keys` function.
 * @since 11/10/18
 * @file
 */

import isArguments from '@foldr/is-arguments';

const getKeys = Object.keys;

// In Safari 9 the `length` property is enumerable for Arguments objects.
// This will detect that defect, and the `keysWithoutArgumentsLength`
// function will be used instead of `keys` below.
const hasEnumerableArgumentsLength = (function hasEnumerableArgumentsLength() {
  return Object.prototype.propertyIsEnumerable.call(arguments, 'length');
}());

/**
 * Base `keys` function.
 * @param {Object} x The value to get the keys of.
 * @returns {Array} The keys of `x`.
 */
function keys(x) {
  return x ? getKeys(x) : [];
}

/**
 * Removes the `length` property from a keys set.
 * @param {Array} x The keyset to remove the length property from.
 * @returns {Array} The keyset without the `length` property.
 */
function removeLengthFromKeys(x) {
  const index = x.indexOf('length');
  if (index > -1) x.splice(index, 1);
  return x;
}

/**
 * The `keys` function for browsers that have an enumerable
 * `length` property set on Arguments object.
 * @param {Object} x The value to get the keys of.
 * @returns {Array} The keys of `x`.
 */
export function keysWithoutArgumentsLength(x) {
  if (!x) return [];
  return isArguments(x) ? removeLengthFromKeys(keys(x)) : keys(x);
}

/**
 * Gets the keys of an object.
 *
 * That is, the object's own enumerable properties.
 * This is based on `Object.keys`, except that it guards against non-object input.
 * @param {any} x The value to get the keys of.
 * @returns {Array} An array of the given object's keys.
 * @category utility
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * keys([1, 2, 3]);       // => ['1', '2', '3']
 * keys({ foo: 'bar' });  // => ['foo']
 * keys(null);            // []
 */
export default !hasEnumerableArgumentsLength
  ? keys /* istanbul ignore next */
  : keysWithoutArgumentsLength;
