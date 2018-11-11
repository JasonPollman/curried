/**
 * Exports the `some` function.
 * @since 11/10/18
 * @file
 */

import IteratorFactory, { BREAK } from '@foldr/internal-iterator';

/* eslint-disable no-param-reassign */

export default IteratorFactory({
  unwrap: results => results[0],
  Results: () => [false],
  handler: (results, iteratee, i, value, key, collection) => {
    if (!iteratee(value, key, collection)) return undefined;
    results[0] = true;
    return BREAK;
  },
});
