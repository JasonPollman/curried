module.exports = ({ foldr, lodash, rambda }) => {
  const keepEven = x => x % 2 === 0;

  const tests = {
    foldr: input => foldr.filter(input, keepEven),
    lodash: input => lodash.filter(input, keepEven),
    rambda: input => rambda.filter(keepEven, input),
  };

  return [
    {
      name: 'Filters an Array',
      expect: (result, { deepEqual }) => deepEqual(result, [2]),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Filters Invalid',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => null,
      tests,
    },
    {
      name: 'Filters a String',
      expect: (result, { deepEqual }) => deepEqual(result, ['a']),
      setup: () => 'abc',
      tests: {
        foldr: input => foldr.filter(input, x => x === 'a'),
        lodash: input => lodash.filter(input, x => x === 'a'),
        rambda: input => rambda.filter(x => x === 'a', input),
      },
    },
    {
      name: 'Filters an Object',
      expect: (result, { deepEqual }, library) => (library === 'rambda'
        ? deepEqual(result, { bar: 2 })
        : deepEqual(result, [2])
      ),
      setup: () => ({ foo: 1, bar: 2, baz: 3 }),
      tests,
    },
  ];
};
