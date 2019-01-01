/**
 * Creates an object from the provided array of key/value tuples.
 *
 * Note, if the 0th index in a tuple occurs more than once, later provided values
 * will overwrite previous.
 *
 * @name fromPairs
 * @param {Array<Array>} tuples An array containing the  tuples to create the returned
 * object with. Each tuple represents a key/value pair on the returned object.
 * @returns {Object} An object created from `tuples`.
 *
 * @arity 1
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { fromPairs } from '@foldr/all';
 *
 * fromPairs([
 *   ['foo', 1],
 *   ['bar', 2],
 *   ['baz', 3],
 * ]);
 *
 * // => { foo: 1, bar: 2, baz: 3 }
 */
export default function fromPairs(tuples) {
  const size = tuples && tuples.length;
  if (!size) return {};

  const results = {};

  let i = 0;
  let current;

  while (i < size) {
    current = tuples[i++];
    // eslint-disable-next-line prefer-destructuring
    if (current) results[current[0]] = current[1];
  }

  return results;
}
