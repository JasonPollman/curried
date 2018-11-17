/**
 * Exports the `isString` function.
 * @since 10/14/18
 * @file
 */

import toStringTag from '@foldr/to-string-tag';
import { IS_NODE } from '@foldr/internal-env';

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
 * Constant false function.
 * @returns {boolean} The literal `false`.
 */
const F = () => false;
const isCheck = IS_NODE ? isNodeCheck : /* istanbul ignore next */ isBrowserCheck;

/**
 * Determines if the given value is an instance of `Constructor`.
 * @param {function} Constructor The constructor to test for membership of.
 * @param {any} value The value to test.
 * @returns {boolean} True if `value` is a `Constructor` instance, false otherwise.
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * is(Object, {});    // => true
 * is(String, 'foo'); // => true
 * is(String, {});    // => false
 *
 * // Note, `is` is curried.
 * class Point {
 *   constructor(x, y) {
 *      this.x = x;
 *      this.y = y;
 *   }
 * }
 *
 * const isPoint = is(Point);
 *
 * isPoint(new Point(0, 1)); // => true
 * isPoint({});              // => false
 */
export default function is(Constructor, value) {
  const isValidConstructor = typeof Constructor === 'function';

  // For performance reasons, simulating curry here.
  if (arguments.length > 1) return isValidConstructor ? isCheck(Constructor, value) : false;
  if (!isValidConstructor) return F;

  return function isConstructorInstance(x) {
    return isCheck(Constructor, x);
  };
}
