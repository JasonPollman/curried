/**
 * Exports the `isWeakMap` function.
 * @since 10/28/18
 * @file
 */

import is from '@foldr/is';

/**
 * Determines if the given item is an instance of WeakMap.
 * @param {any} thing The value to check.
 * @returns {boolean} True if `thing` is a WeakMap object, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default typeof WeakMap === 'function' ? is(WeakMap) : /* istanbul ignore next */ () => false;
