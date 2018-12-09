/**
 * Creates a function that *always* returns the given value.
 *
 * @name always
 * @param {any} value The value that the newly created function will return.
 * @returns {function} The literal boolean `false`.
 *
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * const Null = always(null);
 * Null() // => null
 *
 * // Beware, `always` always returns the same value!
 * // So mutation side-effects are possible!
 *
 * const foo = always({ foo: 'bar' });
 * const thing = foo() // => { foo: 'bar' };
 * thing.baz = 'quxx';
 *
 * const sameThing = foo() // => { foo: 'bar', baz: 'quxx' };
 */
export default function always(value) {
  return function consistently() {
    return value;
  };
}
