/**
 * Exports a function that creates functional versions of
 * the given function. This is used to create fp versions
 * of all @foldr functions. Note, changing this file will
 * affect all @foldr methods!
 * @since 11/15/18
 * @file
 */

import curry from '@foldr/internal-curry';
import rearg from '@foldr/internal-rearg';

/* eslint-disable no-param-reassign */

const has = Object.hasOwnProperty;
const identity = x => x;

/**
 * Creates a function version of `fn` using `config`.
 * @param {function} fn The function to functionalize.
 * @param {Object} config The configuration (as documented below).
 * @returns {function} The functional version of `fn`.
 */
export function functionalize(fn, config) {
  const {
    context,
    curried,
    signature,
  } = config;

  const binding = context === 'config' ? config : context;
  const method = binding === undefined ? fn : fn.bind(binding);

  return (curried ? curry : identity)(signature ? rearg(method, signature) : method, config);
}

/**
 * Creates a function version of `fn` using `options` and assigns it to
 * `fn` using `options.namespace`. This will also add a `functionalize`
 * method to the function, which users can use to create *new* functional
 * versions of `fn` with their own config.
 * @param {function} fn The function to functionalize/wrap.
 * @param {Object} options Functionalization options.
 * @param {boolean=} [capped=true] Set to `false` to prevent iterators from passing
 * more than a single (value) argument to iteratee functions.
 * @param {curried=} [curried=true] True to curry the function, false otherwise.
 * @param {string=} [namespace='fn'] The "namespace" to assign the functional
 * version of `fn` onto `fn` using.
 * @param {number=} arity See the docs on this parameter in `internal-curry`.
 * @param {boolean=} optimized See the docs on this parameter in `internal-curry`.
 * @returns {function} The function version of `fn`.
 * @export
 */
export default function fmake(fn, options) {
  const config = { curried: true, ...options };

  /**
   * Allows users to create custom functionalized versions of the provided function.
   * This will create a new function using `fn` as the base.
   * @param {Object} overrides The list of configuration
   * overrides to apply the the new function.
   * @returns {function} The functionalized version of `fn`.
   */
  function make(overrides) {
    const merged = { ...config, ...overrides };

    // Aliasing this to make more sense to the end user.
    // Note, this option is passed to curry's options.
    merged.optimized = has.call(merged, 'context') ? false : merged.optimized;
    return functionalize(fn, merged);
  }

  const functional = make(fn, {});
  functional.make = make;

  return functional;
}
