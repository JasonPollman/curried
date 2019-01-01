module.exports = ({
  foldr,
  ramda,
  lodash,
}) => {
  const tests = {
    foldr: x => foldr.fromPairs(x),
    lodash: x => lodash.fromPairs(x),
    ramda: x => ramda.fromPairs(x),
  };

  return [
    {
      name: 'From Pairs (Null)',
      expect: (result, { deepEqual }) => deepEqual(result, {}),
      setup: () => null,
      tests,
    },
    {
      name: 'From Pairs (Empty)',
      expect: (result, { deepEqual }) => deepEqual(result, {}),
      setup: () => [],
      tests,
    },
    {
      name: 'From Pairs (Simple)',
      expect: (result, { deepEqual }) => deepEqual(result, {
        foo: 0,
        bar: 1,
        baz: 2,
      }),
      setup: () => [['foo', 0], ['bar', 1], ['baz', 2]],
      tests,
    },
    {
      name: 'From Pairs (More)',
      expect: (result, { deepEqual }) => deepEqual(result, {
        foo: 0,
        bar: 1,
        baz: 2,
        4: 10,
        6: 7,
        8: 9,
      }),
      setup: () => [['foo', 0], ['bar', 1], ['baz', 2], [4, 5], [6, 7], [8, 9], [4, 10]],
      tests,
    },
    {
      name: 'From Pairs (Large)',
      expect: (result, { deepEqual }) => deepEqual(result, { a: 'x' }),
      setup: () => Array(10000).fill(['a', 'x']),
      tests,
    },
  ];
};
