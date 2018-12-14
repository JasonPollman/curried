module.exports = ({
  fp,
  foldr,
  ramda,
}) => {
  const hasEven = x => x % 2 === 0;

  const tests = {
    foldr: input => foldr.everyFx(hasEven, input),
    lodash: input => fp.every(hasEven, input),
    ramda: input => ramda.all(hasEven, input),
  };

  return [
    {
      name: 'Every Item Passes Predicate (1, Functional)',
      expect: (result, assert) => assert(result === false),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Every Item Passes Predicate (2, Functional)',
      expect: (result, assert) => assert(result === true),
      setup: () => [2, 4, 6],
      tests,
    },
    {
      name: 'Every Item Passes Predicate (3, Functional)',
      expect: (result, assert) => assert(result === true),
      setup: () => null,
      tests,
    },
    {
      name: 'Every Item Passes Predicate (4, Functional)',
      expect: (result, assert) => assert(result === false),
      setup: () => 'xyzabc',
      tests: {
        foldr: input => foldr.everyFx(x => x === 'a', input),
        lodash: input => fp.every(x => x === 'a', input),
      },
    },
    {
      name: 'Every Item Passes Predicate (5, Functional)',
      expect: (result, assert) => assert(result === false),
      setup: () => ({ foo: 1, bar: 2, baz: 3 }),
      tests,
    },
  ];
};
