module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: x => foldr.unique(x),
    lodash: x => lodash.uniq(x),
    ramda: x => ramda.uniq(x),
  };

  const a = {};
  const b = {};
  const c = {};

  return [
    {
      name: 'Uniques An Array (0)',
      expect: (result, { deepEqual }) => deepEqual(result, [1]),
      setup: () => [1],
      tests,
    },
    {
      name: 'Uniques An Array (1)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 4]),
      setup: () => [1, 2, 3, 4],
      tests,
    },
    {
      name: 'Uniques An Array (2)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 4]),
      setup: () => [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4],
      tests,
    },
    {
      name: 'Uniques An Array (3)',
      expect: (result, { deepEqual }) => deepEqual(result, [a, b, c]),
      setup: () => [a, a, a, a, b, b, b, b, c, c, c, c],
      tests,
    },
    {
      name: 'Uniques An Array (4)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      setup: () => '1234567890'.repeat(100).split('').map(Number),
      tests,
    },
    {
      name: 'Uniques An Array (5)',
      expect: (result, { deepEqual }) => deepEqual(result, ['f', 'o', 'b', 'a', 'r']),
      setup: () => 'foobar'.repeat(50).split(''),
      tests,
    },
    {
      name: 'Uniques An Array (With NaN)',
      expect: (result, assert) => {
        assert(result[0] === 1);
        assert(Number.isNaN(result[1]));
        assert(result[2] === 2);
        assert(result[3] === 3);
        assert(result[4] === 4);
        assert(result.length === 5);
      },
      setup: () => [1, NaN, 2, 3, NaN, 4, 1, 2, NaN, 3, 4, 1, 2, 3, NaN, 4],
      tests,
    },
    {
      name: 'Uniques An Array (Empty)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [],
      tests,
    },
    {
      name: 'Uniques An Array (Null)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => null,
      tests,
    },
    {
      name: 'Uniques An Array (Threshold - 1)',
      expect: (result, { deepEqual }) => deepEqual(result, [0]),
      setup: () => Array(249).fill(0),
      tests,
    },
    {
      name: 'Uniques An Array (Threshold + 1)',
      expect: (result, { deepEqual }) => deepEqual(result, [0]),
      setup: () => Array(251).fill(0),
      tests,
    },
    {
      name: 'Uniques An Array (Large)',
      expect: (result, { deepEqual }) => deepEqual(result, [0]),
      setup: () => Array(100000).fill(0),
      tests,
    },
    {
      name: 'Uniques An Array (Large, 2)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      setup: () => '1234567890'.repeat(10000).split('').map(Number),
      tests,
    },
    {
      name: 'Uniques An Arguments Object',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 4]),
      setup: () => ({
        0: 1,
        1: 1,
        2: 2,
        3: 2,
        4: 3,
        5: 4,
        length: 6,
      }),
      tests,
    },
    {
      name: 'Uniques An Array (String)',
      expect: (result, { deepEqual }) => deepEqual(result, ['f', 'o', 'b', 'a', 'r']),
      setup: () => 'foobar',
      tests,
    },
  ];
};
