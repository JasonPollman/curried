import map from '@foldr/map';

const toTupleIteratee = (value, key) => [key, value];

/**
 * Creates an array of key/value tuples from the given collection.
 *
 * @name toPairs
 * @param {Array|Object|String|Map|Set|Arguments} collection The collection to convert to pairs.
 * @returns {Array} An array of tuples where the first item is the key from `collection` and
 * the second is its corresponding value.
 *
 * @arity 1
 * @category collection
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { toPairs } from '@foldr/all';
 *
 * toPairs({
 *   foo: 1,
 *   bar: 2,
 *   baz: 3,
 * });
 * // => [['foo', 1], ['bar', 2], ['baz', 3]]
 */
export default function toPairs(collection) {
  return map(collection, toTupleIteratee);
}
