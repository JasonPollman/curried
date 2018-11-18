/**
 * Exports the concat function.
 * @since 10/18/18
 * @file
 */

import isArray from '@foldr/is-array';
import FunctionalFactory from '@foldr/internal-f-factory';

/**
 *
 * concatenate arguments passed into `concat` into one single joined array.
 * @param {*} args - any length of arguments to concat
 * @returns {Array<*>} - the concatenated array
 *
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * concat([1, 2, 3], [4, 5, 6]);   // => [1, 2, 3, 4, 5, 6]
 * concat(null, [4, 5, 6]);        // => [null, 4, 5, 6]
 * concat([4, 5, 6], undefined);   // => [4, 5, 6, undefined]
 * concat();                       // => []
 */
export default function concat() {
  const args = arguments;
  let len = -1;
  const clone = [];

  while (++len < args.length) {
    const sub = args[len];

    if (isArray(sub)) {
      let subLen = -1;

      while (++subLen < sub.length) {
        clone[clone.length] = sub[subLen];
      }
    } else {
      clone[clone.length] = arguments[len];
    }
  }

  return clone;
}

/**
 * Functional, autocurried version of [concat](#concat).
 *
 * Curried version of concat. Function signature is [0, 1],
 * meaning concat([1, 2, 3])([4, 5, 6]) will result in [1, 2, 3, 4, 5, 6]
 *
 * @name concat.f
 * @returns {function} The curried concat function.
 *
 * @autocurried
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * const toConcat = concat.f([1, 2, 3]);
 * toConcat([4, 5, 6]); // => // [1, 2, 3, 4, 5, 6]
 */
export const f = FunctionalFactory(concat, {
  arity: 2,
  signature: [0, 1],
});
