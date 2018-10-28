/**
 * Exports the `isString` function.
 * @since 10/14/18
 * @file
 */

import { IS_NODE } from '@foldr/internal-env';
import toStringTag from '@foldr/to-string-tag';

/**
 * `isString` implementation for Node.js.
 * Exporting this for testing purposes only.
 * @param {any} x The thing to test.
 * @returns {boolean} True if `thing` is a string, false otherwise.
 */
export function isStringNode(x) {
  return typeof x === 'string' || x instanceof String;
}

/**
 * `isString` implementation for non-Node.js environments.
 * Here we have to test the toStringTag since cross-frame
 * instanceof checks won't work.
 * Exporting this for testing purposes only.
 * @param {any} x The thing to test.
 * @returns {boolean} True if `thing` is a string, false otherwise.
 */
export function isStringBrowser(x) {
  return isStringNode(x) || toStringTag(x) === '[object String]';
}

/**
 * Determines if the given item is a string.
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is a string, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default IS_NODE ? isStringNode : /* istanbul ignore next */ isStringBrowser;
