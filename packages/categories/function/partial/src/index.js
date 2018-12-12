import SafeSymbolFor from '@foldr/internal-symbol';

/**
 * The default placeholder value.
 * @type {SafeSymbol}
 */
export const _ = SafeSymbolFor('placeholder');

/**
 * Used to determine if a function is partialed.
 * @type {SafeSymbol}
 */
export const IS_PARTIAL = SafeSymbolFor('is-partial-fn');

/**
 * Used to track the arity of partialed functions.
 * @type {SafeSymbol}
 */
export const ARITY = SafeSymbolFor('source-arity');

/**
 * Used to map partialed functions back to their original.
 * @type {SafeSymbol}
 */
export const SOURCE = SafeSymbolFor('source-fn');

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
 * Creates a function that "binds" arguments to the given function.
 *
 * This function operates much like Function#bind, except that it does not alter the `this`
 * value and it provides the flexibility of using placeholder values to "skip" arguments
 * you don't want to apply.
 *
 * @param {function} fn The function to partialize.
 * @returns {function} The partialized function.
 *
 * @arity Infinity
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { partial } from '@foldr/all';
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
  if (!partials.length) return fn;

  const partialized = partialize(fn, partials);

  let i = partials.length;
  let arity = fn[ARITY] >= 0 ? fn[ARITY] : fn.length;

  // We have to adjust the arity of the partialized function
  // so if curried it will curry properly.
  while (--i >= 0) if (partials[i] !== _) arity--;

  partialized[ARITY] = arity;
  partialized[SOURCE] = fn;
  partialized[IS_PARTIAL] = true;
  partialized.toString = toStringForPartialed;

  return partialized;
}

partial._ = _;
