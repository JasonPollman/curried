import filter from '@foldr/filter';
import indexOf from '@foldr/index-of';
import isEqual from '@foldr/is-equal';
import toStringTag from '@foldr/to-string-tag';

const includesArray = (x, value, start) => indexOf(x, value, start) > -1;
const includesString = (x, value, start) => x.indexOf(value, start) > -1;
const includesObject = (x, value) => !!filter(x, v => isEqual(v, value)).length;

const MAPPING = {
  '[object Map]': includesObject,
  '[object Set]': includesObject,
  '[object Array]': includesArray,
  '[object Object]': includesObject,
  '[object Arguments]': includesArray,
  '[object String]': includesString,
};

/**
 * Determines if an object includes an item.
 *
 * @name includes
 * @param {Array} x The object to inspect.
 * @param {any} value The value to look for within `array`.
 * @param {number=} fromIndex For arrays and string, this will set the starting
 * position for searching the item.
 * @returns {Array} True if `array` contains `value`, false otherwise.
 *
 * @arity 2
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { includes } from '@foldr/all';
 *
 * includes([1, 2, 3, 4], 1); // => true
 * includes([1, 2, 3], 4);    // => false
 */
export default function includes(x, value, fromIndex) {
  return x && typeof x !== 'number'
    ? (MAPPING[toStringTag(x)] || includesObject)(x, value, fromIndex)
    : false;
}
