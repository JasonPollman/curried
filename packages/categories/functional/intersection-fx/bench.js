module.exports = ({ foldr, fp, ramda }) => {
  const tests = {
    foldr: ([x, y]) => foldr.intersectionFx(y, x),
    lodash: ([x, y]) => fp.intersection(y, x),
    ramda: ([x, y]) => ramda.intersection(y, x),
  };

  return [
    {
      name: 'Intersects Arrays (1)',
      expect: (result, { deepEqual }) => deepEqual(result, [4, 5, 6]),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8, 9], [4, 5, 6]],
      tests,
    },
    {
      name: 'Intersects Arrays (2)',
      expect: (result, { deepEqual }) => deepEqual(result, [5]),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8, 9], [5]],
      tests,
    },
    {
      name: 'Intersects Arrays (3)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2]),
      setup: () => [[1, 2], [1, 2, 3, 4, 5, 6, 7]],
      tests,
    },
    {
      name: 'Intersects Arrays (4)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 4, 5]),
      setup: () => [
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5, 6, 7],
      ],
      tests,
    },
    {
      name: 'Intersects Arrays (5)',
      expect: (result, { deepEqual }) => deepEqual(result, [0]),
      setup: () => [
        Array(100).fill(0),
        Array(100).fill(0),
      ],
      tests,
    },
    {
      name: 'Intersects Arrays (Bad Input)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [1234, [1, 2, 3]],
      tests,
    },
  ];
};
