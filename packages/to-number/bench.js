module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.toNumber(input),
    lodash: input => lodash.toNumber(input),
  };

  return [
    {
      name: 'Converts to a Number: (0, Number)',
      expect: (result, assert) => assert(result === 0),
      setup: () => 0,
      tests,
    },
    {
      name: 'Converts to a Number: (0, String)',
      expect: (result, assert) => assert(result === 0),
      setup: () => '0',
      tests,
    },
    {
      name: 'Converts to a Number: Number',
      expect: (result, assert) => assert(result === 5),
      setup: () => 5,
      tests,
    },
    {
      name: 'Converts to a Number: String',
      expect: (result, assert) => assert(result === 5),
      setup: () => '5',
      tests,
    },
    {
      name: 'Converts to a Number: Object',
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
      name: 'Converts to a Number: Array',
      expect: (result, assert) => assert(result === 1),
      setup: () => [1],
      tests,
    },
    {
      name: 'Converts to a Number: Array (2)',
      expect: (result, assert) => assert(result === 1),
      setup: () => ['1'],
      tests,
    },
    {
      name: 'Converts to a Number: `null`',
      expect: (result, assert) => assert(result === 0),
      setup: () => null,
      tests,
    },
    {
      name: 'Converts to a Number: `undefined`',
      expect: (result, assert) => assert(Number.isNaN(result)),
      setup: () => undefined,
      tests,
    },
    {
      name: 'Converts to a Number: (Octal)',
      expect: (result, assert) => assert(result === 15),
      setup: () => 0o17,
      tests,
    },
    {
      name: 'Converts to a Number: (Octal, String)',
      expect: (result, assert) => assert(result === 15),
      setup: () => '0o17',
      tests,
    },
    {
      name: 'Converts to a Number: (Hex)',
      expect: (result, assert) => assert(result === 15),
      setup: () => 0xf,
      tests,
    },
    {
      name: 'Converts to a Number: (Hex, String)',
      expect: (result, assert) => assert(result === 15),
      setup: () => '0xf',
      tests,
    },
    {
      name: 'Converts to a Number: (Binary)',
      expect: (result, assert) => assert(result === 5),
      setup: () => 0b101,
      tests,
    },
    {
      name: 'Converts to a Number: (Binary, String)',
      expect: (result, assert) => assert(result === 5),
      setup: () => '0b101',
      tests,
    },
    {
      name: 'Converts to a Number: (Exponential)',
      expect: (result, assert) => assert(result === 110.1),
      setup: () => 1.101e2,
      tests,
    },
    {
      name: 'Converts to a Number: (Exponential, String)',
      expect: (result, assert) => assert(result === 110.1),
      setup: () => '1.101e2',
      tests,
    },
  ];
};
