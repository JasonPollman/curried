module.exports = ({ foldr, lodash }) => {
  const sum = (x, y) => x + y;

  const sumArgs = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) total += args[i];
    return total;
  };

  const join = (x, y, ...args) => [x, y, args.join('.')].join('-');

  const tests = {
    foldr: x => foldr.spread(sum)(x),
    lodash: x => lodash.spread(sum)(x),
  };

  return [
    {
      name: 'Spread (No Args)',
      expect: (result, assert) => assert(Number.isNaN(result)),
      setup: () => {},
      tests,
    },
    {
      name: 'Spread (Simple)',
      expect: (result, assert) => assert(result === 4),
      setup: () => [1, 3],
      tests,
    },
    {
      name: 'Spread (Large)',
      expect: (result, assert) => assert(result === 10000),
      setup: () => Array(10000).fill(1),
      tests: {
        foldr: x => foldr.spread(sumArgs)(x),
        lodash: x => lodash.spread(sumArgs)(x),
      },
    },
    {
      name: 'Spread (With Start Index)',
      expect: (result, assert) => assert(result === 'x-y-1.2.3'),
      setup: () => ['x', 'y', [1, 2, 3]],
      tests: {
        foldr: x => foldr.spread(join, 2)(...x),
        lodash: x => lodash.spread(join, 2)(...x),
      },
    },
  ];
};
