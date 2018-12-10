module.exports = ({ fp, foldr }) => {
  const tests = {
    foldr: ([input, values]) => foldr.omitFx(values, input),
    lodash: ([input, values]) => fp.omit(values, input),
  };

  return [
    {
      name: 'Omits Values (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, { c: 3 }),
      setup: () => [{ a: 1, b: 2, c: 3 }, x => x === 1 || x === 2],
      tests: {
        foldr: ([input, values]) => foldr.omitFx(values, input),
        lodash: ([input, values]) => fp.omitBy(values, input),
      },
    },
    {
      name: 'Omits Values (Array Shorthand, Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, { c: 3 }),
      setup: () => [{ a: 1, b: 2, c: 3 }, ['a', 'b']],
      tests,
    },
  ];
};
