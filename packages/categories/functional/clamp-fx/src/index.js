import clamp from '@foldr/clamp';
import fmake from '@foldr/internal-fmake';

/**
 * **Functional, autocurried version of [clamp](#clamp).**
 *
 * Clamps a number in the range `lower` and `upper`.
 * If `lower` in greater than `upper`, `lower` takes precedence.
 *
 * @name clampFx
 * @param {number=} lower The minimum value `x` can be.
 * @param {number} upper The maximum value `x` can be.
 * @param {number} x The value to clamp.
 * @returns {number} The clamped value.
 *
 * @arity 3
 * @autocurried
 * @category functional
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { clampFx } from '@foldr/all';
 *
 * clampFx(0, 10)(5);   // => 5
 * clampFx(0, 10)(-10); // => 0
 * clampFx(10)(20)(0);  // => 10
 */
export default fmake(clamp, {
  arity: 3,
  signature: [2, 0, 1],
});
