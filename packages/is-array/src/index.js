/**
 * Exports the "isArray" function.
 * @since 10/13/18
 * @file
 */

import toStringTag from '@foldr/to-string-tag';
import { IS_NODE } from '@foldr/internal-env';

/**
 * `isArray` implementation for Node.js.
 * Exporting this for testing purposes only.
 * @param {any} thing The thing to test.
 * @returns {boolean} True if `thing` is an array, false otherwise.
 */
export function isArrayNode(thing) {
  return !!thing && thing instanceof Array;
}

/**
 * `isArray` implementation for non-Node.js environments.
 * Here we have to test the toStringTag since cross-frame
 * instanceof checks won't work.
 * Exporting this for testing purposes only.
 * @param {any} thing The thing to test.
 * @returns {boolean} True if `thing` is an array, false otherwise.
 */
export function isArrayBrowser(thing) {
  return !!thing && (thing instanceof Array || toStringTag(thing) === '[object Array]');
}

/**
 * Determines is `thing` is classified as an Array object.
 * @param {any} thing The thing to check.
 * @returns {boolean} True if thing is an Array object, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default Array.isArray || IS_NODE ? isArrayNode : isArrayBrowser;
