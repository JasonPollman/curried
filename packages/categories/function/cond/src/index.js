/**
 * No-op function.
 * @returns {undefined}
 */
function noop() {}

/**
 * Creates a switch like composite function from the given condition/function pairs.
 *
 * Returns a composite function that will iterate over the given conditional predicate/callback
 * pairs and invoke `predicate`. If `predicate` returns truthy, `callback` is invoked and its
 * return value is returned.
 *
 * Note: both `predicate` and `callback` functions are invoked with all arguments supplied
 * to the returned composite function and with the `this` binding available to it as well.
 *
 * @name cond
 * @param {Array<Array>} conditionals A array of tuples, for which each should have a predicate
 * function as its 0th index and a callback function to invoke at its first.
 * @returns {function} The composite conditional function.
 *
 * @arity 1
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import {
 *   cond,
 *   True,
 *   always,
 *   isEqualFx,
 *   isLessThanFx,
 *   isGreaterThanOrEqualFx,
 * } from '@foldr/all';
 *
 * const timeOfDay = cond([
 *   [isLessThanFx(12), always('Morning')],
 *   [isEqualFx(12), always('Noon')],
 *   [isGreaterThanOrEqualFx(17), always('Evening')],
 *   [True, always('Afternoon')],
 * ]);
 *
 * timeOfDay(9);  // => Morning
 * timeOfDay(12); // => Noon
 * timeOfDay(13); // => Afternoon
 * timeOfDay(17); // => Evening
 */
export default function cond(conditionals) {
  const size = conditionals && conditionals.length;
  if (!size || size < 1) return noop;

  let i = -1;
  let current;

  while (++i < size) {
    current = conditionals[i];

    if (typeof current[0] !== 'function') {
      throw new TypeError(`Expected a function for conditional predicate at index ${i}.`);
    }

    if (typeof current[1] !== 'function') {
      throw new TypeError(`Expected a function for conditional callback at index ${i}.`);
    }
  }

  return function condition() {
    const args = arguments;
    i = 0;

    while (i < size) {
      current = conditionals[i++];
      if (current[0].apply(this, args)) return current[1].apply(this, args);
    }

    return undefined;
  };
}
