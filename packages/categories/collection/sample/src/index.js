import random from '@foldr/random';
import values from '@foldr/values';
import isArray from '@foldr/is-array';

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

  const items = isArray(collection) ? collection : values(collection);
  return items[random(items.length - 1)];
}
