/**
 * Exports the `omit` function.
 * @since 11/10/18
 * @file
 */

import IteratorFactory from '@foldr/internal-iterator';

/**
 * The identity function.
 * Returns the value of the first argument provided to it.
 * @param {any} x The value to passthrough.
 * @returns {any} The value of `x`.
 */
function identity(x) {
  return x;
}

/* eslint-disable no-param-reassign */

/**
 * Gets the omit iteratee.
 * Omit iteratees can be only functions or arrays.
 * @param {any} iteratee The input iteratee value.
 * @returns {function|undefined} The *real* iteratee for the omit function.
 */
function prepareOmitIteratee(iteratee) {
  if (iteratee == null) return identity;

  switch (iteratee.constructor) {
    case Function: return iteratee;

    case Array: return function omitter(value, key) {
      return iteratee.indexOf(key) > -1;
    };

    // Iternal Iterator will return the empty results
    // object in the case `iteratee` isn't a function.
    default: return identity;
  }
}

/**
 * Creates a new object by "omitting" the given properties from `collection`.
 *
 * Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
 * `value` is the current item in the collection, `key` is the key of the current item in the
 * collection, and `collection` is collection.
 *
 * @param {Object} collection The collection to omit properties from.
 * @param {Array|function} iteratee The iteratee function to use while omitting. If given
 * an array, all of the own properties of `collection` that exist in the array will be
 * omitted, all other values will be included in the results object.
 * @returns {Object} A new object with all but the omitted values.
 * @category object
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * const data = {
 *   foo: 'foo',
 *   bar: 'bar',
 *   baz: 'baz',
 * };
 *
 * // Using array shorthand
 * omit(omit, ['foo', 'baz']); // => { bar: 'bar' }
 *
 * // Using a function
 * omit(data, (value, key) => value[0] === 'b'); // => { foo: 'foo }
 */
export default IteratorFactory({
  Empty: () => ({}),
  Results: () => ({}),
  prepare: prepareOmitIteratee,
  handler: (context, results, iteratee, i, value, key, collection) => {
    if (!iteratee(value, key, collection)) results[key] = value;
  },
});
