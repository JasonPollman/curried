module.exports = ({ fp, foldr, lodash }) => {
  const tests = {
    foldr: ([input, values]) => foldr.pick(input, values),
    lodash: ([input, values]) => lodash.pick(input, values),
  };

  const functionalTests = {
    foldr: ([input, values]) => foldr.pick.f(values)(input),
    lodash: ([input, values]) => fp.pick(values)(input),
  };

  return [
    {
      name: 'Picks Values',
      expect: (result, { deepEqual }) => deepEqual(result, { a: 1, b: 2 }),
      setup: () => [{ a: 1, b: 2, c: 3 }, x => x === 1 || x === 2],
      tests: {
        foldr: ([input, values]) => foldr.pick(input, values),
        lodash: ([input, values]) => lodash.pickBy(input, values),
      },
    },
    {
      name: 'Picks Values (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, { a: 1, b: 2 }),
      setup: () => [{ a: 1, b: 2, c: 3 }, x => x === 1 || x === 2],
      tests: {
        foldr: ([input, values]) => foldr.pick.f(values)(input),
        lodash: ([input, values]) => fp.pickBy(values)(input),
      },
    },
    {
      name: 'Picks Values (Null)',
      expect: (result, { deepEqual }) => deepEqual(result, {}),
      setup: () => [null, ['a', 'b']],
      tests,
    },
    {
      name: 'Picks Values (Array Shorthand)',
      expect: (result, { deepEqual }) => deepEqual(result, { a: 1, b: 2 }),
      setup: () => [{ a: 1, b: 2, c: 3 }, ['a', 'b']],
      tests,
    },
    {
      name: 'Picks Values (Array Shorthand, Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, { a: 1, b: 2 }),
      setup: () => [{ a: 1, b: 2, c: 3 }, ['a', 'b']],
      tests,
    },
    {
      name: 'Picks Values (From Array)',
      expect: (result, { deepEqual }) => deepEqual(result, { 8: 9, 9: 0 }),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], [8, 9]],
      tests,
    },
    {
      name: 'Picks Values (From Array, Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, { 8: 9, 9: 0 }),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], [8, 9]],
      tests: functionalTests,
    },
  ];
};
