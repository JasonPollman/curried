module.exports = ({
  fp,
  foldr,
  ramda,
}) => {
  const keepEven = x => x % 2 === 0;

  const tests = {
    foldr: input => foldr.filterFx(keepEven, input),
    lodash: input => fp.filter(keepEven, input),
    ramda: input => ramda.filter(keepEven, input),
  };

  return [
    {
      name: 'Filters an Array (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, [2]),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Filters Invalid (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => null,
      tests,
    },
    {
      name: 'Filters a String (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, ['a']),
      setup: () => 'abc',
      tests: {
        foldr: input => foldr.filterFx(x => x === 'a', input),
        lodash: input => fp.filter(x => x === 'a', input),
        ramda: input => ramda.filter(x => x === 'a', input),
      },
    },
    {
      name: 'Filters an Object (Functional)',
      expect: (result, { deepEqual }, library) => (library === 'ramda'
        ? deepEqual(result, { bar: 2 })
        : deepEqual(result, [2])
      ),
      setup: () => ({ foo: 1, bar: 2, baz: 3 }),
      tests,
    },
  ];
};
