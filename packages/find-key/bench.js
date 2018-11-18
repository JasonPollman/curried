module.exports = ({ fp, foldr, lodash }) => {
  const isTwo = x => x === 2;

  const tests = {
    foldr: input => foldr.findKey(input, isTwo),
    lodash: input => lodash.findKey(input, isTwo),
  };

  const functionalTests = {
    foldr: input => foldr.findKey.f(input, isTwo),
    lodash: input => fp.findKey(input, isTwo),
  };

  return [
    {
      name: 'Finds Key (Bad Input)',
      expect: (result, assert) => assert(result === undefined),
      setup: () => null,
      tests,
    },
    {
      name: 'Finds Key (Array of Numbers)',
      expect: (result, assert) => assert(result === 1),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Finds Key (Array of Numbers, Functional)',
      expect: (result, assert) => assert(result === 1),
      setup: () => [1, 2, 3],
      tests: functionalTests,
    },
    {
      name: 'Finds Key (Array of Strings, Functional)',
      expect: (result, assert) => assert(result === undefined),
      setup: () => ['a', 'b', 'c'],
      tests: functionalTests,
    },
    {
      name: 'Finds Key (Array of Strings)',
      expect: (result, assert) => assert(result === undefined),
      setup: () => ['a', 'b', 'c'],
      tests,
    },
    {
      name: 'Finds Key (Object)',
      expect: (result, assert) => assert(result === 'b'),
      setup: () => ({
        a: { name: 'foo', age: 10, x: 'y' },
        b: { name: 'foo', age: 30, x: 'y' },
        c: { name: 'foo', age: 50, x: 'y' },
      }),
      tests: {
        foldr: input => foldr.findKey(input, { name: 'foo', age: 30 }),
        lodash: input => lodash.findKey(input, { name: 'foo', age: 30 }),
      },
    },
    {
      name: 'Finds Key (Object, Functional)',
      expect: (result, assert) => assert(result === 'b'),
      setup: () => ({
        a: { name: 'foo', age: 10, x: 'y' },
        b: { name: 'foo', age: 30, x: 'y' },
        c: { name: 'foo', age: 50, x: 'y' },
      }),
      tests: {
        foldr: input => foldr.findKey.f({ name: 'foo', age: 30 })(input),
        lodash: input => fp.findKey({ name: 'foo', age: 30 })(input),
      },
    },
  ];
};
