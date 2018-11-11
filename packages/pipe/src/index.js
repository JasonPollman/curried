/**
 * Exports the `pipe` function.
 * @since 11/11/18
 * @file
 */

/**
 * Generic type error
 */
const TYPE_ERROR = 'Expected arguments of pipe to be of type function';

/**
 * Takes in functions as parameters, and returns a function
 * that takes in the initial arguments to pass to the first function in the pipe chain.
 *
 * After the first function in the pipe chain completes, that value is then passed to the next
 * function in the pipe chain, and so on.
 * @param {Array<function>} arguments - functions to pipe data through
 * @returns {*} - whatever is returned from the pipe chain
 * @example
 * const add = (a, b) => a + b;
 * const mult = a => a * a;
 *
 * const piped = pipe(add, mult)
 * piped(2, 3) // => 25;
 *
 */
function pipe() {
  const funcs = arguments;
  let argLen = funcs.length;

  if (!argLen) {
    throw new Error(TYPE_ERROR);
  }

  while (--argLen) {
    if (typeof arguments[argLen] !== 'function') {
      throw new TypeError(TYPE_ERROR);
    }
  }

  return function receiver() {
    let value = funcs[0].apply(this, arguments);
    let len = 0;

    while (++len < argLen) {
      value = funcs[len].call(this, value);
    }

    return value;
  };
}

export default pipe;
