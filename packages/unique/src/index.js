/**
 * Exports the `unique` function.
 * @since 11/18/18
 * @file
 */

/* eslint-disable no-restricted-syntax, no-labels, prefer-destructuring, no-continue */

const LARGE_ARRAY_AMT = 150;

/**
 * Iterates over a large array and compares to cache rather than iterating over an array
 * @param {Array<*>} arr - the array to get unique values from
 * @returns {Array<*>} - unique array
 */
function uniqueWithCache(arr) {
  let len = -1;
  const cache = {};
  const clone = [];

  while (++len < arr.length) {
    const curr = arr[len];

    if (!cache[curr]) {
      clone[clone.length] = arr[len];
      cache[curr] = true;
    }
  }

  return clone;
}

/**
 * Pulls unique values from an array and returns a newly created array.
 *
 * @name unique
 * @param {Array<*>} arr - the array to pull unique values from
 * @returns {Array<*>} The array with unique values.
 *
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * unique([1, 2, 2, 3, 4]);            // => [1, 2, 3, 4]
 * unique();                           // => []
 * unique([1, 2, 2, 3, 3, 6, 9]);      // => [1, 2, 3, 6, 9]
 */
export default function unique(arr) {
  if (!arr) return [];

  let clone = [];

  if (arr.length < LARGE_ARRAY_AMT) {
    const length = arr.length;
    let len = -1;

    outer:
    while (++len < length) {
      let currIndex = clone.length;
      const curr = arr[len];

      while (currIndex) {
        if (clone[--currIndex] === curr) {
          continue outer;
        }
      }

      clone[clone.length] = curr;
    }
  } else {
    clone = uniqueWithCache(arr);
  }

  return clone;
}
