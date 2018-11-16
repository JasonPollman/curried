module.exports = ({ fp, foldr, lodash }) => {
  const x = (...args) => args.join('');

  const fbinary = foldr.nary(x, 2);
  const lbinary = lodash.ary(x, 2);

  const fbinaryFn = foldr.nary.fn(2, x);
  const lbinaryFn = fp.ary(2, x);

  const tests = {
    foldr: args => fbinary(...args),
    lodash: args => lbinary(...args),
  };

  const functionalTests = {
    foldr: args => fbinaryFn(...args),
    lodash: args => lbinaryFn(...args),
  };

  return [
    {
      name: 'Fixes Function Arity',
      expect: (result, assert) => assert(result === 'ab'),
      setup: () => ['a', 'b', 'c', 'd', 'e'],
      tests,
    },
    {
      name: 'Fixes Function Arity (Functional)',
      expect: (result, assert) => assert(result === 'ab'),
      setup: () => ['a', 'b', 'c', 'd', 'e'],
      tests: functionalTests,
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
