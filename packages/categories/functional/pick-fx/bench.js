module.exports = ({ fp, foldr }) => {
  const tests = {
    foldr: ([input, values]) => foldr.pickFx(values)(input),
    lodash: ([input, values]) => fp.pick(values)(input),
  };

  return [
    {
      name: 'Picks Values (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, { a: 1, b: 2 }),
      setup: () => [{ a: 1, b: 2, c: 3 }, x => x === 1 || x === 2],
      tests: {
        foldr: ([input, values]) => foldr.pickFx(values)(input),
        lodash: ([input, values]) => fp.pickBy(values)(input),
      },
    },
    {
      name: 'Picks Values (From Array, Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, { 8: 9, 9: 0 }),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], [8, 9]],
      tests,
    },
  ];
};
