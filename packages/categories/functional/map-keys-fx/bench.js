module.exports = ({ fp, foldr }) => {
  const identity = x => x.toUpperCase();

  const tests = {
    foldr: input => foldr.mapKeysFx(identity, input),
    lodash: input => fp.mapKeys(identity, input),
  };

  return [
    {
      name: 'Maps Keys (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, { A: 1, B: 2, C: 3 }),
      setup: () => ({
        a: 1,
        b: 2,
        c: 3,
      }),
      tests,
    },
    {
      name: 'Maps Keys (Shorthand, Functional)',
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
        foldr: input => foldr.mapKeys.f('name', input),
        lodash: input => fp.mapKeys('name', input),
      },
    },
  ];
};
