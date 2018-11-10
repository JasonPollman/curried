/**
 * Exports the `rearg` function.
 * @since 10/30/18
 * @file
 */

import getInternalSymbol from '@foldr/internal-symbol';

/**
 * Used to determine if a function is rearged.
 * @type {SafeSymbol}
 */
export const IS_REARGED = getInternalSymbol('is-rearged-fn');

/**
 * Used to stash the source function on the rearged function.
 * @type {SafeSymbol}
 */
export const SOURCE = getInternalSymbol('source-fn');

/**
 * Reargs `fn` using `signature`.
 * @param {function} fn The function to rearg.
 * @param {Array} reargs The reargument signature set.
 * @returns {function} The rearged function.
 */
function rewrap(fn, reargs) {
  const size = reargs.length;

  return function rearged() {
    const input = arguments;
    const output = [];

    let i = 0;
    let n = 0;

    // Push all "re-arguments" into the new arguments set.
    while (i < size) output[n++] = input[reargs[i++]];

    i = input.length;

    // Push any remaining arguments onto the end of the new arguments set.
    while (n < i) output[n] = input[n++];

    return fn.apply(this, output);
  };
}

/**
 * Creates a function that "rearranges" the arguments signature of `fn`.
 *
 * This will return a wrapper function that, when called, will rearrange the given
 * arguments using the provided `signature` array and pass the resulting arguments
 * signature to `fn`.
 * @param {function} fn The function to rearg.
 * @param {Array<number>} signature An array who's values indicate the actual arguments
 * to use for that index of the array. For example, `[1, 0, 2]` would convert the arguments
 * signature `fn(x, y, z)` to `fn(y, x, z)`.
 * @returns {function} The rearged function.
 * @category function
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * function foo(x, y, z) {
 *   return x + y + z;
 * }
 *
 * const rearged = rearg(foo, [1, 0, 2]);
 *
 * foo('a', 'b', 'c'); // => 'abc';
 * rearged('a', 'b', 'c'); // => 'bac';
 *
 * const rearged2 = rearg(foo, [0, 0, 0]);
 *
 * foo('a', 'b', 'c'); // => 'abc';
 * rearged('a', 'b', 'c'); // => 'aaa';
 */
export default function rearg(fn, signature) {
  if (typeof fn !== 'function') {
    throw new TypeError('The first argument given to `rearg` must be a function.');
  }

  if (!signature || !signature.length) return fn;

  const rearged = rewrap(fn, signature);
  rearged[SOURCE] = fn;
  rearged[IS_REARGED] = true;

  return rearged;
}
