module.exports = ({ foldr, fp }) => {
  const tests = {
    foldr: ([input, args]) => foldr.attemptFx(args, input),
    lodash: ([input, args]) => fp.attempt(args, input),
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
