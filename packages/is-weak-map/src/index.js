/**
 * Exports the `isWeakMap` function.
 * @since 10/28/18
 * @file
 */

import is from '@foldr/is';

/**
 * Determines if the given item is an instance of WeakMap.
 *
 * @name isWeakMap
 * @param {any} thing The value to check.
 * @returns {boolean} True if `thing` is a WeakMap object, false otherwise.
 *
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * isWeakMap(new WeakMap());  // => true
 * isWeakMap('foo');          // => false
 */
export default typeof WeakMap === 'function' ? is(WeakMap) : /* istanbul ignore next */ () => false;
