/**
 * Exports the `partial` function.
 * @since 10/30/18
 * @file
 */

import getInternalSymbol from '@foldr/internal-symbol';

/**
 * The default placeholder value.
 * @type {SafeSymbol}
 */
export const _ = getInternalSymbol('placeholder');

/**
 * Used to determine if a function is curried.
 * @type {SafeSymbol}
 */
export const IS_CURRIED = getInternalSymbol('is-curried-fn');

/**
 * Used to determine if a function is partialed.
 * @type {SafeSymbol}
 */
export const IS_PARTIAL = getInternalSymbol('is-partial-fn');

/**
 * Used to track the arity of partialed functions.
 * @type {SafeSymbol}
 */
export const ARITY = getInternalSymbol('source-arity');

/**
 * Used to map partialed functions back to their original.
 * @type {SafeSymbol}
 */
export const SOURCE = getInternalSymbol('source-fn');

/**
 * The `toString` implementation for partialed functions.
 * This will print the original function's source string
 * prepended with a friendly message that the function is partialized.
 * @returns {string} The source function's code with a comment
 * informing the user that the function is partialized.
 */
function toStringForPartialed() {
  return '/* Partial Wrapped */\r\n'.concat(this[SOURCE].toString());
}

/**
 * Partializes `fn` using `partials`.
 * @param {function} fn The function to partialize.
 * @param {Array} partials The set of partial arguments to apply to `fn`.
 * @returns {function} The partialized function.
 */
function partialize(fn, partials) {
  const applied = partials.length;

  return function partialized() {
    const input = arguments;
    const output = [];

    const size = input.length;

    let i = 0;
    let n = 0;

    // Push partial applications into the final arguments set
    // if they're placeholders, grab them from `arguments`.
    while (i < applied) {
      output[i] = partials[i] === _ ? input[n++] : partials[i];
      i++;
    }

    // Push remaining arguments into the final arguments set.
    while (n < size) output[i++] = input[n++];
    return fn.apply(this, output);
  };
}

/**
 * Creates a function that "binds" arguments to the given function. This function
 * operates much like Function#bind, except that it does not alter the `this` value
 * and it provides the flexibility of using placeholder values to "skip" arguments
 * you don't want to apply.
 * @param {function} fn The function to partialize.
 * @returns {function} The partialized function.
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * function pow(x, y) {
 *   return x ** y;
 * }
 *
 * const powerOf2 = partial(pow, 2);
 * powerOf2(1); // => 2
 * powerOf2(2); // => 4
 * powerOf2(3); // => 8
 *
 * // Using placeholders we can use the same function
 * // to achieve different functionality.
 * const square = partial(pow, _, 2);
 * square(1); // => 1
 * square(2); // => 2
 * square(3); // => 9
 */
export default function partial(fn, ...partials) {
  if (typeof fn !== 'function') {
    throw new TypeError('The first argument given to `partial` must be a function.');
  }

  // No reason to partialize a function with no partials or a curried function.
  if (!partials.length || fn[IS_CURRIED]) return fn;

  const partialized = partialize(fn, partials);

  partialized[ARITY] = fn[ARITY] >= 0 ? fn[ARITY] : fn.length;
  partialized[SOURCE] = fn;
  partialized[IS_PARTIAL] = true;
  partialized.toString = toStringForPartialed;

  return partialized;
}

partial._ = _;
