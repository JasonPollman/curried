module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.clamp(...input),
    lodash: input => lodash.clamp(...input),
    ramda: ([input, min, max]) => ramda.clamp(min, max, input),
  };

  return [
    {
      name: 'Clamps a Number (1)',
      expect: (result, assert) => assert(result === 1),
      setup: () => [1, 0, 1],
      tests,
    },
    {
      name: 'Clamps a Number (2)',
      expect: (result, assert) => assert(result === 1),
      setup: () => [1, 1, 10],
      tests,
    },
    {
      name: 'Clamps a Number (3)',
      expect: (result, assert) => assert(result === 1),
      setup: () => [1, -10, 10],
      tests,
    },
    {
      name: 'Clamps a Number (3)',
      expect: (result, assert) => assert(result === -10),
      setup: () => [-20, -10, 10],
      tests,
    },
    {
      name: 'Clamps a Number (3)',
      expect: (result, assert) => assert(result === 10),
      setup: () => [20, -10, 10],
      tests,
    },

    {
      name: 'Clamps a Number (4)',
      expect: (result, assert) => assert(result === 1),
      setup: () => ['1', '0', '1'],
      tests,
    },
    {
      name: 'Clamps a Number (5)',
      expect: (result, assert) => assert(result === 1),
      setup: () => ['1', '1', '10'],
      tests,
    },
    {
      name: 'Clamps a Number (6)',
      expect: (result, assert) => assert(result === 1),
      setup: () => ['1', '-10', '10'],
      tests,
    },
    {
      name: 'Clamps a Number (7)',
      expect: (result, assert) => assert(result === -10),
      setup: () => ['-20', -10, 10],
      tests,
    },
    {
      name: 'Clamps a Number (8)',
      expect: (result, assert) => assert(result === 10),
      setup: () => ['20', -10, 10],
      tests,
    },
  ];
};
