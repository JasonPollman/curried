module.exports = ({
  fp,
  foldr,
  ramda,
}) => {
  const sum = (x, y) => x + y;

  const doubleFN = (acc, curr) => {
    acc.push(curr * 2);
    return acc;
  };

  const tests = {
    foldr: ([input, acc]) => foldr.reduceFx(sum, acc, input),
    lodash: ([input, acc]) => fp.reduce(sum, acc, input),
    ramda: ([input, acc]) => ramda.reduce(sum, acc, input),
  };

  return [
    {
      name: 'Reduces an Array (1, Functional)',
      expect: (result, assert) => assert(result === 21),
      setup: () => [[1, 2, 3, 4, 5, 6], 0],
      tests,
    },
    {
      name: 'Reduces an Array (2, Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, [2, 4, 6, 8, 10, 12]),
      setup: () => [[1, 2, 3, 4, 5, 6], () => []],
      tests: {
        foldr: ([input, acc]) => foldr.reduceFx(doubleFN, acc(), input),
        lodash: ([input, acc]) => fp.reduce(doubleFN, acc(), input),
        ramda: ([input, acc]) => ramda.reduce(doubleFN, acc(), input),
      },
    },
    {
      name: 'Reduces an Object (1, Functional)',
      expect: (result, assert) => assert(result === 6),
      setup: () => [{ foo: 1, bar: 2, baz: 3 }, 0],
      tests,
    },
  ];
};
