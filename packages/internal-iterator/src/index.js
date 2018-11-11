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
 * Iterates over array-like objects (Arrays, Arguments, and strings) in reverse.
 * @param {Array|Object} results The results set that iteration will "fill".
 * @param {Array|Arguments|string} array The array-like object we're iterating over.
 * @param {function} handler The wrapper handler.
 * @param {function} iteratee The user provided iteratee function.
 * @returns {undefined}
 */
function iterateArrayLikeReverse(results, array, handler, iteratee) {
  let i = array.length;
  let n = 0;

  while (--i >= 0) {
    if (handler(results, iteratee, n++, array[i], i, array) === BREAK) break;
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
 * Iterates over Objects in reverse.
 * @param {Array|Object} results The results set that iteration will "fill".
 * @param {Object} object The object we're iterating over.
 * @param {function} handler The wrapper handler.
 * @param {function} iteratee The user provided iteratee function.
 * @returns {undefined}
 */
function iterateObjectReverse(results, object, handler, iteratee) {
  const props = keys(object);

  let key;
  let i = props.length;
  let n = 0;

  while (--i >= 0) {
    key = props[i];
    if (handler(results, iteratee, n++, object[key], key, object) === BREAK) break;
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

  const iteratorForEntries = set.entries();
  let next = iteratorForEntries.next();

  while (!next.done) {
    if (handler(results, iteratee, i, next.value[0], i++, set) === BREAK) break;
    next = iteratorForEntries.next();
  }
}

/**
 * Iterates over Set instances in reverse.
 * @param {Array|Object} results The results set that iteration will "fill".
 * @param {Set} set The Set that we're iterating over.
 * @param {function} handler The wrapper handler.
 * @param {function} iteratee The user provided iteratee function.
 * @returns {undefined}
 */
function iterateSetReverse(results, set, handler, iteratee) {
  const entries = [];
  const iteratorForEntries = set.entries();

  let n = 0;
  let next = iteratorForEntries.next();

  while (!next.done) {
    entries[n++] = next.value;
    next = iteratorForEntries.next();
  }

  let i = entries.length;
  n = 0;

  while (--i >= 0) {
    if (handler(results, iteratee, n++, entries[i][0], i, set) === BREAK) break;
    next = iteratorForEntries.next();
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

  const iteratorForEntries = map.entries();
  let next = iteratorForEntries.next();

  while (!next.done) {
    if (handler(results, iteratee, i++, next.value[1], next.value[0], map) === BREAK) break;
    next = iteratorForEntries.next();
  }
}

/**
 * Iterates over Map instances in reverse.
 * @param {Array|Object} results The results set that iteration will "fill".
 * @param {Set} set The Map that we're iterating over.
 * @param {function} handler The wrapper handler.
 * @param {function} iteratee The user provided iteratee function.
 * @returns {undefined}
 */
function iterateMapReverse(results, set, handler, iteratee) {
  const entries = [];
  const iteratorForEntries = set.entries();

  let n = 0;
  let next = iteratorForEntries.next();

  while (!next.done) {
    entries[n++] = next.value;
    next = iteratorForEntries.next();
  }

  let i = entries.length;
  n = 0;

  while (--i >= 0) {
    if (handler(results, iteratee, n++, entries[i][1], entries[i][0], set) === BREAK) break;
    next = iteratorForEntries.next();
  }
}

/**
 * A mapping of Object.prototype.toString tags to iterator functions.
 * This object is used to determine the function to use to iterate over
 * the user-provided collection.
 * @type {Object<function>}
 */
const ITERATOR_MAPPING = {
  '[object Set]': iterateSet,
  '[object Map]': iterateMap,
  '[object Array]': iterateArrayLike,
  '[object String]': iterateArrayLike,
  '[object Object]': iterateObject,
  '[object Arguments]': iterateArrayLike,
};

/**
 * A mapping of Object.prototype.toString tags to iterator functions.
 * This object is used to determine the function to use to iterate over
 * the user-provided collection if the `reverse` option is true.
 * @type {Object<function>}
 */
const ITERATOR_MAPPING_REVERSE = {
  '[object Set]': iterateSetReverse,
  '[object Map]': iterateMapReverse,
  '[object Array]': iterateArrayLikeReverse,
  '[object String]': iterateArrayLikeReverse,
  '[object Object]': iterateObjectReverse,
  '[object Arguments]': iterateArrayLikeReverse,
};

/**
 * Creates an iterator function that iterates either forward or reverse
 * depending on the values of `options.mapping`.
 * @param {Object} options Iterator function options.
 * @param {function} options.mapping One of the `ITERATOR_MAPPING` or
 * `ITERATOR_MAPPING_REVERSE` objects above.
 * internally invoke the user's `iteratee` passed to it.
 * @param {function} options.iterateeHandler A handler function to perform internal
 * actions for each item in the collection as it's iterated. This function should
 * internally invoke the user's `iteratee` passed to it.
 * @param {function} options.ResultsConstructor A constructor function that creates
 * the results object that's passed to `iterateeHandler` on each iteration.
 * @param {function=} [options.unwrapResults=false] If true, this function will
 * be called on the final results and the return value from it will be returned
 * to the end-user.
 * @returns {any} The results from iterating over `collection` using `iteratee`.
 * @export
 */
function iteratorFromOptions({
  mapping,
  unwrapResults,
  iterateeHandler,
  ResultsConstructor,
  iterateArrayLikeFunction,
}) {
  return (collection, iteratee) => {
    const results = ResultsConstructor();

    if (!collection || typeof collection === 'function' || typeof iteratee !== 'function') {
      return unwrapResults ? unwrapResults(results) : results;
    }

    // This is an optimization, since most "iterator" functions iterate
    // over array-like objects, this prevents the `toString.apply` call
    // for arrays, strings, and arguments objects.
    const iterate = collection.length >= 0
      ? iterateArrayLikeFunction
      : mapping[toString.call(collection)];

    if (iterate) iterate(results, collection, iterateeHandler, iteratee);
    return unwrapResults ? unwrapResults(results) : results;
  };
}

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
 * @param {boolean=} [options.reverse=false] If true, collections will be iterated
 * over in reverse order.
 * @param {function=} [options.unwrapResults=false] If true, this function will
 * be called on the final results and the return value from it will be returned
 * to the end-user.
 * @returns {any} The results from iterating over `collection` using `iteratee`.
 * @export
 */
export default function IteratorFactory({ flipped, reverse, ...options }) {
  /* eslint-disable no-param-reassign */
  options.mapping = reverse ? ITERATOR_MAPPING_REVERSE : ITERATOR_MAPPING;
  options.iterateArrayLikeFunction = reverse ? iterateArrayLikeReverse : iterateArrayLike;
  /* eslint-enable no-param-reassign */

  const iterator = iteratorFromOptions(options);

  return !flipped ? iterator : function functionalIterator(iteratee, collection) {
    return iterator(collection, iteratee);
  };
}

IteratorFactory.BREAK = BREAK;
