/**
 * Shallow clones an array.
 * @param {Array} arr The array to clone.
 * @returns {Array} The newly cloned array.
 */
export function cloneArray(arr) {
  const clone = [];
  let ind = arr.length;

  while (ind--) clone[ind] = arr[ind];
  return clone;
}

/**
 * Implements the "Fisher-Yates" shuffle algorithm.
 * @param {Array} arr The array to be shifted.
 * @returns {Array} The newly shifted array.
 */
export function implementShuffle(arr) {
  const dupe = cloneArray(arr);

  let top = arr.length;
  let rand = top;
  let curr = top;

  while (--top) {
    rand = (Math.random() * (top + 1)) | 0;
    curr = dupe[rand];
    dupe[rand] = dupe[top];
    dupe[top] = curr;
  }

  return dupe;
}

/**
 * Shuffles an array using the "Fisher-Yates" shuffle algorithm.
 *
 * @name shuffle
 * @param {Array} arr The array to be shuffled.
 * @returns {Array} A shuffled array.
 *
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { shuffle } from '@foldr/all';
 *
 * shuffle([1, 2, 3, 4]); // => [2, 4, 3, 1]
 * shuffle([1, 2, 3, 4]); // => [3, 4, 1, 2]
 */
export default function shuffle(arr) {
  const size = arr && arr.length;
  if (size > 1) return implementShuffle(arr);
  return size === 1 ? [arr[0]] : [];
}
