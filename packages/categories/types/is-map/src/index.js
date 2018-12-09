import is from '@foldr/is';

/**
 * Determines if the given value is an instance of Map.
 *
 * @name isMap
 * @param {any} thing The value to check.
 * @returns {boolean} True if `thing` is a Map object, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isMap } from '@foldr/all';
 *
 * isMap(new Map());  // => true
 * isMap('foo');      // => false
 */
export default typeof Map === 'function' ? is(Map) : /* istanbul ignore next */ () => false;
