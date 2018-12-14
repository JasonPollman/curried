module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.toArray(input),
    lodash: input => lodash.toArray(input),
  };

  return [
    {
      name: 'Converts to an Array (1)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [],
      tests,
    },
    {
      name: 'Converts to an Array (2)',
      expect: (result, { deepEqual }) => deepEqual(result, Array(1000).fill(1000)),
      setup: () => Array(1000).fill(1000),
      tests,
    },
    {
      name: 'Converts to an Array (2)',
      expect: (result, { deepEqual }) => deepEqual(result, Array(300).fill({})),
      setup: () => Array(300).fill({}),
      tests,
    },
    {
      name: 'Converts to an Array (3)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      setup: () => ({ foo: 1, bar: 2, baz: 3 }),
      tests,
    },
    {
      name: 'Converts to an Array (4)',
      expect: (result, { deepEqual }) => deepEqual(result, ['f', 'o', 'o', 'b', 'a', 'r']),
      setup: () => 'foobar',
      tests,
    },
  ];
};
