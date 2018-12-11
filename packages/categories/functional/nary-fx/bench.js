module.exports = ({ fp, foldr }) => {
  const x = (...args) => args.join('');

  const fbinaryFn = foldr.naryFx(2, x);
  const lbinaryFn = fp.ary(2, x);

  const tests = {
    foldr: args => fbinaryFn(...args),
    lodash: args => lbinaryFn(...args),
  };

  return [
    {
      name: 'Fixes Function Arity (Functional)',
      expect: (result, assert) => assert(result === 'ab'),
      setup: () => ['a', 'b', 'c', 'd', 'e'],
      tests,
    },
  ];
};
