module.exports = ({ foldr, lodash }) => {
  const x = () => true;

  const ffalse = foldr.negate(x);
  const lfalse = lodash.negate(x);

  const tests = {
    foldr: () => ffalse(),
    lodash: () => lfalse(),
  };

  return [
    {
      name: 'Negates A Function',
      expect: (result, assert) => assert(result === false),
      tests,
    },
    {
      name: 'Negate Function Creation',
      expect: (result, assert) => assert(result === false),
      tests: {
        foldr: () => foldr.negate(x, 2)(),
        lodash: () => lodash.negate(x, 2)(),
      },
    },
  ];
};
