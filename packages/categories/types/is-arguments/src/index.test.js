import isArguments from '.';

describe('isArguments', () => {
  it('Should be a function', () => {
    expect(typeof isArguments).toBe('function');
  });

  it('Should return `true` for Arguments instances', () => {
    (function test() {
      expect(isArguments(arguments)).toBe(true);
    }());
  });

  it('Should return false otherwise', () => {
    expect(isArguments([])).toBe(false);
    expect(isArguments(new Array(0))).toBe(false);
    expect(isArguments('foo')).toBe(false);
    expect(isArguments('')).toBe(false);
    expect(isArguments({})).toBe(false);
    expect(isArguments(0)).toBe(false);
    expect(isArguments(Infinity)).toBe(false);
    expect(isArguments(undefined)).toBe(false);
    expect(isArguments(NaN)).toBe(false);
    expect(isArguments(null)).toBe(false);
    expect(isArguments(() => {})).toBe(false);
  });
});
