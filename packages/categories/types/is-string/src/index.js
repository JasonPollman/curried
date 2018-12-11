import is from '@foldr/is';

const isStringObject = is(String);

/**
 * Determines if the given value is a string.
 *
 * @name isString
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is a string, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isString } from '@foldr/all';
 *
 * isString('foo'); // => true
 * isString('');    // => true
 * isString(100);   // => false
 */
export default function isString(x) {
  return typeof x === 'string' || isStringObject(x);
}
