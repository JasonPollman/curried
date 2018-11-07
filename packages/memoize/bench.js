module.exports = ({ foldr, lodash }) => {
  const identity = x => x;
  const sum = (x, y) => x + y;

  const fidentity = foldr.memoize(identity, x => x[0]);
  const lidentity = lodash.memoize(identity);

  const fsum = foldr.memoize(sum);
  const lsum = lodash.memoize(sum, (a, b) => JSON.stringify({ 0: a, 1: b }));

  return [
    {
      name: 'Memoizes Identity',
      expect: (result, { deepEqual }) => deepEqual(result, 5),
      tests: {
        foldr: () => fidentity(5),
        lodash: () => lidentity(5),
      },
    },
    {
      name: 'Memoizes Sum',
      expect: (result, { deepEqual }) => deepEqual(result, 3),
      tests: {
        foldr: () => fsum(1, 2),
        lodash: () => lsum(1, 2),
      },
    },
    {
      name: 'Memoize Function Creation',
      expect: (result, assert) => assert(typeof result === 'function'),
      setup: () => x => x * 2,
      tests: {
        foldr: input => foldr.memoize(input),
        lodash: input => lodash.memoize(input),
      },
    },
  ];
};