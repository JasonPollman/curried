import isArray from '@foldr/is-array';

/**
 * Concatenates all arguments into a single joined array.
 *
 * @param {...Array} items Any length of arguments to concatenate.
 * @returns {Array} The concatenated array.
 *
 * @arity Infinity
 * @category array
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { concat } from '@foldr/all';
 *
 * concat([1, 2, 3], [4, 5, 6]);   // => [1, 2, 3, 4, 5, 6]
 * concat(null, [4, 5, 6]);        // => [null, 4, 5, 6]
 * concat([4, 5, 6], undefined);   // => [4, 5, 6, undefined]
 * concat();                       // => []
 */
export default function concat() {
  const args = arguments;
  const size = args.length;
  const results = [];

  let n = 0;
  let i = 0;

  while (i < size) {
    const item = args[i++];

    if (isArray(item)) {
      const subSize = item.length;
      let subLen = -1;

      while (++subLen < subSize) {
        results[n++] = item[subLen];
      }
    } else {
      results[n++] = item;
    }
  }

  return results;
}
