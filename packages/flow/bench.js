module.exports = ({ foldr, lodash, rambda }) => {
  const fFlow = foldr.flow([lodash.add, lodash.add]);
  const lFlow = lodash.flow([lodash.add, lodash.add]);

  const tests = {
    foldr: input => fFlow(1, 2),
    lodash: input => lFlow(1, 2),
  };

  return [
    {
      name: 'Composes 2 Functions',
      // expect: (result, assert) => assert(result === 2),
      tests,
    },
    {
      name: 'Composes 3 Functions',
      // expect: (result, assert) => assert(result === 4),
      tests,
    },
  ];
};
