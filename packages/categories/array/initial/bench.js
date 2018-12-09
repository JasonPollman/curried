module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: x => foldr.initial(x),
    lodash: x => lodash.initial(x),
    ramda: x => ramda.init(x),
  };

  return [
    {
      name: 'Gets Array Init',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      setup: () => [1, 2, 3, 4],
      tests,
    },
    {
      name: 'Gets Array Init (Empty)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [],
      tests,
    },
    {
      name: 'Gets Array Init (Bad Input)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => null,
      tests,
    },
  ];
};
