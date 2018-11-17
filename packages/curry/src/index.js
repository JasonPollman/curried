/**
 * Exports the curry function.
 * @since 10/18/18
 * @file
 */

import internalCurry, { _ } from '@foldr/internal-curry';

/**
 * Curries a function.
 *
 * @name curry
 * @param {function} fn The function to curry.
 * @param {Object=} options Currying options.
 * @param {number} [options.arity=fn.length] The arity of `fn` or
 * a specific arity override to curry `fn` to.
 * @returns {function} The curried version of `fn`.
 *
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * const curried = curry((x, y, z) => x + y + z);
 * curried()        // => curried
 * curried(1)       // => [object Function]
 * curried(1)(2)    // => [object Function]
 * curried(1)(2)(3) // => 6
 * curried(1, 2)(3) // => 6
 * curried(1)(2, 3) // => 6
 * curried(1, 2, 3) // => 6
 *
 * // You can also use partial application (placeholders)...
 * const triples = curry((a, b, c) => [a, b, c]);
 * triples(_, 2, 3)(1)    // => [1, 2, 3]
 * triples(_, _, 3)(1)(2) // => [1, 2, 3]
 * triples(1)(_)(2)(_)(3) // => [1, 2, 3]
 * triples(1)(_, 3)(2)    // => [1, 2, 3]
 * triples(_, 2)(1)(3)    // => [1, 2, 3]
 */
export default function curry(fn, options = {}) {
  if (typeof fn !== 'function') {
    throw new Error('Argument for parameter `fn` must be a function.');
  }

  // This will force `nary` to be used to provide a consistent
  // behavior, since optimized will only be used internally or
  // unless explicitly flagged.
  return internalCurry(fn, { optimized: false, ...options });
}

// Exposing the placeholder property...
curry._ = _;
export { _ };
