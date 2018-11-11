/**
 * Exports the `filter` function.
 * @since 11/10/18
 * @file
 */

import IteratorFactory from '@foldr/internal-iterator';

export default IteratorFactory({
  ResultsConstructor: Array,
  iterateeHandler: (results, iteratee, i, value, key, collection) => {
    const retained = iteratee(value, key, collection);
    if (retained) results[results.length] = value; // eslint-disable-line no-param-reassign
  },
});
