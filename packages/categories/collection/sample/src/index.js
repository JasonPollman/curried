import values from '@foldr/values';
import isArray from '@foldr/is-array';

const rand = Math.random;

/**
 * Gets a random element from the provided collection.
 *
 * @name sample
 * @param {Array|Object|String|Map|Set|Arguments} collection The collection to sample from.
 * @returns {Array} A new array containing the reversed values of `array`.
 *
 * @arity 1
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { sample } from '@foldr/all';
 *
 * const items = ['foo', 'bar', 'baz'];
 * sample(items); // => Either 'foo', 'bar', or 'baz';
 *
 * const point = { x: 1, y: 2 };
 * sample(point); // Either 1 or 2
 *
 * const data = new Map([['a', 1], ['b', 2], ['c', 3]]);
 * sample(data); // => Either 1, 2, or 3
 */
export default function sample(collection) {
  if (!collection) return undefined;

  // eslint-disable-next-line no-param-reassign
  collection = isArray(collection) ? collection : values(collection);
  return collection.length ? collection[(rand() * collection.length) | 0] : undefined;
}
