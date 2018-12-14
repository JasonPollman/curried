/* eslint-disable no-restricted-syntax, no-labels, no-continue, no-self-compare */

const ARRAY_LARGE_SIZE = 250;
const cache = new Set();

// Optimization to prevent prototype lookups on cache Set.
const cacheHas = cache.has.bind(cache);
const cacheAdd = cache.add.bind(cache);
const cacheClear = cache.clear.bind(cache);

/**
 * Given an array, `unique` returns a new array with only unique values.
 *
 * Note, this uses the [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
 * comparison so `NaN` will only occur once if it exists is `array` multiple times.
 *
 * @name unique
 * @param {Array} array The array to create an array of unique values using.
 * @returns {Array} An array of unique values.
 *
 * @arity 1
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { unique } from '@foldr/all';
 *
 * unique([1, 2, 1, 2, 1, 2]);    // => [1, 2]
 * unique(['foo', 'bar', 'foo']); // => ['foo', 'bar']
 *
 * const x = {};
 * const y = {};
 * unique([x, x, y]); [x, y];
 */
export default function unique(array) {
  if (!array) return [];

  const size = array.length;
  if (!size) return [];

  const first = array[0];
  const results = [first];

  if (size === 1) return results;

  let i = 1;
  let n = 1;
  let k = 1;

  let hasNaN = first !== first;
  let current;

  // Got "small" array, looping of is faster.
  // Here we iterate over the array and check if the current value
  // is in the result set, if not we add it to the result set.
  if (size < ARRAY_LARGE_SIZE) {
    outer: while (i < size) {
      current = array[i++];
      k = 1;

      if (current === current) {
        if (current === first) continue;
        while (k < n) if (results[k++] === current) continue outer;
      } else {
        if (hasNaN) continue;
        hasNaN = true;
      }

      results[n++] = current;
    }

    return results;
  }

  // Got "large" array, Set caching is faster.
  cacheAdd(first);

  while (i < size) {
    current = array[i++];
    if (current === first) continue;

    if (!cacheHas(current)) {
      cacheAdd(current);
      results[n++] = current;
    }
  }

  cacheClear();
  return results;
}
