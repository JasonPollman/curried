import keys from '@foldr/keys';
import isObject from '@foldr/is-object';

/**
 * Recursively walks an object.
 * @param {object} thing The thing to walk.
 * @param {function} invokee A function to execute for each property of `thing`.
 * @param {Array<string>} path The current "parent" path of thing respective to its parent.
 * @param {Set} visited Cache for preventing circular recursion.
 * @returns {undefined}
 */
function recursivelyWalk(thing, invokee, path, visited) {
  const props = keys(thing);
  const size = props.length;
  const pathSize = path.length;

  let i = 0;
  let n;
  let k;

  let subpath;
  let current;

  while (i < size) {
    n = pathSize;
    k = props[i++];

    current = thing[k];

    // Have to shallow copy this at each iteration to prevent mutation side-effects.
    // Or maybe just freeze it in the future for performance, eh?
    subpath = new Array(n + 1);
    subpath[n] = k;

    while (--n >= 0) subpath[n] = path[n];

    if (visited && isObject(current) && !visited.has(current)) {
      visited.add(current);
      recursivelyWalk(current, invokee, subpath, visited);
    } else {
      invokee(current, subpath);
    }
  }
}

/**
 * Recursively walks an object, invoking `invokee` for each non-object property
 * of `object`.
 *
 * Note: `invokee` is called with two arguments:
 * 1. The current value of the property belonging to the object being iterated over.
 * 2. An array of the "path" to that property.
 *
 * @name walk
 * @param {Object} object The object to "walk".
 * @param {function} invokee The function to invoke for each property of `object`.
 * @returns {undefined}
 *
 * @arity 2
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { walk } from '@foldr/all';
 *
 * const object = { foo: 1, bar: 2 };
 *
 * let total = 0;
 * walk(object, x => { total += x; });
 *
 * // total === 3
 * // Note this will recurisively walk an object...
 *
 * const object = {
 *   foo: 1,
 *   bar: {
 *     baz: 3,
 *     quxx: 4,
 *   }
 * };
 *
 * let sum = 0;
 *
 * walk(object, (value, path) => {
 *   // Path is an array to the path of `value` from `object`.
 *   // For example, if the value is `4`, the path would be ['bar', 'quxx']
 *   sum += value;
 * });
 *
 * // total === 8
 */
export default function walk(object, invokee) {
  if (!object || typeof invokee !== 'function') return;
  recursivelyWalk(object, invokee, [], isObject(object) ? new Set() : null);
}
