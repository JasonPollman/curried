module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: x => foldr.initial(x),
    lodash: x => lodash.initial(x),
    ramda: x => ramda.init(x),
  };

  return [
    {
      name: 'Gets Array Initial',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      setup: () => [1, 2, 3, 4],
      tests,
    },
    {
      name: 'Gets Array Initial (Empty)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [],
      tests,
    },
    {
      name: 'Gets Array Initial (Bad Input)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => null,
      tests,
    },
    {
      name: 'Gets Array Initial (Large)',
      expect: (result, { deepEqual }) => deepEqual(result, new Array(9999).fill(0)),
      setup: () => new Array(10000).fill(0),
      tests,
    },
  ];
};
