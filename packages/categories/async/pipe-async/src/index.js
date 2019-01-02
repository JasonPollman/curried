import SafeSymbolFor from '@foldr/internal-symbol';

/* eslint-disable require-jsdoc */

/**
 * Used to track the arity of composed functions.
 * @type {SafeSymbol}
 */
export const ARITY = SafeSymbolFor('source-arity');

/**
 * Pipes promise returning functions.
 *
 * This function is similar to [pipe](#pipe), except that it works
 * for promise returning functions.
 *
 * You can combine synchronous and asynchronous functions, but `pipeAsync`
 * will always return a Promise object.
 *
 * @name pipeAsync
 * @param {...function} functions The promise returning functions to pipe.
 * @returns {function} The composite async function.
 *
 * @arity Infinity
 * @category async
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { pipeAsync } from '@foldr/all';
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
 * const getAndPrintUserName = pipeAsync(
 *   getUserRecordWithId,
 *   formatUserName,
 * );
 *
 * getAndPrintUserName();
 * // => 'Will Smith'
 *
 */
export default function pipeAsync() {
  const fns = arguments;
  let n = fns.length;

  if (n < 2) {
    throw new Error('You must provide at least two functions to pipe.');
  }

  while (--n >= 0) {
    if (typeof fns[n] !== 'function') {
      throw new TypeError('The pipeAsync function only accepts functions as arguments.');
    }
  }

  const size = fns.length;
  const first = fns[0];
  const next = (context, index) => result => fns[index].call(context, result);

  function piped() {
    let promise = Promise.resolve().then(() => first.apply(this, arguments));
    let i = 1;

    while (i < size) promise = promise.then(next(this, i++));
    return promise;
  }

  // So we can apply function transformations to async piped functions,
  // we stash the arity here. For example, currying an async piped function.
  piped[ARITY] = first[ARITY] !== undefined ? first[ARITY] : first.length;
  return piped;
}
