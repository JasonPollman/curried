import is from '@foldr/is';

const isPromiseBase = typeof Promise === 'function' ? is(Promise) : /* istanbul ignore next */ () => false;

/**
 * Determines if an object has both a `.then` and `.catch` method.
 * @param {Object} x The object to determine "thenable-ness" of.
 * @returns {boolean} True if `x` is thenable, false otherwise.
 */
const isThenable = x => typeof x.then === 'function' && typeof x.catch === 'function';

/**
 * Determines if the given value is a `Promise` object.
 * That is, if it's a native Promise or it's `thenable` (contains `.then` and `.catch` functions).
 *
 * @name isPromise
 * @param {any} x The value to determine whether or not it's a Promise.
 * @returns {boolean} True if `x` is a Promise, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isPromise } from '@foldr/all';
 *
 * isPromise(Promise.resolve()); // => true
 * isPromise(Promise.reject());  // => true
 * isPromise('foobar');          // => false
 */
export default function isPromise(x) {
  return isPromiseBase(x) || (!!x && isThenable(x));
}
