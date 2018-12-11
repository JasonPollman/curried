/**
 * Creates a promise that resolves after the given number of milliseconds.
 *
 * @name delay
 * @param {number} milliseconds The amount of time to delay.
 * @returns {Promise} A promise that will resolve in `milliseconds` milliseconds.
 *
 * @arity 1
 * @category async
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { delay } from '@foldr/all';
 *
 * (async function () {
 *   await delay(3000);
 *   console.log('Three seconds just passed!');
 * }());
 *
 */
export default function delay(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}
