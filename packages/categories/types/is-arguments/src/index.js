import toStringTag from '@foldr/to-string-tag';

/**
 * Determines is `x` is an Arguments object.
 *
 * @name isArguments
 * @param {any} x The thing to check.
 * @returns {boolean} True if `x` is an Arguments object, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isArguments } from '@foldr/all';
 *
 * (function () {
 *   return isArguments(arguments);
 * }());
 * // => true
 *
 * isArguments([]);     // => false
 * isArguments('foo');  // => false
 */
export default function isArguments(x) {
  return !!x && toStringTag(x) === '[object Arguments]';
}
