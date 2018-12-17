import forEach from '@foldr/for-each';

/**
 * Combines the properties of objects together like Object#assign, but doesn't mutate
 * any of the input collections.
 *
 * This is similar to using the spread operator `{ ...x, ...y }`, except that
 * it works more generically (with Maps and Objects, for example) and guards
 * against bad input.
 *
 * **Note, properties will be applied left to right.**
 * Properties in subsequent objects will overwrite previous ones.
 *
 * @name props
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
 * import { props } from '@foldr/all';
 *
 * props({ x: 1 }, { y: 2 }); // => { x: 1, y: 2 }
 * props('foo', ['F']);       // => { 0: 'F', 1: 'o', 2: 'o' }
 */
export default function props() {
  const results = {};
  const assign = (value, key) => { results[key] = value; };

  const args = arguments;
  const size = args.length;

  let i = 0;
  while (i < size) forEach(args[i++], assign);
  return results;
}
