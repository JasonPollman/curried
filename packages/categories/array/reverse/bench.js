module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: x => foldr.reverse(x),
    lodash: x => lodash.reverse(x),
    ramda: x => ramda.reverse(x),
  };

  return [
    {
      name: 'Reverses An Array',
      expect: (result, { deepEqual }) => deepEqual(result, [4, 3, 2, 1]),
      setup: () => [1, 2, 3, 4],
      tests,
    },
    {
      name: 'Reverses An Array (2)',
      expect: (result, { deepEqual }) => deepEqual(result, ['c', 'b', 'a']),
      setup: () => ['a', 'b', 'c'],
      tests,
    },
    {
      name: 'Reverses An Array (Large)',
      expect: (result, { deepEqual }) => (
        deepEqual(result, Array(1000).fill(0).concat([4, 3, 2, 1]))
      ),
      setup: () => [1, 2, 3, 4].concat(Array(1000).fill(0)),
      tests,
    },
    {
      name: 'Reverses An Array (Empty)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [],
      tests,
    },
    {
      name: 'Reverses An Array (Bad Input)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => null,
      tests,
    },
  ];
};
