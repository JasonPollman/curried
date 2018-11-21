module.exports = ({
  fp,
  foldr,
  ramda,
  lodash,
}) => {
  const isTwo = x => x === 2;

  const tests = {
    foldr: input => foldr.find(input, isTwo),
    lodash: input => lodash.find(input, isTwo),
    ramda: input => lodash.find(isTwo, input),
  };

  const functionalTests = {
    foldr: input => foldr.find.f(isTwo, input),
    lodash: input => fp.find(isTwo, input),
    ramda: input => lodash.find(isTwo, input),
  };

  return [
    {
      name: 'Finds (Bad Input)',
      expect: (result, assert) => assert(result === undefined),
      setup: () => null,
      tests,
    },
    {
      name: 'Finds (Array of Numbers)',
      expect: (result, assert) => assert(result === 2),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Finds (Array of Numbers, Functional)',
      expect: (result, assert) => assert(result === 2),
      setup: () => [1, 2, 3],
      tests: functionalTests,
    },
    {
      name: 'Finds (Array of Strings)',
      expect: (result, assert) => assert(result === undefined),
      setup: () => ['a', 'b', 'c'],
      tests,
    },
    {
      name: 'Finds (Array of Strings, Functional)',
      expect: (result, assert) => assert(result === undefined),
      setup: () => ['a', 'b', 'c'],
      tests: functionalTests,
    },
    {
      name: 'Finds (List of Objects)',
      expect: (result, { deepEqual }) => deepEqual(result, { name: 'foo', age: 30, x: 'y' }),
      setup: () => [
        { name: 'foo', age: 10, x: 'y' },
        { name: 'foo', age: 30, x: 'y' },
        { name: 'foo', age: 50, x: 'y' },
      ],
      tests: {
        foldr: input => foldr.find(input, x => x.name === 'foo' && x.age === 30),
        lodash: input => lodash.find(input, x => x.name === 'foo' && x.age === 30),
        ramda: input => ramda.find(x => x.name === 'foo' && x.age === 30, input),
      },
    },
    {
      name: 'Finds (Shorthand Iteratee)',
      expect: (result, { deepEqual }) => deepEqual(result, { name: 'foo', age: 30, x: 'y' }),
      setup: () => [
        { name: 'foo', age: 10, x: 'y' },
        { name: 'foo', age: 30, x: 'y' },
        { name: 'foo', age: 50, x: 'y' },
      ],
      tests: {
        foldr: input => foldr.find(input, { name: 'foo', age: 30 }),
        lodash: input => lodash.find(input, { name: 'foo', age: 30 }),
      },
    },
    {
      name: 'Finds (Shorthand Iteratee, Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, { name: 'foo', age: 30, x: 'y' }),
      setup: () => [
        { name: 'foo', age: 10, x: 'y' },
        { name: 'foo', age: 30, x: 'y' },
        { name: 'foo', age: 50, x: 'y' },
      ],
      tests: {
        foldr: input => foldr.find.f({ name: 'foo', age: 30 })(input),
        lodash: input => fp.find({ name: 'foo', age: 30 })(input),
      },
    },
    {
      name: 'Finds (Object)',
      expect: (result, { deepEqual }) => deepEqual(result, { name: 'foo', age: 30, x: 'y' }),
      setup: () => ({
        a: { name: 'foo', age: 10, x: 'y' },
        b: { name: 'foo', age: 30, x: 'y' },
        c: { name: 'foo', age: 50, x: 'y' },
      }),
      tests: {
        foldr: input => foldr.find(input, { name: 'foo', age: 30 }),
        lodash: input => lodash.find(input, { name: 'foo', age: 30 }),
      },
    },
    {
      name: 'Finds (Object, Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, { name: 'foo', age: 30, x: 'y' }),
      setup: () => ({
        a: { name: 'foo', age: 10, x: 'y' },
        b: { name: 'foo', age: 30, x: 'y' },
        c: { name: 'foo', age: 50, x: 'y' },
      }),
      tests: {
        foldr: input => foldr.find.f({ name: 'foo', age: 30 })(input),
        lodash: input => fp.find({ name: 'foo', age: 30 })(input),
      },
    },
  ];
};
