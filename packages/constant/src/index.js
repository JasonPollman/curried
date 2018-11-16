/**
 * Exports the `constant` function.
 * @since 10/29/18
 * @file
 */

import FunctionalFactory from '@foldr/internal-fn-factory';

/**
 * Creates a function that always returns the given value.
 *
 * @name constant
 * @param {any} value The value that the newly created function will return.
 * @returns {function} The literal boolean `false`.
 *
 * @category function
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * const Null = constant(null);
 * Null() // => null
 *
 * // Beware, `constant` always returns the same value!
 * // So mutation side-effects are possible!
 *
 * const foo = constant ({ foo: 'bar' });
 * const thing = foo() // => { foo: 'bar' };
 * thing.baz = 'quxx';
 *
 * const sameThing = foo() // => { foo: 'bar', baz: 'quxx' };
 */
export default function constant(value) {
  return function consistently() {
    return value;
  };
}


/**
 * Functional, autocurried version of [constant](#constant).
 * Creates a function that always returns the given value.
 *
 * @name constant.fn
 * @param {any} value The value that the newly created function will return.
 * @returns {function} The literal boolean `false`.
 *
 * @arity 1
 * @autocurried
 * @category function
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * const Null = constant.fn(null);
 * Null() // => null
 *
 * // Beware, `constant` always returns the same value!
 * // So mutation side-effects are possible!
 *
 * const foo = constant.fn({ foo: 'bar' });
 * const thing = foo() // => { foo: 'bar' };
 * thing.baz = 'quxx';
 *
 * const sameThing = foo() // => { foo: 'bar', baz: 'quxx' };
 */
export const fn = FunctionalFactory(constant, { arity: 1 });
