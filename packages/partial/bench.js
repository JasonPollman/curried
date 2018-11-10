/* eslint-disable no-underscore-dangle */

module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: x => foldr.partial(x, foldr._, 1)(2),
    lodash: x => lodash.partial(x, lodash._, 1)(2),
    rambda: x => rambda.partial(x, rambda.__, 1)(2),
  };

  return [
    {
      name: 'Partials A Function',
      expect: (result, assert) => assert(result === 3),
      setup: () => (x, y) => x + y,
      tests,
    },
    {
      name: 'Partial Function Creation',
      expect: (result, assert) => assert(result(4) === 5),
      setup: () => (x, y) => x + y,
      tests: {
        foldr: x => foldr.partial(x, foldr._, 1),
        lodash: x => lodash.partial(x, lodash._, 1),
        rambda: x => rambda.partial(x, rambda.__, 1),
      },
    },
  ];
};
