import toNumber from '@foldr/to-number';

/* eslint-disable no-nested-ternary, no-self-compare, no-param-reassign */

const { MAX_VALUE } = Number;

/**
 * Converts `x` to a finite number.
 *
 * Note, this will also call `toNumber` on `x`.
 *
 * @name toFinite
 * @param {string|number} x The value to convert to a finite number.
 * @returns {number} The finite equivalent of `x`.
 *
 * @arity 1
 * @category conversion
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { toFinite } from '@foldr/all';
 *
 * toFinite(0);         // => 0;
 * toFinite(Infinity);  // => Number.MAX_VALUE;
 * toFinite(-Infinity); // => Number.MIN_VALUE;
 *
 * toFinite({ valueOf() { return 5; } }) // => 5
 */
export default function toFinite(x) {
  // Why the `x === 0`? Because -0 === 0.
  if (!x) return x === 0 ? x : 0;

  x = toNumber(x);
  if (!x) return x === 0 ? x : 0;

  return x > MAX_VALUE ? MAX_VALUE : (x < -MAX_VALUE ? -MAX_VALUE : x);
}
