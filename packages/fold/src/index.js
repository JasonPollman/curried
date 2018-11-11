/**
 * Exports the `fold` function.
 * @since 11/10/18
 * @file
 */

import IteratorFactory from '@foldr/internal-iterator';

/* eslint-disable no-param-reassign */

export default IteratorFactory({
  inject: true,
  unwrap: results => results[0],
  Results: x => [x],
  handler: (results, iteratee, i, value, key, collection) => {
    results[0] = iteratee(results[0], value, key, collection);
  },
});
