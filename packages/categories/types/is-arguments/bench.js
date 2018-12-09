module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.isArguments(input),
    lodash: input => lodash.isArguments(input),
  };

  return [
    {
      name: 'isArguments => True',
      expect: (result, assert) => assert(result === true),
      setup: () => (function setup() { return arguments; }()),
      tests,
    },
    {
      name: 'isArguments => False (1)',
      expect: (result, assert) => assert(result === false),
      setup: () => false,
      tests,
    },
    {
      name: 'isArguments => False (2)',
      expect: (result, assert) => assert(result === false),
      setup: () => [],
      tests,
    },
  ];
};
