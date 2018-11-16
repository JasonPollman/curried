module.exports = ({
  fp,
  foldr,
  ramda,
  lodash,
}) => {
  const keepEven = x => x % 2 === 0;

  const tests = {
    foldr: input => foldr.filter(input, keepEven),
    lodash: input => lodash.filter(input, keepEven),
    ramda: input => ramda.filter(keepEven, input),
  };

  const functionalTests = {
    foldr: input => foldr.filter.fn(keepEven, input),
    lodash: input => fp.filter(keepEven, input),
    ramda: input => ramda.filter(keepEven, input),
  };

  return [
    {
      name: 'Filters an Array',
      expect: (result, { deepEqual }) => deepEqual(result, [2]),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Filters an Array (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, [2]),
      setup: () => [1, 2, 3],
      tests: functionalTests,
    },
    {
      name: 'Filters Invalid',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => null,
      tests,
    },
    {
      name: 'Filters Invalid (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => null,
      tests: functionalTests,
    },
    {
      name: 'Filters a String',
      expect: (result, { deepEqual }) => deepEqual(result, ['a']),
      setup: () => 'abc',
      tests: {
        foldr: input => foldr.filter(input, x => x === 'a'),
        lodash: input => lodash.filter(input, x => x === 'a'),
        ramda: input => ramda.filter(x => x === 'a', input),
      },
    },
    {
      name: 'Filters a String (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, ['a']),
      setup: () => 'abc',
      tests: {
        foldr: input => foldr.filter.fn(x => x === 'a', input),
        lodash: input => fp.filter(x => x === 'a', input),
        ramda: input => ramda.filter(x => x === 'a', input),
      },
    },
    {
      name: 'Filters an Object',
      expect: (result, { deepEqual }, library) => (library === 'ramda'
        ? deepEqual(result, { bar: 2 })
        : deepEqual(result, [2])
      ),
      setup: () => ({ foo: 1, bar: 2, baz: 3 }),
      tests,
    },
    {
      name: 'Filters an Object (Functional)',
      expect: (result, { deepEqual }, library) => (library === 'ramda'
        ? deepEqual(result, { bar: 2 })
        : deepEqual(result, [2])
      ),
      setup: () => ({ foo: 1, bar: 2, baz: 3 }),
      tests: functionalTests,
    },
  ];
};
