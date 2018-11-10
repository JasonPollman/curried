module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: input => foldr.compose(...input)(1),
    rambda: input => rambda.compose(...input)(1),
    lodash: input => lodash.flowRight(...input)(1),
  };

  return [
    {
      name: 'Composes 2 Functions',
      expect: (result, assert) => assert(result === 2),
      setup: () => [x => x * 2, x => x],
      tests,
    },
    {
      name: 'Composes 3 Functions',
      expect: (result, assert) => assert(result === 4),
      setup: () => [x => x * x, x => x * 2, x => x],
      tests,
    },
  ];
};
