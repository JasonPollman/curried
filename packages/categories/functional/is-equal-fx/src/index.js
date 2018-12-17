import isEqual from '@foldr/is-equal';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [isEqual](#is-equal).**
 *
 * Determines is `x` is equal to `y` according to the SameValueZero comparison.
 *
 * @name isEqualFx
 * @param {any} y The second value to compare.
 * @param {any} x The first value to compare.
 * @returns {boolean} True if `x` is equal to `y`.
 *
 * @arity 2
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isEqual } from '@foldr/all';
 *
 * isEqual(1)(1);         // => true
 * isEqual(1)('1');       // => false
 *
 * isEqual('foo')('foo'); // => true
 * isEqual(NaN)(NaN);     // => true
 * isEqual(0, NaN);       // => false
 *
 * isEqual({}, {});       // => false
 *
 * const obj = {};
 * isEqual(obj)(obj);     // => true
 */
export default fmake(isEqual, {
  arity: 2,
});
