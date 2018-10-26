/**
 * Wraps a function and calls it. If fn is invoked more than once,
 * it returns the first value.
 * @param {function} fn - the function to once
 * @returns {*} - whatever is returned from fn
 */
function once(fn) {
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
