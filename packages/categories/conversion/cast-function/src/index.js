/**
 * Converts the given value to a constant function.
 *
 * If `x` is a function, it will be returned, otherwise it
 * will be "cast" as a function.
 *
 * @name castFunction
 * @param {any} x The value to cast as a function.
 * @returns {function} The "cast" function.
 *
 * @arity 1
 * @category conversion
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { castFunction } from '@foldr/all';
 *
 * castFunction(0);  // => [object Function]
 * castFunction({}); // => [object Function]
 *
 * function foo() {}
 * castFunction(foo); // => foo
 */
export default function castFunction(x) {
  return typeof x === 'function' ? x : function cast() {
    return x;
  };
}
