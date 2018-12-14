/**
 * Base implementation of `indexOf` for non-NaN values.
 * @param {Array} array The array use when finding the index of the given value.
 * @param {any} value The value to find the index of.
 * @param {number=} start The index at which to "start" finding `value` at. Defaults to `0`.
 * @returns {number} The index of `value` in `array`, or `-1` if `value` doesn't
 * exist in array.
 */
function indexOfStandard(array, value, start) {
  const size = array.length;
  let i = start;

  while (i < size) {
    if (value === array[i]) return i;
    i++;
  }

  return -1;
}

/**
 * Base implementation of `indexOf` for NaN values.
 * @param {Array} array The array use when finding the index of the given value.
 * @param {number=} start The index at which to "start" finding `value` at. Defaults to `0`.
 * @returns {number} The index of `value` in `array`, or `-1` if `value` doesn't
 * exist in array.
 */
function indexOfNaN(array, start) {
  const size = array.length;

  let i = start;
  let current;

  while (i < size) {
    current = array[i];
    if (current !== current) return i; // eslint-disable-line no-self-compare
    i++;
  }

  return -1;
}

/**
 * This method is like [Array#indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
 * except that it uses [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) comparsion so it works for `NaN` values.
 *
 * Finds the index of `value` in `array`.
 *
 * @name indexOf
 * @param {Array} array The array use when finding the index of the given value.
 * @param {any} value The value to find the index of.
 * @param {number=} fromIndex The index at which to start looking for `value` at. Defaults to `0`.
 * @returns {number} The index of `value` in `array`, or `-1` if `value` doesn't
 * exist in array.
 *
 * @arity 2
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { indexOf } from '@foldr/index-of';
 *
 * indexOf([1, 2, 3], 2);        // => 1
 * indexOf([1, 2, 3], 10);       // => -1
 * indexOf([1, NaN, 2, 3], NaN); // => 1
 */
export default function indexOf(array, value, fromIndex) {
  if (!array || !array.length) return -1;
  const start = +fromIndex || 0;

  if (array[0] === value && start === 0) return 0;

  // eslint-disable-next-line no-self-compare
  return value !== value ? indexOfNaN(array, start) : indexOfStandard(array, value, start);
}
