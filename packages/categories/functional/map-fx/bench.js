module.exports = ({
  fp,
  foldr,
  ramda,
}) => {
  const double = x => x * 2;

  const tests = {
    foldr: input => foldr.mapFx(double, input),
    lodash: input => fp.map(double, input),
    ramda: input => ramda.map(double, input),
  };

  return [
    {
      name: 'Maps an Array (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, [2, 4, 6]),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Maps Invalid (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => null,
      tests,
    },
    {
      name: 'Maps a String (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, ['aa', 'bb', 'cc']),
      setup: () => 'abc',
      tests: {
        foldr: input => foldr.mapFx(x => `${x}${x}`, input),
        lodash: input => fp.map(x => `${x}${x}`, input),
        ramda: input => ramda.map(x => `${x}${x}`, input),
      },
    },
    {
      name: 'Maps an Object (Functional)',
      expect: (result, { deepEqual }, library) => (library === 'ramda'
        ? deepEqual(result, { foo: 2, bar: 4, baz: 6 })
        : deepEqual(result, [2, 4, 6])
      ),
      setup: () => ({ foo: 1, bar: 2, baz: 3 }),
      tests,
    },
  ];
};
