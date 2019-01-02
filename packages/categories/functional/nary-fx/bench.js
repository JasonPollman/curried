module.exports = ({ fp, foldr }) => {
  const x = (...args) => args.join('');

  const fbinaryFn = foldr.naryFx(2)(x);
  const lbinaryFn = fp.ary(2)(x);

  const tests = {
    foldr: args => fbinaryFn(...args),
    lodash: args => lbinaryFn(...args),
  };

  return [
    {
      name: 'Fixes Function Arity (Invocation)',
      expect: (result, assert) => assert(result === 'ab'),
      setup: () => ['a', 'b', 'c', 'd', 'e'],
      tests,
    },
    {
      name: 'Fixes Function Arity (Creation)',
      expect: (result, assert) => assert(result === 'abc'),
      setup: () => ['a', 'b', 'c', 'd', 'e'],
      tests: {
        foldr: args => foldr.naryFx(3)(x)(...args),
        lodash: args => fp.ary(3)(x)(...args),
      },
    },
  ];
};
