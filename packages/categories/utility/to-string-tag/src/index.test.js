import toStringTag from '.';

describe('toStringTag', () => {
  it('Should be a function', () => {
    expect(typeof toStringTag).toBe('function');
  });

  it('Should return the propert string tags', () => {
    /* eslint-disable no-new-wrappers */
    expect(toStringTag(0)).toBe('[object Number]');
    expect(toStringTag(new Number(5))).toBe('[object Number]');

    expect(toStringTag('')).toBe('[object String]');
    expect(toStringTag(new String('foo'))).toBe('[object String]');

    expect(toStringTag([])).toBe('[object Array]');
    expect(toStringTag({})).toBe('[object Object]');
    expect(toStringTag(new class Foo {}())).toBe('[object Object]');

    expect(toStringTag(null)).toBe('[object Null]');
    expect(toStringTag(undefined)).toBe('[object Undefined]');
    /* eslint-enable no-new-wrappers */
  });
});
