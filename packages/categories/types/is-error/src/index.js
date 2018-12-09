import is from '@foldr/is';

/**
 * Determines if the given value is an instance of `Error`.
 *
 * @name isError
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is an Error object, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isError } from '@foldr/all';
 *
 * isError(new Error());  // => true
 * isError('foo');        // => false
 */
export default is(Error);
