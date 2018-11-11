/**
 * This file exports a "factory" function for creating
 * various types of iterator functions used by `map`, `filter`, etc.
 * @since 11/10/18
 * @file
 */

import getSymbol from '@foldr/internal-symbol';

const { keys } = Object;
const { toString } = Object.prototype;

/**
 * A sential value used to break iteration.
 * @type {SafeSymbol}
 */
export const BREAK = getSymbol('iterator-break');

/**
 * Iterates over array-like objects (Arrays, Arguments, and strings).
 * @param {Array|Object} results The results set that iteration will "fill".
 * @param {Array|Arguments|string} array The array-like object we're iterating over.
 * @param {function} handler The wrapper handler.
 * @param {function} iteratee The user provided iteratee function.
 * @returns {undefined}
 */
function iterateArrayLike(results, array, handler, iteratee) {
  const size = array.length;
  let i = 0;

  while (i < size) {
    if (handler(results, iteratee, i, array[i], i++, array) === BREAK) break;
  }
}

/**
 * Iterates over Objects.
 * @param {Array|Object} results The results set that iteration will "fill".
 * @param {Object} object The object we're iterating over.
 * @param {function} handler The wrapper handler.
 * @param {function} iteratee The user provided iteratee function.
 * @returns {undefined}
 */
function iterateObject(results, object, handler, iteratee) {
  const props = keys(object);
  const size = props.length;

  let key;
  let i = 0;

  while (i < size) {
    key = props[i];
    if (handler(results, iteratee, i++, object[key], key, object) === BREAK) break;
  }
}

/**
 * Iterates over Set instances.
 * @param {Array|Object} results The results set that iteration will "fill".
 * @param {Set} set The Set that we're iterating over.
 * @param {function} handler The wrapper handler.
 * @param {function} iteratee The user provided iteratee function.
 * @returns {undefined}
 */
function iterateSet(results, set, handler, iteratee) {
  let i = 0;

  const iterator = set.entries();
  let next = iterator.next();

  while (!next.done) {
    if (handler(results, iteratee, i, next.value[0], i++, set) === BREAK) break;
    next = iterator.next();
  }
}

/**
 * Iterates over Map instances.
 * @param {Array|Object} results The results set that iteration will "fill".
 * @param {Map} map The Map that we're iterating over.
 * @param {function} handler The wrapper handler.
 * @param {function} iteratee The user provided iteratee function.
 * @returns {undefined}
 */
function iterateMap(results, map, handler, iteratee) {
  let i = 0;

  const iterator = map.entries();
  let next = iterator.next();

  while (!next.done) {
    if (handler(results, iteratee, i++, next.value[1], next.value[0], map) === BREAK) break;
    next = iterator.next();
  }
}

/**
 * A mapping of Object.prototype.toString tags to iterator functions.
 * This object is used to determine the function to use to iterate over
 * the user-provided collection.
 * @type {Object<function>}
 */
const IMAPPING = {
  '[object Set]': iterateSet,
  '[object Map]': iterateMap,
  '[object Array]': iterateArrayLike,
  '[object String]': iterateArrayLike,
  '[object Object]': iterateObject,
  '[object Arguments]': iterateArrayLike,
};

/**
 * Creates an iterator function.
 * @param {Object} options Iterator function options.
 * @param {boolean} options.flipped If true, a functional-style iteratee first
 * function will be returned. Otherwise, the more standard collection first version
 * of the iterator function will be returned.
 * @param {function} options.iterateeHandler A handler function to perform internal
 * actions for each item in the collection as it's iterated. This function should
 * internally invoke the user's `iteratee` passed to it.
 * @param {function} options.ResultsConstructor A constructor function that creates
 * the results object that's passed to `iterateeHandler` on each iteration.
 * @returns {any} The results from iterating over `collection` using `iteratee`.
 * @export
 */
export default function IteratorFactory({
  flipped,
  unwrapResults,
  iterateeHandler,
  ResultsConstructor,
}) {
  // eslint-disable-next-line require-jsdoc
  function iterator(collection, iteratee) {
    const results = ResultsConstructor();

    if (!collection || typeof collection === 'function' || typeof iteratee !== 'function') {
      return unwrapResults ? unwrapResults(results) : results;
    }

    // This is an optimization, since most "iterator" functions iterate
    // over array-like objects, this prevents the `toString.apply` call
    // for arrays, strings, and arguments objects.
    const iterate = collection.length >= 0 ? iterateArrayLike : IMAPPING[toString.call(collection)];
    if (iterate) iterate(results, collection, iterateeHandler, iteratee);
    return unwrapResults ? unwrapResults(results) : results;
  }

  // If flipped, a "functional style" (iteratee first) function will be returned.
  // Otherwise, The `iterator` function above will be returned.
  return !flipped ? iterator : function functionalIterator(iteratee, collection) {
    return iterator(collection, iteratee);
  };
}

IteratorFactory.BREAK = BREAK;
