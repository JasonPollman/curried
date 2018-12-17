import isEqualFx from '.';

describe('isEqualFx', () => {
  it('Should be a function', () => {
    expect(typeof isEqualFx).toBe('function');
  });

  it('Should return `true` for things that pass the SameValueZero comparison test', () => {
    expect(isEqualFx(undefined)(undefined)).toBe(true);
    expect(isEqualFx(null)(null)).toBe(true);
    expect(isEqualFx(true)(true)).toBe(true);
    expect(isEqualFx(false)(false)).toBe(true);
    expect(isEqualFx('foo')('foo')).toBe(true);
    expect(isEqualFx(0)(0)).toBe(true);
    expect(isEqualFx(0)(-0)).toBe(true);
    expect(isEqualFx(0)(+0)).toBe(true);
    expect(isEqualFx(-0)(+0)).toBe(true);
    expect(isEqualFx(NaN)(NaN)).toBe(true);

    const obj = {};
    expect(isEqualFx(obj)(obj)).toBe(true);
  });

  it('Should return `false` for things that fail the SameValueZero comparison test', () => {
    expect(isEqualFx(false)(0)).toBe(false);
    expect(isEqualFx(false)('')).toBe(false);
    expect(isEqualFx(0)('')).toBe(false);
    expect(isEqualFx('0')(0)).toBe(false);
    expect(isEqualFx('17')(17)).toBe(false);
    expect(isEqualFx('1,2')([1, 2])).toBe(false);
    expect(isEqualFx(undefined)(null)).toBe(false);
    expect(isEqualFx(false)(null)).toBe(false);
    expect(isEqualFx(undefined)(false)).toBe(false);
    expect(isEqualFx({})({})).toBe(false);
    expect(isEqualFx(0)(null)).toBe(false);
    expect(isEqualFx(NaN)(0)).toBe(false);
    expect(isEqualFx(NaN)('foo')).toBe(false);
    expect(isEqualFx(NaN)(null)).toBe(false);
    expect(isEqualFx(NaN)(undefined)).toBe(false);

    /* eslint-disable no-new-wrappers */
    expect(isEqualFx('foo')(new String('foo'))).toBe(false);
    expect(isEqualFx(new String('foo'))(new String('foo'))).toBe(false);
  });
});
