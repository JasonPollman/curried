/* eslint-disable no-underscore-dangle */

module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: ([x, sig, args]) => foldr.rearg(x, sig)(...args),
    lodash: ([x, sig, args]) => lodash.rearg(x, sig)(...args),
  };

  return [
    {
      name: 'Reargs A Function (1)',
      expect: (result, assert) => assert(result === 'yzx'),
      setup: () => [(x, y, z) => x + y + z, [1, 2, 0], ['x', 'y', 'z']],
      tests,
    },
    {
      name: 'Reargs A Function (2)',
      expect: (result, assert) => assert(result === 'yxx'),
      setup: () => [(x, y, z) => x + y + z, [1, 0, 0], ['x', 'y', 'z']],
      tests,
    },
    {
      name: 'Reargs A Function (3)',
      expect: (result, assert) => assert(result === 'zyz'),
      setup: () => [(x, y, z) => x + y + z, [2], ['x', 'y', 'z']],
      tests,
    },
    {
      name: 'Reargs A Function (4)',
      expect: (result, assert) => assert(result === 'xyz'),
      setup: () => [(x, y, z) => x + y + z, null, ['x', 'y', 'z']],
      tests,
    },
    {
      name: 'Rearg Function Creation',
      expect: (result, assert) => assert(typeof result === 'function'),
      tests: {
        foldr: () => foldr.rearg((x, y, z) => x + y + z),
        lodash: () => lodash.rearg((x, y, z) => x + y + z),
      },
    },
  ];
};
