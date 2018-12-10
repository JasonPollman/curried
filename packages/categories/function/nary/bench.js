module.exports = ({ foldr, lodash }) => {
  const x = (...args) => args.join('');

  const fbinary = foldr.nary(x, 2);
  const lbinary = lodash.ary(x, 2);

  const tests = {
    foldr: args => fbinary(...args),
    lodash: args => lbinary(...args),
  };

  return [
    {
      name: 'Fixes Function Arity',
      expect: (result, assert) => assert(result === 'ab'),
      setup: () => ['a', 'b', 'c', 'd', 'e'],
      tests,
    },
    {
      name: 'Nary Function Creation',
      expect: (result, assert) => assert(result === 'ab'),
      setup: () => ['a', 'b', 'c', 'd', 'e'],
      tests: {
        foldr: args => foldr.nary(x, 2)(...args),
        lodash: args => lodash.ary(x, 2)(...args),
      },
    },
  ];
};
