import cloneDepth from '@foldr/clone-depth';

/**
 * Shallow clones an object.
 *
 * This method is a convenience method for [cloneDepth](#clone-depth),
 * with the `depth` set to `0`.
 *
 * @name clone
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
 * import { clone } from '@foldr/all';
 *
 * clone('foo');
 * // => 'foo'
 *
 * clone({ foo: 'bar' });
 * // => A shallow clone of { foo: 'bar' }
 *
 * const object = {
 *   x: {
 *     y: {
 *       z: {},
 *     },
 *   },
 * };
 *
 * const cloned = clone(object);
 * // => cloned !== object
 * // => cloned.x === object.x
 * // => cloned.x.y === object.x.y
 * // => cloned.x.y.z === object.x.y.z
 */
export default function clone(x) {
  return x && cloneDepth(x, 0);
}