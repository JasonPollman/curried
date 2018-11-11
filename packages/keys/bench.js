module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: x => foldr.keys(x),
    rambda: x => rambda.keys(x),
    lodash: x => lodash.keys(x),
  };

  return [
    {
      name: 'Gets Keys',
      expect: (result, { deepEqual }) => deepEqual(result, ['0', '1', '2']),
      tests,
      setup: () => [1, 2, 3],
    },
    {
      name: 'Gets Keys (2)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      tests,
      setup: () => [],
    },
    {
      name: 'Gets Keys (3)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      tests,
      setup: () => null,
    },
    {
      name: 'Gets Keys (4)',
      expect: (result, { deepEqual }) => deepEqual(result, ['0', '1', '2']),
      tests,
      setup: () => 'bar',
    },
    {
      name: 'Gets Keys (5)',
      expect: (result, { deepEqual }) => deepEqual(result, ['foo', 'baz']),
      tests,
      setup: () => ({ foo: 'bar', baz: 'quxx' }),
    },
  ];
};
