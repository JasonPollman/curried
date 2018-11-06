/**
 * Exports the `isString` function.
 * @since 10/14/18
 * @file
 */

import curry from '@foldr/internal-curry';
import toStringTag from '@foldr/to-string-tag';
import { IS_NODE } from '@foldr/internal-env';

/**
 * Base wrapper for is check.
 * @param {function} check Either the `isNodeCheck` or `isBrowserCheck` function below.
 * @returns {boolean} True if `thing` is a `Constructor` instance, false otherwise.
 */
function withValidConstructor(check) {
  return function is(Constructor, x) {
    return typeof Constructor === 'function' ? check(Constructor, x) : false;
  };
}

/**
 * Determines if `x` is an instance of `Constructor`.
 * @param {function} Constructor The constructor to test membership of.
 * @param {any} x The thing to test.
 * @returns {boolean} True if `thing` is a `Constructor` instance, false otherwise.
 */
export function isNodeCheck(Constructor, x) {
  return x != null && (x.constructor === Constructor || x instanceof Constructor);
}

/**
 * Determines if `x` is an instance of `Constructor`.
 * This version is for browsers and works cross-frame.
 * @param {function} Constructor The constructor to test membership of.
 * @param {any} x The thing to test.
 * @returns {boolean} True if `thing` is a `Constructor` instance, false otherwise.
 */
export function isBrowserCheck(Constructor, x) {
  return isNodeCheck(Constructor, x) || toStringTag(x) === `[object ${Constructor.name}]`;
}

/**
 * Determines if `thing` is an instance of `Constructor`.
 * @param {function} Constructor The constructor to test for membership of.
 * @param {any} thing The thing to test.
 * @returns {boolean} True if `thing` is a `Constructor` instance, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default curry(
  withValidConstructor(IS_NODE ? isNodeCheck : /* istanbul ignore next */ isBrowserCheck),
);
