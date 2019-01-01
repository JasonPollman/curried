module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: x => foldr.keys(x),
    ramda: x => ramda.keys(x),
    lodash: x => lodash.keys(x),
  };

  const largeResultsSet = [];
  for (let i = 0; i < 10000; i++) largeResultsSet[i] = i;

  return [
    {
      name: 'Gets Keys (Array, 1)',
      expect: (result, { deepEqual }) => deepEqual(result, ['0', '1', '2']),
      tests,
      setup: () => [1, 2, 3],
    },
    {
      name: 'Gets Keys (Array, 2)',
      expect: (result, { deepEqual }) => deepEqual(result, ['0', '1', '2', '3', '4', '5']),
      tests,
      setup: () => [1, 2, 3, 4, 5, 6],
    },
    {
      name: 'Gets Keys (Large)',
      expect: (result, { deepEqual }) => deepEqual(result, largeResultsSet),
      tests,
      setup: () => new Array(10000).fill(1),
    },
    {
      name: 'Gets Keys (Empty)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      tests,
      setup: () => [],
    },
    {
      name: 'Gets Keys (Null)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      tests,
      setup: () => null,
    },
    {
      name: 'Gets Keys (String)',
      expect: (result, { deepEqual }) => deepEqual(result, ['0', '1', '2']),
      tests,
      setup: () => 'bar',
    },
    {
      name: 'Gets Keys (Object)',
      expect: (result, { deepEqual }) => deepEqual(result, ['foo', 'baz']),
      tests,
      setup: () => ({ foo: 'bar', baz: 'quxx' }),
    },
  ];
};
