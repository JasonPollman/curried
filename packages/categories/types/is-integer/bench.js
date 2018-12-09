module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.isInteger(input),
    lodash: input => lodash.isInteger(input),
  };

  return [
    {
      name: 'isInteger => True',
      expect: result => result === true,
      setup: () => 17,
      tests,
    },
    {
      name: 'isInteger => True',
      expect: result => result === true,
      setup: () => -17,
      tests,
    },
    {
      name: 'isInteger => False (1)',
      expect: (result, assert) => assert(result === false),
      setup: () => 1.57,
      tests,
    },
    {
      name: 'isInteger => False (2)',
      expect: (result, assert) => assert(result === false),
      setup: () => -1.57,
      tests,
    },
    {
      name: 'isInteger => False (3)',
      expect: (result, assert) => assert(result === false),
      setup: () => 1.000000001,
      tests,
    },
    {
      name: 'isInteger => False (4)',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
  ];
};
