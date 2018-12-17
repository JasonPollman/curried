import forEach from '@foldr/for-each';

/**
 * Combines the properties of objects together like Object#assign, but doesn't mutate
 * any of the input collections.
 *
 * This is similar to [props](#props), except that it assigns from right to left.
 * Properties in subsequent objects will be overwritten by previous ones.
 *
 * Some libaries call this `defaults`.
 *
 * @name propsRight
 * @param {...Array|Object|String|Map|Set|Arguments} collections The collections
 * to combine the properties of into a single object.
 * @returns {Object} The results of combining `collections`' properties.
 *
 * @arity Infinity
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { propsRight } from '@foldr/all';
 *
 * propsRight({ x: 1 }, { y: 2 });       // => { x: 1, y: 2 }
 * propsRight({ x: 5 }, { x: 1, y: 2 }); // => { x: 5, y: 2 }
 * propsRight('foo', ['F']);             // => { 0: 'f', 1: 'o', 2: 'o' }
 */
export default function propsRight() {
  const results = {};
  const assign = (value, key) => { results[key] = value; };

  const args = arguments;
  const size = args.length;

  let i = size - 1;
  while (i >= 0) forEach(args[i--], assign);
  return results;
}
