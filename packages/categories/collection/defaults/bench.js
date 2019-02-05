module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.defaults(...input),
    lodash: input => lodash.defaults(...input),
  };

  return [
    {
      name: 'Empty Return',
      expect: (result, { deepEqual }) => deepEqual(result, {}),
      setup: () => [],
      tests,
    },
    {
      name: 'Nil Passed',
      expect: (result, { deepEqual }) => deepEqual(result, {}),
      setup: () => [null],
      tests,
    },
    {
      name: 'Shallow Merges 1 Object',
      expect: (result, { deepEqual }) => deepEqual(result, {
        a: 1,
        b: 2,
        c: 3,
      }),
      setup: () => [
        {
          a: 1,
          b: 2,
          c: 3,
        },
      ],
      tests,
    },
    {
      name: 'Shallow Merges 2 Objects',
      expect: (result, { deepEqual }) => deepEqual(result, {
        a: 1,
        b: 2,
        c: 6,
        d: 7,
        e: 8,
        f: 9,
      }),
      setup: () => [
        {
          c: 6,
          d: 7,
          e: 8,
          f: 9,
        },
        {
          a: 1,
          b: 2,
          c: 3,
        },
      ],
      tests,
    },
    {
      name: 'Shallow Merges 3 Objects',
      expect: (result, { deepEqual }) => deepEqual(result, {
        a: 1,
        b: 2,
        c: 6,
        d: 7,
        e: 8,
        f: 9,
        g: 1,
        h: 2,
        i: 3,
        j: 4,
      }),
      setup: () => [
        {
          g: 1,
          h: 2,
          i: 3,
          j: 4,
        },
        {
          c: 6,
          d: 7,
          e: 8,
          f: 9,
        },
        {
          a: 1,
          b: 2,
          c: 3,
        },
      ],
      tests,
    },
    {
      name: 'Shallow Merges 4 Objects',
      expect: (result, { deepEqual }) => deepEqual(result, {
        a: 1,
        b: 2,
        c: 6,
        d: 'd',
        e: 8,
        f: 9,
        g: 1,
        h: 2,
        i: 3,
        j: {
          a: 'a',
          b: 'b',
        },
      }),
      setup: () => [
        {
          g: 1,
          h: 2,
          i: 3,
          j: {
            a: 'a',
            b: 'b',
          },
        },
        {
          c: 6,
          d: 'd',
          e: 8,
          f: 9,
        },
        {
          a: 1,
          b: 2,
          c: 3,
        },
      ],
      tests,
    },
  ];
};
