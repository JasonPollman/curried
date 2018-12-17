module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.toPairs(input),
    lodash: input => lodash.toPairs(input),
    ramda: input => ramda.toPairs(input),
  };

  const res = [];
  for (let i = 0; i < 1000; i++) res.push([i, 'x']);

  const res2 = [];
  for (let i = 0; i < 10000; i++) res2.push([i, 'x']);

  return [
    {
      name: 'To Pairs (1)',
      expect: (result, { deepEqual }) => deepEqual(result, [
        ['a', 1],
        ['b', 2],
        ['c', 3],
      ]),
      setup: () => ({ a: 1, b: 2, c: 3 }),
      tests,
    },
    {
      name: 'To Pairs (2)',
      expect: (result, { deepEqual }) => deepEqual(result, [
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
        ['e', 5],
        ['f', 6],
      ]),
      setup: () => ({
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
      }),
      tests,
    },
    {
      name: 'To Pairs (3)',
      expect: (result, { deepEqual }) => deepEqual(result, [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5],
        [6, 6],
      ]),
      setup: () => [0, 1, 2, 3, 4, 5, 6],
      tests,
    },
    {
      name: 'To Pairs (Nil)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => null,
      tests,
    },
    {
      name: 'To Pairs (Empty)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => ({}),
      tests,
    },
    {
      name: 'To Pairs (Large)',
      expect: (result, { deepEqual }) => deepEqual(result, res),
      setup: () => Array(1000).fill('x'),
      tests,
    },
    {
      name: 'To Pairs (XLarge)',
      expect: (result, { deepEqual }) => deepEqual(result, res2),
      setup: () => Array(10000).fill('x'),
      tests,
    },
  ];
};
