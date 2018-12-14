import iterator from '@foldr/internal-iterator';

const identity = x => x;
const EmptyObject = () => ({});

/**
 * Gets the pick iteratee.
 * Pick iteratees can be only functions or arrays.
 * @param {any} iteratee The input iteratee value.
 * @returns {function|undefined} The *real* iteratee for the pick function.
 */
function preparePickIteratee(iteratee) {
  if (iteratee == null) return identity;

  switch (iteratee.constructor) {
    case Function: return iteratee;

    case Array: return function picker(value, key) {
      return iteratee.indexOf(key) > -1;
    };

    // Iternal Iterator will return the empty results
    // object in the case `iteratee` isn't a function.
    default: return identity;
  }
}

/**
 * Creates a new object by "picking" (or selecting) the given properties.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where:
 * - `value` is the current item in the collection being iterated over.
 * - `key` is the key of the current item in the collection being iterated over.
 * - `collection` is the passed in collection.
 *
 * @name pick
 * @param {Object} collection The collection to pick from.
 * @param {Array|function} iteratee The iteratee function to use while picking. If given
 * an array, all of the own properties of `collection` that exist in the array will be
 * picked, all other values will be ignored.
 * @returns {Object} A new object with only the picked values.
 *
 * @arity 2
 * @category object
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { pick } from '@foldr/all';
 *
 * const data = {
 *   foo: 'foo',
 *   bar: 'bar',
 *   baz: 'baz',
 * };
 *
 * // Using array shorthand
 * pick(data, ['foo', 'baz']); // => { foo: 'foo', baz: 'baz' }
 *
 * // Using function
 * pick(data, (value, key) => value[0] === 'b'); // => { bar: 'bar', baz: 'baz' }
 */
export default iterator({
  $$empty: EmptyObject,
  $$results: EmptyObject,
  $$prepare: preparePickIteratee,
  $$handler: (context, results, iteratee, i, value, key, collection) => {
    if (context && context.capped ? iteratee(value, key) : iteratee(value, key, collection)) {
      // eslint-disable-next-line no-param-reassign
      results[key] = value;
    }
  },
});
