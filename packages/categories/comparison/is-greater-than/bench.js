module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.isGreaterThan(...input),
    lodash: input => lodash.gt(...input),
    ramda: input => ramda.gt(...input),
  };

  return [
    {
      name: 'Is Greater Than (1)',
      expect: (result, assert) => assert(result === false),
      setup: () => [1, 2],
      tests,
    },
    {
      name: 'Is Greater Than (2)',
      expect: (result, assert) => assert(result === false),
      setup: () => [1, 1],
      tests,
    },
    {
      name: 'Is Greater Than (3)',
      expect: (result, assert) => assert(result === true),
      setup: () => [2, 1],
      tests,
    },
    {
      name: 'Is Greater Than (4)',
      expect: (result, assert) => assert(result === false),
      setup: () => ['a', 'b'],
      tests,
    },
    {
      name: 'Is Greater Than (5)',
      expect: (result, assert) => assert(result === true),
      setup: () => ['b', 'a'],
      tests,
    },
  ];
};
