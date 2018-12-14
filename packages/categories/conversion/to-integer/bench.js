module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.toInteger(input),
    lodash: input => lodash.toInteger(input),
  };

  return [
    {
      name: 'Converts to an Integer: (0.111, Number)',
      expect: (result, assert) => assert(result === 0),
      setup: () => 0.111,
      tests,
    },
    {
      name: 'Converts to an Integer: (0.111, String)',
      expect: (result, assert) => assert(result === 0),
      setup: () => '0.111',
      tests,
    },
    {
      name: 'Converts to an Integer: Already Integer',
      expect: (result, assert) => assert(result === 5),
      setup: () => 5,
      tests,
    },
    {
      name: 'Converts to an Integer: Already Integer (2)',
      expect: (result, assert) => assert(result === Number.MAX_SAFE_INTEGER),
      setup: () => Number.MAX_SAFE_INTEGER,
      tests,
    },
    {
      name: 'Converts to an Integer: Number',
      expect: (result, assert) => assert(result === 5),
      setup: () => 5.9,
      tests,
    },
    {
      name: 'Converts to an Integer: String',
      expect: (result, assert) => assert(result === 5),
      setup: () => '5.9',
      tests,
    },
    {
      name: 'Converts to an Integer: Object',
      expect: (result, assert) => assert(result === 5),
      setup: () => ({
        value: 5.12,
        valueOf() {
          return this.value;
        },
      }),
      tests,
    },
    {
      name: 'Converts to an Integer: `null`',
      expect: (result, assert) => assert(result === 0),
      setup: () => null,
      tests,
    },
    {
      name: 'Converts to an Integer: `undefined`',
      expect: (result, assert) => assert(result === 0),
      setup: () => undefined,
      tests,
    },
    {
      name: 'Converts to an Integer: (Octal)',
      expect: (result, assert) => assert(result === 15),
      setup: () => 0o17,
      tests,
    },
    {
      name: 'Converts to an Integer: (Octal, String)',
      expect: (result, assert) => assert(result === 15),
      setup: () => '0o17',
      tests,
    },
    {
      name: 'Converts to an Integer: (Hex)',
      expect: (result, assert) => assert(result === 15),
      setup: () => 0xf,
      tests,
    },
    {
      name: 'Converts to an Integer: (Hex, String)',
      expect: (result, assert) => assert(result === 15),
      setup: () => '0xf',
      tests,
    },
    {
      name: 'Converts to an Integer: (Binary)',
      expect: (result, assert) => assert(result === 5),
      setup: () => 0b101,
      tests,
    },
    {
      name: 'Converts to an Integer: (Binary, String)',
      expect: (result, assert) => assert(result === 5),
      setup: () => '0b101',
      tests,
    },
    {
      name: 'Converts to an Integer: (Exponential)',
      expect: (result, assert) => assert(result === 110),
      setup: () => 1.101e2,
      tests,
    },
    {
      name: 'Converts to an Integer: (Exponential, String)',
      expect: (result, assert) => assert(result === 110),
      setup: () => '1.101e2',
      tests,
    },
  ];
};
