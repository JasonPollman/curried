import cloneDepth from '@foldr/clone-depth';

/**
 * Deeply clones an object.
 *
 * This method is a convenience method for [cloneDepth](#clone-depth),
 * with the `depth` set to `Infinity`.
 *
 * @name cloneDeep
 * @param {any} x The item to clone.
 * @returns {any} The cloned version of `x`.
 *
 * @arity 1
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { cloneDeep } from '@foldr/all';
 *
 * cloneDeep('foo');
 * // => 'foo'
 *
 * cloneDeep({ foo: 'bar' });
 * // => A clone of { foo: 'bar' }
 *
 * const object = {
 *   x: {
 *     y: {
 *       z: {},
 *     },
 *   },
 * };
 *
 * const cloned = cloneDeep(object);
 * // => cloned !== object
 * // => cloned.x !== object.x
 * // => cloned.x.y !== object.x.y
 * // => cloned.x.y.z !== object.x.y.z
 */
export default function cloneDeep(x) {
  return x && cloneDepth(x, Infinity);
}
