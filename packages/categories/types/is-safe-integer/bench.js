module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.isSafeInteger(input),
    lodash: input => lodash.isSafeInteger(input),
  };

  return [
    {
      name: 'isSafeInteger => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => 1,
      tests,
    },
    {
      name: 'isSafeInteger => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => Number.MAX_SAFE_INTEGER,
      tests,
    },
    {
      name: 'isSafeInteger => False (1)',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
    {
      name: 'isSafeInteger => False (2)',
      expect: (result, assert) => assert(result === false),
      setup: () => Infinity,
      tests,
    },
  ];
};
