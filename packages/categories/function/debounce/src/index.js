const noop = () => {};

/**
 * [Debounces](https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44)
 * a function by waiting `delay` ms before executing it and ignoring all invocations before
 * `delay` has expired.
 *
 * *Note, this uses `setTimeout`.*
 *
 * @name debounce
 * @param {function} fn The function to debounce.
 * @param {number} delay The amount of delay that will pass before `fn` is
 * executed and all subsequent invocations of `fn` are ignored.
 * @returns {integer|Timer} The timer reference returned from `setTimeout`.
 *
 * @arity 2
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { debounce } from '@foldr/all';
 *
 * const log = () => console.log('Invoked!');
 * const debounced = debounce(log, 1000);
 *
 * for (let i = 0; i < 1000; i++) {
 *   log();
 * }
 *
 * // 1 second passes, and `log` is called only once.
 */
export default function debounce(fn, delay) {
  if (typeof fn !== 'function') return noop;

  let isWaiting = false;
  let timerReference;

  return function debounced() {
    if (isWaiting) return timerReference;

    const args = arguments;
    isWaiting = true;

    timerReference = setTimeout(() => {
      isWaiting = false;
      fn.apply(this, args);
    }, delay || 0);

    return timerReference;
  };
}
