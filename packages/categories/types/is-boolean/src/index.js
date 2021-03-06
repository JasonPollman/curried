import toStringTag from '@foldr/to-string-tag';
import isObjectLike from '@foldr/is-object-like';

/**
 * Determines if the given value is a boolean.
 *
 * @name isBoolean
 * @param {any} x The value to check.
 * @returns {boolean} True if `thing` is a boolean, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isBoolean } from '@foldr/all';
 *
 * isBoolean(true);           // => true
 * isBoolean(false);          // => true
 * isBoolean(new Boolean(1)); // => true
 * isBoolean('foobar');       // => false
 */
export default function isBoolean(x) {
  return x === true || x === false || (isObjectLike(x) && toStringTag(x) === '[object Boolean]');
}
