import internalRearg from '@foldr/internal-rearg';

/**
 * Creates a function that "rearranges" the arguments signature of `fn`.
 *
 * This will return a wrapper function that, when called, will call `fn`
 * with arguments rearranged by the index mapping of the `signature` array.
 *
 * @name rearg
 * @param {function} fn The function to rearg.
 * @param {Array<number>} signature An array who's values indicate the actual arguments
 * to use for that index of the array. For example, `[1, 0, 2]` would convert the arguments
 * signature `fn(x, y, z)` to `fn(y, x, z)`.
 * @returns {function} The rearged function.
 *
 * @arity 2
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { rearg } from '@foldr/all';
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

  return internalRearg(fn, signature);
}
