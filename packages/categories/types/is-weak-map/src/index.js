import is from '@foldr/is';

/**
 * Determines if the given value is an instance of WeakMap.
 *
 * @name isWeakMap
 * @param {any} thing The value to check.
 * @returns {boolean} True if `thing` is a WeakMap object, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isWeakMap } from '@foldr/all';
 *
 * isWeakMap(new WeakMap());  // => true
 * isWeakMap('foo');          // => false
 */
export default typeof WeakMap === 'function' ? is(WeakMap) : /* istanbul ignore next */ () => false;
