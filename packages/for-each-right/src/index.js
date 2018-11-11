/**
 * Exports the `forEachRight` function.
 * @since 11/10/18
 * @file
 */

import IteratorFactory from '@foldr/internal-iterator';

export default IteratorFactory({
  reverse: true,
  ResultsConstructor: () => undefined,
  iterateeHandler: (results, iteratee, i, value, key, collection) => {
    iteratee(value, key, collection);
  },
});
