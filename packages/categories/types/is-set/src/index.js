import is from '@foldr/is';

/**
 * Determines if the given value is an instance of `Set`.
 *
 * @name isSet
 * @param {any} thing The value to check.
 * @returns {boolean} True if `thing` is a Set object, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isSet } from '@foldr/all';
 *
 * isSet(new Set());  // => true
 * isSet('foo');      // => false
 */
export default typeof Set === 'function' ? is(Set) : /* istanbul ignore next */ () => false;
