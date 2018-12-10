module.exports = ({ fp, foldr }) => [
  {
    name: 'Zips an Array (1, Functional)',
    tests: {
      foldr: ([x, y]) => foldr.zipFx(y)(x),
      lodash: ([x, y]) => fp.zip(y)(x),
    },
    expect: (result, { deepEqual }) => deepEqual(result, [
      ['a', 1],
      ['b', 2],
    ]),
    setup: () => [
      ['a', 'b'],
      [1, 2],
    ],
  },
];
