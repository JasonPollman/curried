module.exports = ({ foldr, lodash, fp }) => {
  const hasEven = x => x % 2 === 0;

  const tests = {
    foldr: input => foldr.every(input, hasEven),
    lodash: input => lodash.every(input, hasEven),
  };

  const functionalTests = {
    foldr: input => foldr.every.fn(hasEven, input),
    lodash: input => fp.every(hasEven, input),
  };

  return [
    {
      name: 'Every Item Passes Predicate (1)',
      expect: (result, assert) => assert(result === false),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Every Item Passes Predicate (1, Functional)',
      expect: (result, assert) => assert(result === false),
      setup: () => [1, 2, 3],
      tests: functionalTests,
    },
    {
      name: 'Every Item Passes Predicate (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => [2, 4, 6],
      tests,
    },
    {
      name: 'Every Item Passes Predicate (2, Functional)',
      expect: (result, assert) => assert(result === true),
      setup: () => [2, 4, 6],
      tests: functionalTests,
    },
    {
      name: 'Every Item Passes Predicate (3)',
      expect: (result, assert) => assert(result === true),
      setup: () => null,
      tests,
    },
    {
      name: 'Every Item Passes Predicate (3, Functional)',
      expect: (result, assert) => assert(result === true),
      setup: () => null,
      tests: functionalTests,
    },
    {
      name: 'Every Item Passes Predicate (4)',
      expect: (result, assert) => assert(result === false),
      setup: () => 'xyzabc',
      tests: {
        foldr: input => foldr.every(input, x => x === 'a'),
        lodash: input => lodash.every(input, x => x === 'a'),
      },
    },
    {
      name: 'Every Item Passes Predicate (4, Functional)',
      expect: (result, assert) => assert(result === false),
      setup: () => 'xyzabc',
      tests: {
        foldr: input => foldr.every.fn(x => x === 'a', input),
        lodash: input => fp.every(x => x === 'a', input),
      },
    },
    {
      name: 'Every Item Passes Predicate (5)',
      expect: (result, assert) => assert(result === true),
      setup: () => 'aaaaaa',
      tests: {
        foldr: input => foldr.every(input, x => x === 'a'),
        lodash: input => lodash.every(input, x => x === 'a'),
      },
    },
    {
      name: 'Every Item Passes Predicate (6)',
      expect: (result, assert) => assert(result === false),
      setup: () => ({ foo: 1, bar: 2, baz: 3 }),
      tests,
    },
    {
      name: 'Every Item Passes Predicate (6, Functional)',
      expect: (result, assert) => assert(result === false),
      setup: () => ({ foo: 1, bar: 2, baz: 3 }),
      tests: functionalTests,
    },
    {
      name: 'Every Item Passes Predicate (7)',
      expect: (result, assert) => assert(result === true),
      setup: () => ({ foo: 2, bar: 4, baz: 6 }),
      tests,
    },
  ];
};
