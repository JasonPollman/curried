module.exports = ({
  foldr,
  ramda,
  lodash,
}) => {
  const double = x => x * x;

  const tests = {
    foldr: input => foldr.mapValues(input, double),
    lodash: input => lodash.mapValues(input, double),
    ramda: input => ramda.map(double, input),
  };

  return [
    {
      name: 'Maps Values',
      expect: (result, { deepEqual }) => deepEqual(result, { a: 1, b: 4, c: 9 }),
      setup: () => ({
        a: 1,
        b: 2,
        c: 3,
      }),
      tests,
    },
    {
      name: 'Maps Values (Null)',
      expect: (result, { deepEqual }) => deepEqual(result, {}),
      setup: () => null,
      tests,
    },
    {
      name: 'Maps Values (Shorthand)',
      expect: (result, { deepEqual }) => deepEqual(result, { a: 'a', b: 'b', c: 'c' }),
      setup: () => ({
        a: { name: 'a' },
        b: { name: 'b' },
        c: { name: 'c' },
      }),
      tests: {
        foldr: input => foldr.mapValues(input, 'name'),
        lodash: input => lodash.mapValues(input, 'name'),
      },
    },
  ];
};
