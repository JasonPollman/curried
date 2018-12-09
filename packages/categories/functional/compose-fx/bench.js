module.exports = ({
  fp,
  foldr,
  ramda,
}) => {
  const tests = {
    foldr: input => foldr.compose.f(...input)(1),
    ramda: input => ramda.compose(...input)(1),
    lodash: input => fp.compose(...input)(1),
  };

  return [
    {
      name: 'Composes 2 Functions (Functional)',
      expect: (result, assert) => assert(result === 2),
      setup: () => [x => x, x => x * 2],
      tests,
    },
  ];
};
