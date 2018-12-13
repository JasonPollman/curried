import toInteger from '@foldr/to-integer';

const MAX_ARRAY_SIZE = (2 ** 32) - 1;

/**
 * Invokes the given `iteratee` function `n` times and returns an array containing the
 * results from each iteration.
 *
 * The iteratee function is called with the current iteration index.
 *
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {function} iteratee The function to invoke `n` times.
 * @returns {Array} The results from each invocation of `iteratee`.
 *
 * @arity 2
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { invokeTimes } from '@foldr/all';
 *
 * const results = invokeTimes(3, i => i * 2);
 * // => [0, 2, 4]
 */
export default function invokeTimes(n, iteratee) {
  if (typeof iteratee !== 'function') return [];

  n = toInteger(n); // eslint-disable-line no-param-reassign
  if (n < 1 || n > MAX_ARRAY_SIZE) return [];

  let i = 0;
  const results = new Array(n);

  while (i < n) results[i] = iteratee(i++);
  return results;
}
