module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: x => foldr.tail(x),
    lodash: x => lodash.tail(x),
    rambda: x => rambda.tail(x),
  };

  return [
    {
      name: 'Gets Array Tail',
      expect: (result, { deepEqual }) => deepEqual(result, [2, 3, 4]),
      setup: () => [1, 2, 3, 4],
      tests,
    },
    {
      name: 'Gets Array Tail (Empty)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [],
      tests,
    },
    {
      name: 'Gets Array Tail (Bad Input)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => null,
      tests,
    },
  ];
};
