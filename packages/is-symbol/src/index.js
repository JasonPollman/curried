/**
 * Exports the `isSymbol` function.
 * @since 10/28/18
 * @file
 */

import is from '@foldr/is';

/**
 * Determines if the given item is an instance of Symbol.
 * @param {any} thing The value to check.
 * @returns {boolean} True if `thing` is a Symbol object, false otherwise.
 * @category types
 * @memberof foldr
 * @since v0.0.0
 * @export
 */
export default typeof Symbol === 'function' ? is(Symbol) : /* istanbul ignore next */ () => false;
