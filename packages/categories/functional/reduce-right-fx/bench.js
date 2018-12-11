module.exports = ({
  fp,
  foldr,
  ramda,
}) => {
  const sum = (x, y) => x + y;

  const double = (acc, curr) => {
    acc.push(curr * 2);
    return acc;
  };

  const tests = {
    foldr: ([input, acc]) => foldr.reduceRightFx(sum, acc, input),
    lodash: ([input, acc]) => fp.reduceRight(sum, acc, input),
    ramda: ([input, acc]) => ramda.reduceRight(sum, acc, input),
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
      expect: (result, { deepEqual }) => deepEqual(result, [12, 10, 8, 6, 4, 2]),
      setup: () => [[1, 2, 3, 4, 5, 6], () => []],
      tests: {
        foldr: ([input, acc]) => foldr.reduceRightFx(double, acc(), input),
        lodash: ([input, acc]) => fp.reduceRight(double, acc(), input),
        ramda: ([input, acc]) => ramda.reduceRight(double, acc(), input),
      },
    },
  ];
};
