/**
 * Exports the `isSet` function.
 * @since 10/28/18
 * @file
 */

import is from '@foldr/is';

/**
 * Determines if the given item is an instance of Set.
 *
 * @name isSet
 * @param {any} thing The value to check.
 * @returns {boolean} True if `thing` is a Set object, false otherwise.
 *
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * isSet(new Set());  // => true
 * isSet('foo');      // => false
 */
export default typeof Set === 'function' ? is(Set) : /* istanbul ignore next */ () => false;
