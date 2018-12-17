function add(a, b) { return a + b; }
function double(x) { return x * 2; }

module.exports = ({ foldr, lodash, ramda }) => {
  const fPipe = foldr.pipe(add, double);
  const lFlow = lodash.flow([add, double]);
  const rPipe = ramda.pipe(add, double);

  const tests = {
    foldr: () => fPipe(1, 2),
    lodash: () => lFlow(1, 2),
    ramda: () => rPipe(1, 2),
  };

  return [
    {
      expect: (result, assert) => assert(result === 6),
      name: 'Pipes 2 Functions',
      tests,
    },
    {
      expect: (result, assert) => assert(result === 12),
      name: 'Pipes 3 Functions',
      tests: {
        foldr: () => foldr.pipe(add, double, double)(1, 2),
        lodash: () => lodash.flow([add, double, double])(1, 2),
        ramda: () => ramda.pipe(add, double, double)(1, 2),
      },
    },
  ];
};
