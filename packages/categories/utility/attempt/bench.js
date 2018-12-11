module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: ([input, args]) => foldr.attempt(input, args),
    lodash: ([input, args]) => lodash.attempt(input, ...args),
  };

  return [
    {
      name: 'Attempts `fn` (1)',
      expect: (result, assert) => assert(result === 100),
      setup: () => [() => 100, []],
      tests,
    },
    {
      name: 'Attempts `fn` (2)',
      expect: (result, assert) => assert(result.message === 'foo'),
      setup: () => [() => {
        throw new Error('foo');
      }, []],
      tests,
    },
  ];
};
