module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: x => foldr.values(x),
    lodash: x => lodash.values(x),
    ramda: x => ramda.values(x),
  };

  return [
    {
      name: 'Gets Values (Null)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      tests,
      setup: () => null,
    },
    {
      name: 'Gets Values (Array)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      tests,
      setup: () => [1, 2, 3],
    },
    {
      name: 'Gets Values (Array, Large)',
      expect: (result, { deepEqual }) => deepEqual(result, new Array(10000).fill(1)),
      tests,
      setup: () => new Array(10000).fill(1),
    },
    {
      name: 'Gets Values (Empty Array)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      tests,
      setup: () => [],
    },
    {
      name: 'Gets Values (Object)',
      expect: (result, { deepEqual }) => deepEqual(result, ['bar', 'quxx']),
      tests,
      setup: () => ({ foo: 'bar', baz: 'quxx' }),
    },
    {
      name: 'Gets Values (String)',
      expect: (result, { deepEqual }) => deepEqual(result, ['f', 'o', 'o', 'b', 'a', 'r']),
      tests,
      setup: () => 'foobar',
    },
  ];
};
