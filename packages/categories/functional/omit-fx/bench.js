module.exports = ({ fp, foldr, lodash }) => {
  const tests = {
    foldr: ([input, values]) => foldr.omit(input, values),
    lodash: ([input, values]) => lodash.omit(input, values),
  };

  const functionalTests = {
    foldr: ([input, values]) => foldr.omit(input, values),
    lodash: ([input, values]) => lodash.omit(input, values),
  };

  return [
    {
      name: 'Omits Values',
      expect: (result, { deepEqual }) => deepEqual(result, { c: 3 }),
      setup: () => [{ a: 1, b: 2, c: 3 }, x => x === 1 || x === 2],
      tests: {
        foldr: ([input, values]) => foldr.omit(input, values),
        lodash: ([input, values]) => lodash.omitBy(input, values),
      },
    },
    {
      name: 'Omits Values (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, { c: 3 }),
      setup: () => [{ a: 1, b: 2, c: 3 }, x => x === 1 || x === 2],
      tests: {
        foldr: ([input, values]) => foldr.omit.f(values, input),
        lodash: ([input, values]) => fp.omitBy(values, input),
      },
    },
    {
      name: 'Omits Values (Null)',
      expect: (result, { deepEqual }) => deepEqual(result, {}),
      setup: () => [null, ['a', 'b']],
      tests,
    },
    {
      name: 'Omits Values (Array Shorthand)',
      expect: (result, { deepEqual }) => deepEqual(result, { c: 3 }),
      setup: () => [{ a: 1, b: 2, c: 3 }, ['a', 'b']],
      tests,
    },
    {
      name: 'Omits Values (Array Shorthand, Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, { c: 3 }),
      setup: () => [{ a: 1, b: 2, c: 3 }, ['a', 'b']],
      tests: functionalTests,
    },
    {
      name: 'Omits Values (Array Shorthand 2)',
      expect: (result, { deepEqual }) => deepEqual(result, { a: 1, b: 2, c: 3 }),
      setup: () => [{ a: 1, b: 2, c: 3 }, []],
      tests,
    },
    {
      name: 'Omits Values (From Array)',
      expect: (result, { deepEqual }) => deepEqual(result, { 5: 6, 6: 7, 7: 8 }),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], [0, 1, 2, 3, 4, 8, 9]],
      tests,
    },
  ];
};
