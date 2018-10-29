/**
 * Exports the `get` function.
 * @since 9/25/18
 * @file
 */

import isString from '@foldr/is-string';
import isObject from '@foldr/is-object';

/**
 * Used to split paths.
 * @type {RegExp}
 * \]\.   => foo[1].bar
 *                ^^
 * \]\[   => foo[1][10]
 *                ^^
 * [[\].] => foo.bar[1]
 *              ^   ^ ^
 */
const PATH_SPLITTER = /\]\.|\]\[|[[\].]/g;

/**
 * Traverses an object tree until the `prop` array is empty.
 * @param {Object} object The object to traverse.
 * @param {Array<string>} props The list of properties to traverse down on
 * `object` until finding the last one.
 * @returns {any} The value of `props.join('.')`, as per traversing the tree.
 */
function traverseObject(object, props) {
  const size = props.length;

  let i = 0;
  let current = object;

  while (i < size) {
    current = current[props[i]];
    if (i++ !== size - 1 && !isObject(current)) return undefined;
  }

  return current;
}

/**
 * Walks the given object or string and finds the property
 * defined by `path`, which is a "path string" in the format:
 * `foo.bar.baz`, `foo[1].bar`, `foo[bar][baz]`.
 * @param {Object|Array|String} thing The thing to "get" from.
 * @param {string} path The path of the property to get.
 * @param {any=} fallback The fallback value if `undefined`
 * is returned from the lookup.
 * @returns {any} The value from thing at the given path.
 * @category object
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @export
 * @example
 * const thing = { foo: [{ bar: 1 }, { bar: 2 }, { bar: 3 }]};
 * get(thing, 'foo');             // => [{ bar: 1 }, { bar: 2 }, { bar: 3 }]
 * get(thing, 'foo[0]');          // => { bar: 1 }
 * get(thing, 'foo[0].bar');      // => 1
 * get(thing, 'foo[0].bar.baz');  // => undefined
 *
 * // Using a fallback value if the item at path doesn't exist or is undefined.
 * get(thing, 'foo.xxx', 'fallback'); // => 'fallback'
 */
export default function get(thing, path, fallback = undefined) {
  if (path == null || path === '') return fallback;

  const isAStringThing = isString(thing);
  if (!isAStringThing && !isObject(thing)) return fallback;

  const props = path.toString().split(PATH_SPLITTER).filter(Boolean);

  // Can't traverse more than one level deep on a string.
  if (isAStringThing && props.length > 1) return fallback;

  const result = props.length !== 1
    ? traverseObject(thing, props)
    : thing[props[0]];

  return result === undefined ? fallback : result;
}
