/**
 * Exports the `values` function.
 * @since 11/14/18
 * @file
 */

import map from '@foldr/map';
import keys from '@foldr/keys';
import isMap from '@foldr/is-map';
import isSet from '@foldr/is-set';

/**
 * Iteratee for getting the values for Map and Set objects.
 * @param {any} val The val at the current iteration.
 * @returns {string|number} The current iteration value.
 */
const getValue = val => val;

/**
 * Gets the enumerable values of an object.
 * That is, the object's own enumerable properties.
 *
 * If an array is passed, a shallow copy of the array is made.
 *
 * Note, the order of the keys is not guaranteed.
 *
 * @name values
 * @param {any} x The thing to get the values of.
 * @returns {Array} An array of the given object's values.
 *
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * values([1, 2, 3]);                     // => ['1', '2', '3']
 * values({ foo: 'bar' });                // => ['foo']
 * values(null);                          // => []
 * values(new Map([['a', 1], ['b', 2]])); // => [1, 2]
 */
export default function values(x) {
  if (!x) return [];
  if (isMap(x) || isSet(x)) return map(x, getValue);

  const vals = [];
  const props = keys(x);
  const size = props.length;

  let i = 0;
  while (i < size) vals[i] = x[props[i++]];
  return vals;
}
