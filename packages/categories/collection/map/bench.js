module.exports = ({ foldr, lodash, ramda }) => {
  const double = x => x * 2;

  const tests = {
    foldr: input => foldr.map(input, double),
    lodash: input => lodash.map(input, double),
    ramda: input => ramda.map(double, input),
  };

  return [
    {
      name: 'Maps an Array',
      expect: (result, { deepEqual }) => deepEqual(result, [2, 4, 6]),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Maps an Array (Large)',
      expect: (result, { deepEqual }) => deepEqual(result, Array(5000).fill(4)),
      setup: () => Array(5000).fill(2),
      tests,
    },
    {
      name: 'Maps Invalid',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => null,
      tests,
    },
    {
      name: 'Maps a String',
      expect: (result, { deepEqual }) => deepEqual(result, ['aa', 'bb', 'cc']),
      setup: () => 'abc',
      tests: {
        foldr: input => foldr.map(input, x => `${x}${x}`),
        lodash: input => lodash.map(input, x => `${x}${x}`),
        ramda: input => ramda.map(x => `${x}${x}`, input),
      },
    },
    {
      name: 'Maps an Object',
      expect: (result, { deepEqual }, library) => (library === 'ramda'
        ? deepEqual(result, { foo: 2, bar: 4, baz: 6 })
        : deepEqual(result, [2, 4, 6])
      ),
      setup: () => ({ foo: 1, bar: 2, baz: 3 }),
      tests,
    },
  ];
};
