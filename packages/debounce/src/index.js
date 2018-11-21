/**
 * No-operation
 * @returns {void}
 */
function noop() {}

/**
 * Debounces a function by a given time
 * @param {function} fn - the debounced function
 * @param {number} time - the debounce time
 * @returns {*} - value returned from `fn`
 */
function debounce(fn, time) {
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
    }, time || 0);

    return timerReference;
  };
}

export default debounce;
