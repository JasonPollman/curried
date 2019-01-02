module.exports = ({
  foldr,
  ramda,
  lodash,
}) => {
  const isTwo = x => x === 2;

  const tests = {
    foldr: input => foldr.groupBy(input, isTwo),
    lodash: input => lodash.groupBy(input, isTwo),
    ramda: input => ramda.groupBy(isTwo, input),
  };

  return [
    {
      name: 'Group By (Bad Input)',
      expect: (result, { deepEqual }) => deepEqual(result, {}),
      setup: () => null,
      tests,
    },
    {
      name: 'Group By (Array of Numbers)',
      expect: (result, { deepEqual }) => deepEqual(result, {
        true: [2],
        false: [1, 3],
      }),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Group By (Array Large, 1)',
      expect: (result, { deepEqual }) => deepEqual(result, {
        false: new Array(10000).fill(1),
      }),
      setup: () => new Array(10000).fill(1),
      tests,
    },
    {
      name: 'Group By (Array Large, 2)',
      expect: (result, { deepEqual }) => deepEqual(result, {
        true: new Array(10000).fill(2),
      }),
      setup: () => new Array(10000).fill(2),
      tests,
    },
    {
      name: 'Group By (String, Object)',
      expect: (result, { deepEqual }) => deepEqual(result, {
        foo: [
          { name: 'foo', age: 10, x: 'y' },
          { name: 'foo', age: 30, x: 'y' },
        ],
        bar: [
          { name: 'bar', age: 50, x: 'y' },
        ],
      }),
      setup: () => ({
        a: { name: 'foo', age: 10, x: 'y' },
        b: { name: 'foo', age: 30, x: 'y' },
        c: { name: 'bar', age: 50, x: 'y' },
      }),
      tests: {
        foldr: input => foldr.groupBy(input, 'name'),
        lodash: input => lodash.groupBy(input, 'name'),
      },
    },
    {
      name: 'Group By (String, Array)',
      expect: (result, { deepEqual }) => deepEqual(result, {
        foo: [
          { name: 'foo', age: 10, x: 'y' },
          { name: 'foo', age: 30, x: 'y' },
        ],
        bar: [
          { name: 'bar', age: 50, x: 'y' },
        ],
      }),
      setup: () => ([
        { name: 'foo', age: 10, x: 'y' },
        { name: 'foo', age: 30, x: 'y' },
        { name: 'bar', age: 50, x: 'y' },
      ]),
      tests: {
        foldr: input => foldr.groupBy(input, 'name'),
        lodash: input => lodash.groupBy(input, 'name'),
      },
    },
  ];
};
