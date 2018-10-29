/**
 * No operation
 * @returns {void}
 */
function noop() {}

/**
 * Wraps a function and calls it. If fn is invoked more than once,
 * it returns the first value.
 * @param {function} fn - the function to "once"
 * @returns {*} - whatever is returned from fn
 * @category function
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 * const onced = f.once(num => num * 4); // function
 * onced(4)                              // 16
 * onced(6)                              // 16
 */
function once(fn) {
  if (typeof fn !== 'function') return noop;

  let amt = 0;
  let res;

  return function onced() {
    if (amt > 0) return res;

    amt++;
    res = fn.apply(this, arguments);

    return res;
  };
}

export default once;
