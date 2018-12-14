import toStringTag from '@foldr/to-string-tag';
import isObjectLike from '@foldr/is-object-like';
import { IS_NODE } from '@foldr/internal-env';

const { getPrototypeOf } = Object;

/**
 * Determines if `x`'s constructor is `Object`.
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is an instance of Object.
 * @export
 */
export function hasObjectConstructorNode(x) {
  return x.constructor === Object;
}

/**
 * Determines if `x`'s constructor is `Object`.
 * This version is for browsers, and works cross-frame.
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is an instance of Object.
 * @export
 */
export function hasObjectConstructorBrowser(x) {
  return x.constructor === Object || toStringTag(x) === '[object Object]';
}

const hasObjectConstructor = IS_NODE
  ? hasObjectConstructorNode
  /* istanbul ignore next */
  : hasObjectConstructorBrowser;

/**
 * Determines if the given value is a "plain object". That is, an object
 * that is a direct (non-inherited) instance of the Object class.
 *
 * @name isPlainObject
 * @param {any} x The value to determine whether or not it's a plain object.
 * @returns {boolean} True if `x` is a plain object, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isPlainObject } from '@foldr/all';
 *
 * isPlainObject({});                  // => true
 * isPlainObject([]);                  // => true
 * isPlainObject(() => {});            // => false
 * isPlainObject('foo');               // => false
 * isPlainObject(new class Foo{}());   // => false
 * isPlainObject(Object.create(null)); // => true
 */
export default function isPlainObject(x) {
  return isObjectLike(x) && (hasObjectConstructor(x) || getPrototypeOf(x) === null);
}
