/* eslint-disable no-underscore-dangle */

module.exports = ({ foldr, lodash, rambda }) => {
  const sum = (x, y) => x + y;
  const long = (a, b, c, d, e, f) => `${a}-${b}-${c}-${d}-${e}-${f}`;

  const fsum = foldr.curry(sum);
  const lsum = lodash.curry(sum);
  const rsum = rambda.curry(sum);

  const flong = foldr.curry(long);
  const llong = lodash.curry(long);
  const rlong = rambda.curry(long);

  return [
    {
      name: 'Curried Function Invocation (1)',
      expect: (result, assert) => assert(result === 3),
      tests: {
        foldr: () => fsum(1)(2),
        lodash: () => lsum(1)(2),
        rambda: () => rsum(1)(2),
      },
    },
    {
      name: 'Curried Function Invocation (2)',
      expect: (result, assert) => assert(result === 3),
      tests: {
        foldr: () => fsum(1, 2),
        lodash: () => lsum(1, 2),
        rambda: () => rsum(1, 2),
      },
    },
    {
      name: 'Curried Function Invocation (3)',
      expect: (result, assert) => assert(result === 3),
      tests: {
        foldr: () => fsum(foldr._, 2)(1),
        lodash: () => lsum(lodash._, 2)(1),
        rambda: () => rsum(rambda.__, 2)(1),
      },
    },
    {
      name: 'Curried Function Invocation (4)',
      expect: (result, assert) => assert(result === 'a-b-c-d-e-f'),
      tests: {
        foldr: () => flong('a')('b')('c')('d', 'e', 'f'),
        lodash: () => llong('a')('b')('c')('d', 'e', 'f'),
        rambda: () => rlong('a')('b')('c')('d', 'e', 'f'),
      },
    },
    {
      name: 'Curried Function Invocation (5)',
      expect: (result, assert) => assert(result === 'a-b-c-d-e-f'),
      tests: {
        foldr: () => flong('a')(foldr._)('b')('c')('d', foldr._, 'f')('e'),
        lodash: () => llong('a')(lodash._)('b')('c')('d', lodash._, 'f')('e'),
        rambda: () => rlong('a')(rambda.__)('b')('c')('d', rambda.__, 'f')('e'),
      },
    },
    {
      name: 'Curry Function Creation',
      expect: (result, assert) => assert(typeof result === 'function'),
      setup: () => sum,
      tests: {
        foldr: input => foldr.curry(input),
        lodash: input => lodash.curry(input),
        rambda: input => rambda.curry(input),
      },
    },
  ];
};
