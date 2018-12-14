module.exports = ({ foldr, fp }) => {
  const tests = {
    foldr: ([n, fn]) => foldr.invokeTimesFx(fn, n),
    lodash: ([n, fn]) => fp.times(fn)(n),
  };

  return [
    {
      name: 'Invokes `iteratee` n times',
      expect: (result, { deepEqual }) => deepEqual(result, [0, 1, 2, 3, 4, 5, 6]),
      setup: () => [7, x => x],
      tests,
    },
    {
      name: 'Invokes `iteratee` n times',
      expect: (result, { deepEqual }) => deepEqual(result, ['foo', 'foo', 'foo']),
      setup: () => [3, () => 'foo'],
      tests,
    },
    {
      name: 'Invokes `iteratee` n times',
      expect: (result, assert) => assert(result.length === 10000),
      setup: () => [10000, () => 'foo'],
      tests,
    },
  ];
};
