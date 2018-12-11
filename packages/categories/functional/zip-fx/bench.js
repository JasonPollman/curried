module.exports = ({ fp, foldr }) => [
  {
    name: 'Zips an Array (1, Functional)',
    tests: {
      foldr: ([x, y]) => foldr.zipFx(x)(y),
      lodash: ([x, y]) => fp.zip(x)(y),
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
