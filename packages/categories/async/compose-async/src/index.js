import SafeSymbolFor from '@foldr/internal-symbol';

/* eslint-disable require-jsdoc */

/**
 * Used to track the arity of composed functions.
 * @type {SafeSymbol}
 */
export const ARITY = SafeSymbolFor('source-arity');

/**
 * Composes promise returning functions.
 *
 * This function is similar to [compose](#compose), except that it works
 * for promise returning functions.
 *
 * You can combine synchronous and asynchronous functions, but `composeAsync`
 * will always return a Promise object.
 *
 * @name composeAsync
 * @param {...function} functions The promise returning functions to compose.
 * @returns {function} The composite async function.
 *
 * @arity Infinity
 * @category async
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { composeAsync } from '@foldr/all';
 *
 * function getUserRecordWithId(id) {
 *   // Get the user from a db somehow...
 *   return Promise.resolve().then(() => ({
 *     id: 1234,
 *     firstName: 'Will',
 *     lastName: 'Smith',
 *   }))
 * }
 *
 * function formatUserName(user) {
 *   return `${user.firstName} ${user.lastName}`;
 * }
 *
 * const getAndPrintUserName = composeAsync(
 *   formatUserName,
 *   getUserRecordWithId,
 * );
 *
 * getAndPrintUserName();
 * // => 'Will Smith'
 *
 */
export default function composeAsync() {
  const fns = arguments;
  let n = fns.length;

  if (n < 2) {
    throw new Error('You must provide at least two functions to compose.');
  }

  while (--n >= 0) {
    if (typeof fns[n] !== 'function') {
      throw new TypeError('The composeAsync function only accepts functions as arguments.');
    }
  }

  const size = fns.length - 1;
  const last = fns[size];
  const next = (context, index) => result => fns[index].call(context, result);

  function composed() {
    let promise = Promise.resolve().then(() => last.apply(this, arguments));
    let i = size;

    while (--i >= 0) promise = promise.then(next(this, i));
    return promise;
  }

  // So we can apply function transformations to async composed functions,
  // we stash the arity here. For example, currying an async composed function.
  composed[ARITY] = last[ARITY] !== undefined ? last[ARITY] : last.length;
  return composed;
}
