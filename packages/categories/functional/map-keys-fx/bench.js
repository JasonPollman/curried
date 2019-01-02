module.exports = ({ fp, foldr }) => {
  const toUpperCase = x => x.toUpperCase();

  const tests = {
    foldr: input => foldr.mapKeysFx(toUpperCase)(input),
    lodash: input => fp.mapKeys(toUpperCase)(input),
  };

  return [
    {
      name: 'Maps Keys (1)',
      expect: (result, { deepEqual }) => deepEqual(result, { A: 1, B: 2, C: 3 }),
      setup: () => ({
        a: 1,
        b: 2,
        c: 3,
      }),
      tests,
    },
    {
      name: 'Maps Keys (2)',
      expect: (result, { deepEqual }) => deepEqual(result, {
        d: 0,
        e: 1,
        f: 2,
        g: 3,
        h: 4,
        i: 5,
        j: 6,
      }),
      setup: () => [0, 1, 2, 3, 4, 5, 6],
      tests: {
        foldr: input => foldr.mapKeysFx(x => String.fromCharCode(x + 100).toString())(input),
        lodash: input => fp.mapKeys(x => String.fromCharCode(x + 100).toString())(input),
      },
    },
    {
      name: 'Maps Keys (Null Iteratee)',
      expect: (result, { deepEqual }) => deepEqual(result, { a: 1, b: 2, c: 3 }),
      setup: () => ({
        a: 1,
        b: 2,
        c: 3,
      }),
      tests: {
        foldr: input => foldr.mapKeysFx(null)(input),
        lodash: input => fp.mapKeys(null)(input),
      },
    },
  ];
};
