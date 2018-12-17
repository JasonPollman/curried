module.exports = ({ foldr, fp }) => {
  const tests = {
    foldr: ([x, y]) => foldr.isLessThanFx(y)(x),
    lodash: ([x, y]) => fp.lt(x)(y),
  };

  return [
    {
      name: 'Is Less Than (1)',
      expect: (result, assert) => assert(result === false),
      setup: () => [2, 1],
      tests,
    },
    {
      name: 'Is Less Than (2)',
      expect: (result, assert) => assert(result === false),
      setup: () => [1, 1],
      tests,
    },
    {
      name: 'Is Less Than (3)',
      expect: (result, assert) => assert(result === true),
      setup: () => [1, 2],
      tests,
    },
    {
      name: 'Is Less Than (4)',
      expect: (result, assert) => assert(result === false),
      setup: () => ['b', 'a'],
      tests,
    },
    {
      name: 'Is Less Than (5)',
      expect: (result, assert) => assert(result === true),
      setup: () => ['a', 'b'],
      tests,
    },
  ];
};
