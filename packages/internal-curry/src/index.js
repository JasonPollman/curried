/**
 * A *highly* optimized currying library focused on performance.
 * Support for partial applications and placeholders.
 * Supported by node and browsers (at least IE11+).
 * @since 10/3/18
 * @file
 */

import getSymbol from '@foldr/internal-symbol';

/* eslint-disable prefer-spread, no-param-reassign, no-nested-ternary */

/**
 * Used to track the arity of curried functions.
 * @type {Sym}
 */
const ARITY = getSymbol('source-arity');

/**
 * Used to map curried functions back to their original.
 * @type {Sym}
 */
const SOURCE = getSymbol('source-function');

/**
 * A default placeholder value.
 * Used for partial application to curried functions.
 * @type {Sym}
 */
export const _ = getSymbol('placeholder');

/**
 * Optimized unary curry function.
 * @param {function} fn The source (original) function.
 * @returns {function} The curried function
 */
function unary(fn) {
  return function curried(a) {
    return arguments.length && a !== _ ? fn(a) : curried;
  };
}

/**
 * Optimized binary curry function.
 * @param {function} fn The source (original) function.
 * @returns {function} The curried function
 */
function binary(fn) {
  return function curried(a, b) {
    switch (arguments.length) {
      case 2:
      default: return a === _
        ? b === _
          ? curried
          : unary(c => fn(c, b))
        : b === _
          ? unary(c => fn(a, c))
          : fn(a, b);

      case 1: return a === _ ? curried : unary(c => fn(a, c));
      case 0: return curried;
    }
  };
}

/**
 * Optimized trinary curry function.
 * @param {function} fn The source (original) function.
 * @returns {function} The curried function
 */
function trinary(fn) {
  return function curried(a, b, c) {
    switch (arguments.length) {
      case 3:
      default: return a === _
        ? b === _
          ? c === _
            ? curried
            : binary((d, e) => fn(d, e, c))
          : c === _
            ? binary((d, e) => fn(d, b, e))
            : unary(d => fn(d, b, c))
        : b === _
          ? c === _
            ? binary((d, e) => fn(a, d, e))
            : unary(d => fn(a, d, c))
          : c === _
            ? unary(d => fn(a, b, d))
            : fn(a, b, c);

      case 2: return a === _
        ? b === _
          ? curried
          : binary((d, e) => fn(d, b, e))
        : b === _
          ? binary((d, e) => fn(a, d, e))
          : unary(d => fn(a, b, d));

      case 1: return a === _ ? curried : binary((d, e) => fn(a, d, e));
      case 0: return curried;
    }
  };
}

/**
 * Optimized quarternary curry function.
 * @param {function} fn The source (original) function.
 * @returns {function} The curried function
 */
function quarternary(fn) {
  return function curried(a, b, c, d) {
    switch (arguments.length) {
      case 4:
      default: return a === _
        ? b === _
          ? c === _
            ? d === _
              ? curried
              : trinary((e, f, g) => fn(e, f, g, d))
            : d === _
              ? trinary((e, f, g) => fn(e, f, c, g))
              : binary((e, f) => fn(e, f, c, d))
          : c === _
            ? d === _
              ? trinary((e, f, g) => fn(e, b, f, g))
              : binary((e, f) => fn(e, b, f, d))
            : d === _
              ? binary((e, f) => fn(e, b, c, f))
              : unary(e => fn(e, b, c, d))
        : b === _
          ? c === _
            ? d === _
              ? trinary((e, f, g) => fn(a, e, f, g))
              : binary((e, f) => fn(a, e, f, d))
            : d === _
              ? binary((e, f) => fn(a, e, c, f))
              : unary(e => fn(a, e, c, d))
          : c === _
            ? d === _
              ? binary((e, f) => fn(a, e, b, f))
              : unary(e => fn(a, b, e, d))
            : d === _
              ? unary(e => fn(a, b, c, e))
              : fn(a, b, c, d);

      case 3: return a === _
        ? b === _
          ? c === _
            ? curried
            : trinary((e, f, g) => fn(e, f, c, g))
          : c === _
            ? trinary((e, f, g) => fn(e, b, f, g))
            : binary((e, f) => fn(e, b, c, f))
        : b === _
          ? c === _
            ? trinary((e, f, g) => fn(a, e, f, g))
            : binary((e, f) => fn(a, e, c, f))
          : c === _
            ? binary((e, f) => fn(a, b, e, f))
            : unary(e => fn(a, b, c, e));

      case 2: return a === _
        ? b === _
          ? curried
          : trinary((e, f, g) => fn(e, b, f, g))
        : b === _
          ? trinary((e, f, g) => fn(a, e, f, g))
          : binary((e, f) => fn(a, b, e, f));

      case 1: return a === _ ? curried : trinary((e, f, g) => fn(a, e, f, g));
      case 0: return curried;
    }
  };
}

/**
 * Gets the next argument set in the curry sequence. This will
 * combine the previous and current argument set, while replacing
 * placeholders in the previous set with values from the current.
 * @param {Array|Arguments} prev The previous function invocation's arguments.
 * @param {Arguments} curr The current function invocation's arguments.
 * @param {number} arity The arity of the curried function.
 * @returns {Array} The "concatenated" arguments.
 */
function concat(prev, curr, arity) {
  const args = [];
  const plen = prev.length;
  const clen = curr.length;

  let i = -1;
  let index = 0;

  while (++i < arity && i < plen) {
    args[i] = prev[i] === _ && index < clen ? curr[index++] : prev[i];
  }

  while (i < arity && index < clen) {
    args[i++] = curr[index++];
  }

  return args;
}

/**
 * Determines if an argument set has any placeholders (up to arity), which
 * indicates that it's not safe to invoke the curried function's source function.
 * @param {Array|Arguments} args The argument set to look for placeholders within.
 * @param {number} arity The arity of the source function.
 * @returns {boolean} True if it's safe to call the source functon, false otherwise.
 */
function hasPlaceholders(args, arity) {
  while (--arity !== -1) if (args[arity] === _) return true;
  return false;
}

/**
 * Used by `nary` below to recursively complete the curry sequence.
 * @param {function} fn The source (original) function.
 * @param {number} arity The arity to curry `fn` to.
 * @param {Arguments|Array} prev The previous arguments in the curry sequence.
 * @returns {function} The next function in the curry sequence.
 */
function recurry(fn, arity, prev) {
  return function curried() {
    if (!arguments.length) return curried;
    const args = concat(prev, arguments, arity);

    return args.length < arity || hasPlaceholders(args, arity)
      ? recurry(fn, arity, args)
      : fn.apply(undefined, args);
  };
}

/**
 * Used to curry functions with an arity > 4.
 * @param {function} fn The source (original) function.
 * @param {number} arity The arity to curry `fn` to.
 * @returns {function} The curried version of `fn`.
 */
function nary(fn, arity) {
  return function curried() {
    return arguments.length
      ? arguments.length < arity || hasPlaceholders(arguments, arity)
        ? recurry(fn, arity, arguments)
        : fn.apply(undefined, arguments)
      : curried;
  };
}

/**
 * The set of optimized curry creation functions.
 * @type {Array<function>}
 */
const OPTIMIZED = [unary, unary, binary, trinary, quarternary];

/**
 * Curries a function.
 * @param {function} fn The function to curry.
 * @param {number} [arity=fn.length] The arity of `fn` or
 * a specific arity override to curry `fn` to.
 * @returns {function} The curried version of `fn`.
 * @export
 * @example
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
export default function curry(fn, arity = fn.length) {
  if (arity < 1) return fn;

  const curried = (OPTIMIZED[arity] || nary)(fn, arity);
  curried[ARITY] = arity;
  curried[SOURCE] = fn;
  return curried;
}

curry._ = _;
