import map from '@foldr/map';
import isMap from '@foldr/is-map';
import isSet from '@foldr/is-set';
import isArray from '@foldr/is-array';

const keysOf = Object.keys;

/**
 * Iteratee for getting the keys for Map and Set objects.
 * @param {any} val The val at the current iteration.
 * @param {string|number} key The key at the current iteration.
 * @returns {string|number} The current iteration key.
 */
const getKey = (val, key) => key;

// In Safari 9 the `length` property is enumerable for Arguments objects.
// This will detect that defect, and the `keysWithoutArgumentsLength`
// function will be used instead of `keys` below.
const hasEnumerableArgumentsLength = (function hasEnumerableArgumentsLength() {
  return Object.prototype.propertyIsEnumerable.call(arguments, 'length');
}());

/**
 * Removes the `length` property from a keys set.
 * @param {Array} x The keyset to remove the length property from.
 * @returns {Array} The keyset without the `length` property.
 */
export function removeLengthFromKeys(x) {
  const index = x.indexOf('length');
  if (index > -1) x.splice(index, 1);
  return x;
}

/**
 * Gets the keys of an object.
 *
 * That is, the object's own enumerable properties.
 * This is based on `Object.keys`, except that it guards against non-object input.
 *
 * **Note, the order of the returned keys is not guaranteed to be consistent across platforms.**
 *
 * @name keys
 * @param {any} x The value to get the keys of.
 * @returns {Array} An array of the given object's keys.
 *
 * @arity 1
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { keys } from '@foldr/all';
 *
 * keys([1, 2, 3]);                     // => ['1', '2', '3']
 * keys({ foo: 'bar' });                // => ['foo']
 * keys(null);                          // => []
 * keys(new Map([['a', 1], ['b', 2]])); // => ['a', 'b']
 */
export default function keys(x) {
  if (!x) return [];

  if (isArray(x)) return keysOf(x);
  if (isMap(x) || isSet(x)) return map(x, getKey);

  return hasEnumerableArgumentsLength
    /* istanbul ignore next */
    ? removeLengthFromKeys(keysOf(x))
    : keysOf(x);
}
