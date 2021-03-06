import SafeSymbolFor from '@foldr/internal-symbol';

/* eslint-disable require-jsdoc */

/**
 * Used to track the arity of piped functions.
 * @type {SafeSymbol}
 */
export const ARITY = SafeSymbolFor('source-arity');

/**
 * Generic type error
 * @type {string}
 */
const TYPE_ERROR = 'Expected arguments of pipe to be of type function';

/**
 * Takes in functions as parameters, and returns a function
 * that takes in the initial arguments to pass to the first function in the pipe chain.
 *
 * After the first function in the pipe chain completes, that value is then passed to the next
 * function in the pipe chain, and so on.
 *
 * @param {Array<function>} arguments - functions to pipe data through
 * @returns {*} - whatever is returned from the pipe chain.
 *
 * @arity 1
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { pipe } from '@foldr/all';
 *
 * const add = (a, b) => a + b;
 * const mult = a => a * a;
 *
 * const piped = pipe(add, mult)
 * piped(2, 3) // => 25;
 */
function pipe() {
  const funcs = arguments;

  let argLen = funcs.length;
  if (!argLen) throw new Error(TYPE_ERROR);

  while (--argLen) {
    if (typeof arguments[argLen] !== 'function') {
      throw new TypeError(TYPE_ERROR);
    }
  }

  const size = funcs.length;
  const first = funcs[0];

  function receiver() {
    let value = first.apply(this, arguments);
    let len = 0;

    while (++len < size) value = funcs[len].call(this, value);
    return value;
  }

  // So we can apply function transformations to piped functions
  // we stash the arity here. For example, currying a composed function.
  receiver[ARITY] = first[ARITY] !== undefined ? first[ARITY] : first.length;
  return receiver;
}

export default pipe;
