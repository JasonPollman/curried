/**
 * This file exports a function that gets "shorthand" iteratees.
 * @since 11/11/18
 * @file
 */

/* eslint-disable no-self-compare */

const { keys } = Object;

// SameValueZero comparison.
const isEqual = (x, y) => (x === x ? x === y : y !== y);

/**
 * The identity function.
 * Returns the value of the first argument provided to it.
 * @param {any} x The value to passthrough.
 * @returns {any} The value of `x`.
 */
function identity(x) {
  return x;
}

/**
 * Always returns true.
 * @returns {boolean} Literally `true`.
 */
function T() {
  return true;
}

/**
 * Shorthand iteratee for string iteratees.
 * @param {string} prop The property to extract from the value.
 * @returns {function} The string shorthand iteratee.
 */
function iterateeForString(prop) {
  return value => (value ? value[prop] : undefined);
}

/**
 * Shorthand iteratee for object iteratees.
 * @param {Object} object An object who's property values should be the same
 * as the current value in the iteration.
 * @returns {function} The object shorthand iteratee.
 */
function iterateeForObject(object) {
  const props = keys(object);
  const size = props.length;

  // Nothing to assert the predicate of, so
  // everything always passes this iteratee.
  if (!size) return T;

  return (value) => {
    if (!value) return false;

    let i = 0;
    let prop;

    while (i < size) {
      prop = props[i++];
      if (!isEqual(value[prop], object[prop])) return false;
    }

    return true;
  };
}

/**
 * Shorthand iteratee for array iteratees.
 * @param {Array} tuple An array who's first index is the property
 * to peel of the current iteration value and who's second index is the
 * value that the first index should be.
 * @returns {function} The array shorthand iteratee.
 */
function iterateeForArray(tuple) {
  if (!tuple.length) return T;
  return x => !!x && isEqual(x[tuple[0]], tuple[1]);
}

/**
 * Gets a "shorthand" iteratee function. That is, if the user
 * provides a string, object, or array
 * @param {Array|Object|string|function} given The value provided for the iteratee function.
 * @returns {function} The relevant iteratee function based on `given`.
 * @export
 */
export default function getShorthandIteratee(given) {
  if (!given) return identity;

  switch (given.constructor) {
    case Function: return given;
    case Array: return iterateeForArray(given);
    case String: return iterateeForString(given);
    case Object: return iterateeForObject(given);
    default: return identity;
  }
}
