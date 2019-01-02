import toInteger from '@foldr/to-integer';
import isObjectLike from '@foldr/is-object-like';
import SafeSymbolFor from '@foldr/internal-symbol';

/**
 * Used to track the arity of spread functions.
 * @type {SafeSymbol}
 */
export const ARITY = SafeSymbolFor('source-arity');

/* eslint-disable no-param-reassign, require-jsdoc */

/**
 * Converts a function that expects a list of arguments into a function that
 * expects a single array, which will be "spread" into `fn`.
 *
 * This is the opposite of [rest](#rest).
 *
 * @name spread
 * @param {function} fn The function to create a "spread wrapped" function from.
 * @param {number=} start The start index to being the spread from.
 * @returns {function} A unary function that spreads the given array into `fn`.
 *
 * @arity 2
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { spread } from '@foldr/all';
 *
 * const sum = (x, y) => x + y;
 *
 * function getValues() {
 *   return Promise.all([100, 5]);
 * }
 *
 * getValues().then(spread(sum)); // => Resolves with `105`.
 */
export default function spread(fn, start) {
  if (typeof fn !== 'function') throw new Error('Expected a function.');

  start = arguments.length > 1 ? (toInteger(start) || 0) : 0;
  start = start && start < 0 ? 0 : start;

  function spreadWrap() {
    const args = arguments;
    const rest = args[start];

    if (!rest) return fn.apply(this);
    if (start === 0) return fn.apply(this, isObjectLike(rest) ? rest : []);

    let n = 0;
    let i = 0;

    const results = [];
    const size = rest.length;

    while (i < start) results[n++] = args[i++];
    i = 0;

    while (i < size) results[n++] = rest[i++];
    return fn.apply(this, results);
  }

  // So we can apply function transformations to spread functions,
  // we stash the arity here. For example, currying a spread function.
  const spreadArity = start === 0 ? 1 : start + 1;
  const originalArity = fn[ARITY] !== undefined ? fn[ARITY] : fn.length;

  spreadWrap[ARITY] = spreadArity > originalArity ? originalArity : spreadArity;
  return spreadWrap;
}
