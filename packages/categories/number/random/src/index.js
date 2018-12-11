/**
 * Exports the `toRandom` function.
 * @since 11/14/18
 * @file
 */

import toFinite from '@foldr/to-finite';

/* eslint-disable no-bitwise, no-param-reassign */

const rand = Math.random;

/**
 * Base functionality for `random` function.
 * @param {number} min The minimum random value.
 * @param {number} max The maximum random value.
 * @param {boolean} floating True for floating points, false to drop the float.
 * @returns {random} A random number.
 */
function randomBase(min, max, floating) {
  const value = (rand() * (max - min)) + min;
  return floating ? value : (value | 0);
}

/**
 * Gets a random number in the given range (inclusive).
 *
 * If no `upper` value is given the random number returned will be
 * in the range `0` to `lower`.
 *
 * If `floating` is explicitly passed, the returned value will be
 * a floating point number if `floating` is truthy and an integer
 * it `floating` is falsy.
 *
 * If `floating` isn't passed, then if either `upper` or `lower`
 * are floats `floating` will be `true`.
 *
 * If either `lower` or `upper` are `Infinity`, they will be clamped
 * to `Number.MIN_VALUE` or `Number.MAX_VALUE` respectively.
 *
 * @name random
 * @param {number} lower The inclusive lower range of the random number.
 * @param {number} upper The inclusive upper range of the random number.
 * @param {boolean=} floating True to get a random float, false for an integer.
 * @returns {number} A random number.
 *
 * @category number
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { random } from '@foldr/all';
 *
 * random(0, 10);       // => Random number between 0..10, inclusive
 * random(5, 10);       // => Random number between 5..10, inclusive
 * random(5);           // => Random number between 0..5, inclusive
 * random(5.01, 5.99);  // => Random number between 5.01..5.99, inclusive
 * random();            // => Either 0 or 1.
 *
 * toFinite({ valueOf() { return 5; } }) // => 5
 */
export default function random(lower, upper, floating) {
  switch (arguments.length) {
    case 0:
      return randomBase(0, 1, false);

    case 1:
      return randomBase(0, toFinite(lower), lower % 1);

    case 2:
      lower = toFinite(lower);
      upper = toFinite(upper);
      return randomBase(lower, upper, lower % 1 || upper % 1);

    default:
      return randomBase(toFinite(lower), toFinite(upper), floating);
  }
}
