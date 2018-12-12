import is from '@foldr/is';

/**
 * Determines if the given value is an instance of `Buffer`.
 *
 * @name isBuffer
 * @param {any} thing The value to check.
 * @returns {boolean} True if `thing` is a Buffer object, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isBuffer } from '@foldr/all';
 *
 * isBuffer(Buffer.from([])); // => true
 * isBuffer({});              // => false
 */
export default typeof Buffer === 'function' ? is(Buffer) : /* istanbul ignore next */ () => false;
