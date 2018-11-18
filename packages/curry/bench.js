/* eslint-disable no-underscore-dangle */

module.exports = ({ foldr, lodash, ramda }) => {
  const sum = (x, y) => x + y;
  const long = (a, b, c, d, e, f) => `${a}-${b}-${c}-${d}-${e}-${f}`;

  const fsum = foldr.curry(sum);
  const lsum = lodash.curry(sum);
  const rsum = ramda.curry(sum);

  const flong = foldr.curry(long);
  const llong = lodash.curry(long);
  const rlong = ramda.curry(long);

  return [
    {
      name: 'Curried Function Invocation (Basic)',
      expect: (result, assert) => assert(result === 3),
      tests: {
        foldr: () => fsum(1)(2),
        lodash: () => lsum(1)(2),
        ramda: () => rsum(1)(2),
      },
    },
    {
      name: 'Curried Function Invocation (Empty Invocations)',
      expect: (result, assert) => assert(result === 3),
      tests: {
        foldr: () => fsum()(1)()()(2),
        lodash: () => lsum()(1)()()(2),
        ramda: () => rsum()(1)()()(2),
      },
    },
    {
      name: 'Curried Function Invocation (Full Arity)',
      expect: (result, assert) => assert(result === 3),
      tests: {
        foldr: () => fsum(1, 2),
        lodash: () => lsum(1, 2),
        ramda: () => rsum(1, 2),
      },
    },
    {
      name: 'Curried Function Invocation (Pleacholders)',
      expect: (result, assert) => assert(result === 3),
      tests: {
        foldr: () => fsum(foldr._, 2)(1),
        lodash: () => lsum(lodash._, 2)(1),
        ramda: () => rsum(ramda.__, 2)(1),
      },
    },
    {
      name: 'Curried Function Invocation (Multi)',
      expect: (result, assert) => assert(result === 'a-b-c-d-e-f'),
      tests: {
        foldr: () => flong('a')('b')('c')('d', 'e', 'f'),
        lodash: () => llong('a')('b')('c')('d', 'e', 'f'),
        ramda: () => rlong('a')('b')('c')('d', 'e', 'f'),
      },
    },
    {
      name: 'Curried Function Invocation (Multi, Placeholders)',
      expect: (result, assert) => assert(result === 'a-b-c-d-e-f'),
      tests: {
        foldr: () => flong('a')(foldr._)('b')('c')('d', foldr._, 'f')('e'),
        lodash: () => llong('a')(lodash._)('b')('c')('d', lodash._, 'f')('e'),
        ramda: () => rlong('a')(ramda.__)('b')('c')('d', ramda.__, 'f')('e'),
      },
    },
    {
      name: 'Curry Function Creation',
      expect: (result, assert) => assert(typeof result === 'function'),
      setup: () => sum,
      tests: {
        foldr: input => foldr.curry(input),
        lodash: input => lodash.curry(input),
        ramda: input => ramda.curry(input),
      },
    },
  ];
};
