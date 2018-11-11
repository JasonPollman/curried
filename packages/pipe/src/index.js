/**
 * Exports the `pipe` function.
 * @since 11/11/18
 * @file
 */

/**
 * Takes in functions as parameters, and returns a function
 * that takes in the initial arguements to pass to the first function in the pipe chain.
 *
 * After the first function in the pipe chain completes, that value is then passed to the next
 * function in the pipe chain.
 * @param {Array<function>} arguments - functions to pass
 * @returns {*} - whatever is returned from the pipe chain
 * @example
 * const add = (a, b) => a + b;
 * const mult = a => a * a;
 *
 * const piped = pipe(add, mult)
 * piped(2, 3) // 25;
 *
 */
function pipe() {
  const funcs = arguments;
  let argLen = funcs.length;

  while (--argLen) {
    if (typeof arguments[argLen] !== 'function') {
      throw new TypeError('Expected arguments of pipe to be of type function');
    }
  }

  return function receiver() {
    let value = funcs[0].apply(this, arguments);
    let len = 0;

    while (++len < funcs.length) {
      const func = funcs[len];

      value = func.call(this, value);
    }

    return value;
  };
}

export default pipe;
