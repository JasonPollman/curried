module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: x => foldr.values(x),
    lodash: x => lodash.values(x),
    ramda: x => ramda.values(x),
  };

  return [
    {
      name: 'Gets Values (1)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      tests,
      setup: () => null,
    },
    {
      name: 'Gets Values (2)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      tests,
      setup: () => [1, 2, 3],
    },
    {
      name: 'Gets Values (3)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      tests,
      setup: () => [],
    },
    {
      name: 'Gets Values (4)',
      expect: (result, { deepEqual }) => deepEqual(result, ['bar', 'quxx']),
      tests,
      setup: () => ({ foo: 'bar', baz: 'quxx' }),
    },
    {
      name: 'Gets Values (5)',
      expect: (result, { deepEqual }) => deepEqual(result, ['f', 'o', 'o', 'b', 'a', 'r']),
      tests,
      setup: () => 'foobar',
    },
  ];
};
