/**
 * Exports the `get` function.
 * @since 9/25/18
 * @file
 */

import toPath from '@foldr/to-path';

/**
 * Walks the given object or string and finds the property
 * defined by `path`, which is a "path string" in the format:
 * `foo.bar.baz`, `foo[1].bar`, `foo[bar][baz]`.
 * @param {Object|Array|String} object The thing to "get" from.
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
 *
 * const thing = { foo: [{ bar: 1 }, { bar: 2 }, { bar: 3 }]};
 * get(thing, 'foo');             // => [{ bar: 1 }, { bar: 2 }, { bar: 3 }]
 * get(thing, 'foo[0]');          // => { bar: 1 }
 * get(thing, 'foo[0].bar');      // => 1
 * get(thing, 'foo[0].bar.baz');  // => undefined
 *
 * // Using a fallback value if the item at path doesn't exist or is undefined.
 * get(thing, 'foo.xxx', 'fallback'); // => 'fallback'
 */
export default function get(object, path, fallback) {
  const props = toPath(path);
  const size = props.length;

  if (!size || !object) return fallback;

  let current = object;
  let i = 0;

  if (size === 1) {
    current = object[props[0]];
  } else {
    while (i < size && current != null) {
      current = current[props[i++]];
    }
  }

  return current === undefined ? fallback : current;
}
