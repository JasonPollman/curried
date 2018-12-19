import zipObjectFx from '.';

describe('zipObjectFx', () => {
  it('Should be a function', () => {
    expect(typeof zipObjectFx).toBe('function');
  });

  it('Should always return an object', () => {
    expect(zipObjectFx(undefined)(undefined)).toEqual({});
    expect(zipObjectFx(null)(null)).toEqual({});
    expect(zipObjectFx(NaN)(NaN)).toEqual({});
    expect(zipObjectFx(Infinity)(Infinity)).toEqual({});
    expect(zipObjectFx(0)(0)).toEqual({});
    expect(zipObjectFx(Symbol('foo'))('foo')).toEqual({});
    expect(zipObjectFx(-1)(1)).toEqual({});
  });

  it('Should zip an object', () => {
    expect(zipObjectFx([1, 2, 3])(['a', 'b', 'c'])).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  it('Should zip an object (string)', () => {
    expect(zipObjectFx('def')('abc')).toEqual({
      a: 'd',
      b: 'e',
      c: 'f',
    });
  });

  it('Should zip an object (numbers)', () => {
    expect(zipObjectFx([4, 5, 6])([1, 2, 3])).toEqual({
      1: 4,
      2: 5,
      3: 6,
    });
  });

  it('Should zip an object (with object)', () => {
    expect(zipObjectFx([4, {}, { x: 1 }])([1, 2, 3])).toEqual({
      1: 4,
      2: {},
      3: { x: 1 },
    });
  });

  it('Should ignore additional values', () => {
    expect(zipObjectFx([1, 2, 3, 4, 5, 6, 7, 8])(['a', 'b', 'c'])).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  it('Should return an empty array if keys isn\'t an array or string', () => {
    expect(zipObjectFx([1, 2, 3, 4, 5, 6, 7, 8], null)).toEqual({});
    expect(zipObjectFx([1, 2, 3, 4, 5, 6, 7, 8], Symbol('foo'))).toEqual({});
    expect(zipObjectFx([1, 2, 3, 4, 5, 6, 7, 8], Infinity)).toEqual({});
    expect(zipObjectFx([1, 2, 3, 4, 5, 6, 7, 8], () => {})).toEqual({});
  });

  it('Should return all undefined values if no values are given', () => {
    expect(zipObjectFx(null)([1, 2, 3])).toEqual({
      1: undefined,
      2: undefined,
      3: undefined,
    });

    expect(zipObjectFx(0)([1, 2, 3])).toEqual({
      1: undefined,
      2: undefined,
      3: undefined,
    });

    expect(zipObjectFx(100)([1, 2, 3])).toEqual({
      1: undefined,
      2: undefined,
      3: undefined,
    });
  });
});
