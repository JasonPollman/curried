module.exports = ({
  foldr,
  ramda,
  lodash,
}) => {
  const hasEven = x => x % 2 === 0;

  const tests = {
    foldr: input => foldr.every(input, hasEven),
    lodash: input => lodash.every(input, hasEven),
    ramda: input => ramda.all(hasEven, input),
  };

  return [
    {
      name: 'Every Item Passes Predicate (1)',
      expect: (result, assert) => assert(result === false),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Every Item Passes Predicate (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => [2, 4, 6],
      tests,
    },
    {
      name: 'Every Item Passes Predicate (3)',
      expect: (result, assert) => assert(result === true),
      setup: () => null,
      tests,
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
      name: 'Every Item Passes Predicate (7)',
      expect: (result, assert) => assert(result === true),
      setup: () => ({ foo: 2, bar: 4, baz: 6 }),
      tests,
    },
  ];
};
