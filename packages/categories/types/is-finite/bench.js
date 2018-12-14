module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.isFinite(input),
    lodash: input => lodash.isFinite(input),
  };

  return [
    {
      name: 'isFinite => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => 1,
      tests,
    },
    {
      name: 'isFinite => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => Number.MAX_SAFE_INTEGER,
      tests,
    },
    {
      name: 'isFinite => False (1)',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
    {
      name: 'isFinite => False (2)',
      expect: (result, assert) => assert(result === false),
      setup: () => Infinity,
      tests,
    },
    {
      name: 'isFinite => False (3)',
      expect: (result, assert) => assert(result === false),
      setup: () => -Infinity,
      tests,
    },
  ];
};
