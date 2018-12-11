module.exports = ({
  foldr,
  ramda,
  lodash,
}) => {
  const hasEven = x => x % 2 === 0;

  const tests = {
    foldr: input => foldr.some(input, hasEven),
    lodash: input => lodash.some(input, hasEven),
    ramda: input => ramda.any(hasEven, input),
  };

  return [
    {
      name: 'Somes an Array',
      expect: (result, assert) => assert(result === true),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Somes an Array (2)',
      expect: (result, assert) => assert(result === false),
      setup: () => Array(1000).fill(1),
      tests,
    },
    {
      name: 'Somes Invalid',
      expect: (result, assert) => assert(result === false),
      setup: () => null,
      tests,
    },
    {
      name: 'Somes a String',
      expect: (result, assert) => assert(result === true),
      setup: () => 'xyzabc',
      tests: {
        foldr: input => foldr.some(input, x => x === 'a'),
        lodash: input => lodash.some(input, x => x === 'a'),
      },
    },
    {
      name: 'Somes an Object',
      expect: (result, assert) => assert(result === true),
      setup: () => ({ foo: 1, bar: 2, baz: 3 }),
      tests,
    },
  ];
};
