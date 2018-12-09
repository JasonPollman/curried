module.exports = ({
  fp,
  foldr,
  ramda,
}) => {
  const double = x => x * x;

  const tests = {
    foldr: input => foldr.mapValuesFx(double, input),
    lodash: input => fp.mapValues(double, input),
    ramda: input => ramda.map(double, input),
  };

  return [
    {
      name: 'Maps Values (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, { a: 1, b: 4, c: 9 }),
      setup: () => ({
        a: 1,
        b: 2,
        c: 3,
      }),
      tests,
    },
    {
      name: 'Maps Values (Shorthand, Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, { a: 'a', b: 'b', c: 'c' }),
      setup: () => ({
        a: { name: 'a' },
        b: { name: 'b' },
        c: { name: 'c' },
      }),
      tests: {
        foldr: input => foldr.mapValuesFx('name', input),
        lodash: input => fp.mapValues('name', input),
      },
    },
  ];
};
