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

  return function debounced() {
    const args = arguments;

    setTimeout(() => {
      fn.apply(this, args);
    }, time || 0);
  };
}

export default debounce;
