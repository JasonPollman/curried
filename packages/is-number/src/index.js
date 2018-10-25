/**
 * Exports the `isNumber` function.
 * @since 9/25/18
 * @file
 */

import { IS_NODE } from '@foldr/internal-env';
import toStringTag from '@foldr/to-string-tag';

/**
 * `isNumber` implementation for Node.js.
 * Exporting this for testing purposes only.
 * @param {any} x The thing to test.
 * @returns {boolean} True if `thing` is a number, false otherwise.
 */
export function isNumberNode(x) {
  return typeof x === 'number' || (!!x && x instanceof Number);
}

/**
 * `isNumber` implementation for non-Node.js environments.
 * Here we have to test the toStringTag since cross-frame
 * instanceof checks won't work.
 * Exporting this for testing purposes only.
 * @param {any} x The thing to test.
 * @returns {boolean} True if `thing` is a number, false otherwise.
 */
export function isNumberBrowser(x) {
  return isNumberNode(x) || toStringTag(x) === '[object Number]';
}

/**
 * Determines if the given item is a number.
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is a number, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default IS_NODE ? isNumberNode /* istanbul ignore next */ : isNumberBrowser;
