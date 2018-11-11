/**
 * Exports the `forEach` function.
 * @since 11/10/18
 * @file
 */

import IteratorFactory from '@foldr/internal-iterator';

export default IteratorFactory({
  Results: () => undefined,
  handler: (results, iteratee, i, value, key, collection) => {
    iteratee(value, key, collection);
  },
});
