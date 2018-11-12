module.exports = ({ foldr, lodash }) => {
  const upperCase = (x, y) => y.toUpperCase();

  const tests = {
    foldr: input => foldr.mapKeys(input, upperCase),
    lodash: input => lodash.mapKeys(input, upperCase),
  };

  return [
    {
      name: 'Maps Keys',
      expect: (result, { deepEqual }) => deepEqual(result, { A: 1, B: 2, C: 3 }),
      setup: () => ({
        a: 1,
        b: 2,
        c: 3,
      }),
      tests,
    },
    {
      name: 'Maps Keys (Null)',
      expect: (result, { deepEqual }) => deepEqual(result, {}),
      setup: () => null,
      tests,
    },
    {
      name: 'Maps Keys (Shorthand)',
      expect: (result, { deepEqual }) => deepEqual(result, {
        A: { name: 'A' },
        B: { name: 'B' },
        C: { name: 'C' },
      }),
      setup: () => ({
        a: { name: 'A' },
        b: { name: 'B' },
        c: { name: 'C' },
      }),
      tests: {
        foldr: input => foldr.mapKeys(input, 'name'),
        lodash: input => lodash.mapKeys(input, 'name'),
      },
    },
  ];
};
