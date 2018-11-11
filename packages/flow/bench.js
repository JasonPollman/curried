function add(a, b) { return a + b; }

module.exports = ({ foldr, lodash, rambda }) => {
  console.log([add, add]);
  const fFlow = foldr.flow([add, add]);
  const lFlow = lodash.flow([add, add]);

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
