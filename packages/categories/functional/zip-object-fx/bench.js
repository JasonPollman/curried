module.exports = ({ foldr, lodash }) => [
  {
    name: 'Zips an Object (1)',
    tests: {
      foldr: ([x, y]) => foldr.zipObject(y)(x),
      lodash: ([x, y]) => lodash.zipObject(y)(x),
    },
    expect: (result, { deepEqual }) => deepEqual(result, {
      a: 1,
      b: 2,
      c: 3,
    }),
    setup: () => [
      ['a', 'b', 'c'],
      [1, 2, 3],
    ],
  },
  {
    name: 'Zips an Object (2)',
    tests: {
      foldr: ([x, y]) => foldr.zipObject(x, y),
      lodash: ([x, y]) => lodash.zipObject(x, y),
    },
    expect: (result, { deepEqual }) => deepEqual(result, {}),
    setup: () => [
      [],
      [1, 2, 3],
    ],
  },
  {
    name: 'Zips an Object (3)',
    tests: {
      foldr: ([x, y]) => foldr.zipObject(x, y),
      lodash: ([x, y]) => lodash.zipObject(x, y),
    },
    expect: (result, { deepEqual }) => deepEqual(result, {
      x: 'foo',
      y: 'bar',
      z: 'baz',
    }),
    setup: () => [
      ['x', 'y', 'z'],
      ['foo', 'bar', 'baz', 'quxx'],
    ],
  },
  {
    name: 'Zips an Object (Nil)',
    tests: {
      foldr: ([x, y]) => foldr.zipObject(x, y),
      lodash: ([x, y]) => lodash.zipObject(x, y),
    },
    expect: (result, { deepEqual }) => deepEqual(result, {}),
    setup: () => [
      null,
      [1, 2, 3],
    ],
  },
  {
    name: 'Zips an Object (Big Values)',
    tests: {
      foldr: ([x, y]) => foldr.zipObject(x, y),
      lodash: ([x, y]) => lodash.zipObject(x, y),
    },
    expect: (result, { deepEqual }) => deepEqual(result, {
      x: 0,
      y: 0,
      z: 0,
    }),
    setup: () => [
      ['x', 'y', 'z'],
      Array(1000).fill(0),
    ],
  },
  {
    name: 'Zips an Object (Big Values, Big Keys)',
    tests: {
      foldr: ([x, y]) => foldr.zipObject(x, y),
      lodash: ([x, y]) => lodash.zipObject(x, y),
    },
    expect: (result, { deepEqual }) => deepEqual(result, {
      0: 0,
    }),
    setup: () => [
      Array(1000).fill(0),
      Array(1000).fill(0),
    ],
  },
];
