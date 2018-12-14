import is from '@foldr/is';

/**
 * Determines if the given value is an instance of `Date`.
 *
 * @name isDate
 * @param {any} thing The value to check.
 * @returns {boolean} True if `thing` is a Date object, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isDate } from '@foldr/all';
 *
 * isDate(new Date());  // => true
 * isDate('foo');       // => false
 */
export default is(Date);
