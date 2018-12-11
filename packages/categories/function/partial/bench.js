/* eslint-disable no-underscore-dangle */

module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: x => foldr.partial(x, foldr._, 1)(2),
    lodash: x => lodash.partial(x, lodash._, 1)(2),
    ramda: x => ramda.partial(x, [ramda.__, 1])(2),
  };

  return [
    {
      name: 'Partials A Function',
      expect: (result, assert) => assert(result === 3),
      setup: () => (x, y) => x + y,
      tests,
    },
    {
      name: 'Partials A Function (No Placeholders)',
      expect: (result, assert) => assert(result === 3),
      setup: () => (x, y) => x + y,
      tests: {
        foldr: x => foldr.partial(x, 1)(2),
        lodash: x => lodash.partial(x, 1)(2),
        ramda: x => ramda.partial(x, [1])(2),
      },
    },
    {
      name: 'Partial Function Creation',
      expect: (result, assert) => assert(result(4) === 5),
      setup: () => (x, y) => x + y,
      tests: {
        foldr: x => foldr.partial(x, foldr._, 1),
        lodash: x => lodash.partial(x, lodash._, 1),
        ramda: x => ramda.partial(x, [ramda.__, 1]),
      },
    },
  ];
};
