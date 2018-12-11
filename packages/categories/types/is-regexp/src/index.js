import is from '@foldr/is';

/**
 * Determines if the given value is an instance of RegExp.
 *
 * @name isRegExp
 * @param {any} thing The value to check.
 * @returns {boolean} True if `thing` is a RegExp object, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isRegExp } from '@foldr/all';
 *
 * isRegExp(/^foo$/i);             // => true
 * isRegExp(new RegExp('.*bar$')); // => true
 * isRegExp('string');             // => false
 */
export default is(RegExp);
