module.exports = ({
  fp,
  foldr,
  ramda,
}) => {
  const isEven = x => x % 2 === 0;

  const tests = {
    foldr: input => foldr.partitionFx(isEven)(input),
    lodash: input => fp.partition(isEven)(input),
    ramda: input => ramda.partition(isEven)(input),
  };

  return [
    {
      name: 'Partitions an Array',
      expect: (result, { deepEqual }) => deepEqual(result, [[2, 4, 6], [1, 3, 5]]),
      setup: () => [1, 2, 3, 4, 5, 6],
      tests,
    },
    {
      name: 'Partitions an Array (Large, 1)',
      expect: (result, { deepEqual }) => deepEqual(result, [[], new Array(10000).fill(1)]),
      setup: () => new Array(10000).fill(1),
      tests,
    },
    {
      name: 'Partitions an Array (Large, 2)',
      expect: (result, { deepEqual }) => deepEqual(result, [new Array(10000).fill(0), []]),
      setup: () => new Array(10000).fill(0),
      tests,
    },
    {
      name: 'Partitions Invalid',
      expect: (result, { deepEqual }) => deepEqual(result, [[], []]),
      setup: () => null,
      tests,
    },
    {
      name: 'Partitions a String',
      expect: (result, { deepEqual }) => deepEqual(result, [['a'], ['b', 'c']]),
      setup: () => 'abc',
      tests: {
        foldr: input => foldr.partitionFx(x => x === 'a')(input),
        lodash: input => fp.partition(x => x === 'a')(input),
        ramda: input => ramda.partition(x => x === 'a')(input),
      },
    },
    {
      name: 'Partitions an Object',
      expect: (result, { deepEqual }, library) => (library === 'ramda'
        ? deepEqual(result, [{ bar: 2 }, { foo: 1, baz: 3 }])
        : deepEqual(result, [[2], [1, 3]])
      ),
      setup: () => ({ foo: 1, bar: 2, baz: 3 }),
      tests,
    },
  ];
};
