module.exports = ({ foldr, lodash }) => [
  {
    name: 'Zips an Array (1)',
    tests: {
      foldr: ([x, y, z]) => foldr.zip(x, y, z),
      lodash: ([x, y, z]) => lodash.zip(x, y, z),
    },
    expect: (result, { deepEqual }) => deepEqual(result, [
      ['a', 1, 'x'],
      ['b', 2, 'y'],
      ['c', 3, 'z'],
    ]),
    setup: () => [
      ['a', 'b', 'c'],
      [1, 2, 3],
      ['x', 'y', 'z'],
    ],
  },
  {
    name: 'Zips an Array (2)',
    tests: {
      foldr: ([x, y, z]) => foldr.zip(x, y, z),
      lodash: ([x, y, z]) => lodash.zip(x, y, z),
    },
    expect: (result, { deepEqual }) => deepEqual(result, [
      ['a'],
      ['b'],
      ['c'],
    ]),
    setup: () => [
      ['a', 'b', 'c'],
    ],
  },
  {
    name: 'Zips an Array (3)',
    tests: {
      foldr: (x, y, z) => foldr.zip(x, y, z),
      lodash: (x, y, z) => lodash.zip(x, y, z),
    },
    expect: (result, { deepEqual }) => deepEqual(result, []),
    setup: () => [],
  },
];
