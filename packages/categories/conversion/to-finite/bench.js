module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.toFinite(input),
    lodash: input => lodash.toFinite(input),
  };

  return [
    {
      name: 'Converts to a Finite Number: (0, Number)',
      expect: (result, assert) => assert(result === 0),
      setup: () => 0,
      tests,
    },
    {
      name: 'Converts to a Finite Number: (0, String)',
      expect: (result, assert) => assert(result === 0),
      setup: () => '0',
      tests,
    },
    {
      name: 'Converts to a Finite Number: Finite',
      expect: (result, assert) => assert(result === 5),
      setup: () => 5,
      tests,
    },
    {
      name: 'Converts to a Finite Number: String',
      expect: (result, assert) => assert(result === 5),
      setup: () => '5',
      tests,
    },
    {
      name: 'Converts to a Finite Number: Object',
      expect: (result, assert) => assert(result === 5),
      setup: () => ({
        value: 5,
        valueOf() {
          return this.value;
        },
      }),
      tests,
    },
    {
      name: 'Converts to a Finite: Array',
      expect: (result, assert) => assert(result === 1),
      setup: () => [1],
      tests,
    },
    {
      name: 'Converts to a Finite: Array (2)',
      expect: (result, assert) => assert(result === 1),
      setup: () => ['1'],
      tests,
    },
    {
      name: 'Converts to a Finite: `null`',
      expect: (result, assert) => assert(result === 0),
      setup: () => null,
      tests,
    },
    {
      name: 'Converts to a Finite: `undefined`',
      expect: (result, assert) => assert(result === 0),
      setup: () => undefined,
      tests,
    },
    {
      name: 'Converts to a Finite: (Octal)',
      expect: (result, assert) => assert(result === 15),
      setup: () => 0o17,
      tests,
    },
    {
      name: 'Converts to a Finite: (Octal, String)',
      expect: (result, assert) => assert(result === 15),
      setup: () => '0o17',
      tests,
    },
    {
      name: 'Converts to a Finite: (Hex)',
      expect: (result, assert) => assert(result === 15),
      setup: () => 0xf,
      tests,
    },
    {
      name: 'Converts to a Finite: (Hex, String)',
      expect: (result, assert) => assert(result === 15),
      setup: () => '0xf',
      tests,
    },
    {
      name: 'Converts to a Finite: (Binary)',
      expect: (result, assert) => assert(result === 5),
      setup: () => 0b101,
      tests,
    },
    {
      name: 'Converts to a Finite: (Binary, String)',
      expect: (result, assert) => assert(result === 5),
      setup: () => '0b101',
      tests,
    },
    {
      name: 'Converts to a Finite: (Exponential)',
      expect: (result, assert) => assert(result === 110.1),
      setup: () => 1.101e2,
      tests,
    },
    {
      name: 'Converts to a Finite: (Exponential, String)',
      expect: (result, assert) => assert(result === 110.1),
      setup: () => '1.101e2',
      tests,
    },
    {
      name: 'Converts to a Finite: (Infinity)',
      expect: (result, assert) => assert(result === Number.MAX_VALUE),
      setup: () => Infinity,
      tests,
    },
    {
      name: 'Converts to a Finite: (-Infinity)',
      expect: (result, assert) => assert(result === -Number.MAX_VALUE),
      setup: () => -Infinity,
      tests,
    },
  ];
};
