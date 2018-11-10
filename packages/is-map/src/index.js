/**
 * Exports the `isMap` function.
 * @since 10/28/18
 * @file
 */

import is from '@foldr/is';

/**
 * Determines if the given item is an instance of Map.
 * @param {any} thing The value to check.
 * @returns {boolean} True if `thing` is a Map object, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 *
 * isMap(new Map());  // => true
 * isMap('foo');      // => false
 */
export default typeof Map === 'function' ? is(Map) : /* istanbul ignore next */ () => false;
