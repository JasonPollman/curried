/**
 * No operation
 * @returns {void}
 */
function noop() {}

/**
 * Creates a function that wraps and limits the invocation of `fn` to one call.
 * If fn is invoked more than once, it returns the result from the first invocation.
 * @param {function} fn The function to "once"
 * @returns {any} Whatever is returned from the first call to `fn`.
 * @category function
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * const onced = once(num => num * 4);   // => function
 * onced(4)                              // => 16
 * onced(6)                              // => 16
 */
export default function once(fn) {
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
