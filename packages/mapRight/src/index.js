/**
 * Exports the `map` function.
 * @since 11/10/18
 * @file
 */

import IteratorFactory from '@foldr/internal-iterator';

export default IteratorFactory({
  reverse: true,
  Results: Array,
  handler: (results, iteratee, i, value, key, collection) => {
    results[i] = iteratee(value, key, collection); // eslint-disable-line no-param-reassign
  },
});
