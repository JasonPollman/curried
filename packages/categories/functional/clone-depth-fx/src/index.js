import fmake from '@foldr/internal-fmake';
import cloneDepth from '@foldr/clone-depth';

/**
 * **Functional, autocurried version of [cloneDepth](#clone-depth).**
 *
 * Clones an object to the specified level of depth.
 *
 * @name cloneDepthFx
 * @param {number} [depth=0] The maximum depth to clone to. A `maxDepth` of zero
 * will clone only the given item, a max depth of 1 will clone an object and all it's children, etc.
 * @param {any} x The item to clone.
 * @returns {any} The cloned version of `x`.
 *
 * @arity 2
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { cloneDepth } from '@foldr/all';
 *
 * cloneDepth('foo');
 * // => 'foo'
 *
 * cloneDepth(0)({ foo: 'bar' });
 * // => Shallow copy of { foo: 'bar' }
 *
 * const object = {
 *   x: {
 *     y: {
 *       z: {},
 *     },
 *   },
 * };
 *
 * const cloned = cloneDepth(2)(object);
 * // => cloned !== object
 * // => cloned.x !== object.x
 * // => cloned.x.y !== object.x.y
 * // => cloned.x.y.z === object.x.y.z
 */
export default fmake(cloneDepth, {
  arity: 2,
  signature: [1, 0],
});
