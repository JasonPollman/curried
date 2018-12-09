import omitFx from '.';

describe('omitFx', () => {
  it('Should be a function', () => {
    expect(typeof omitFx).toBe('function');
  });

  it('Should omit from array\'s values', () => {
    expect(omitFx(x => x % 2 === 0, [1, 2, 3, 4])).toEqual({
      0: 1,
      2: 3,
    });
  });

  it('Should omit an object\'s values', () => {
    expect(omitFx(null, {})).toEqual({});
    expect(omitFx([], {})).toEqual({});
    expect(omitFx(() => {}, {})).toEqual({});
    expect(omitFx({ foo: 1, bar: 2 }, ['foo', 'bar'])).toEqual({});

    expect(omitFx(['foo', 'bar'])({
      foo: 1,
      bar: 2,
      baz: 0,
      quxx: 3,
    })).toEqual({ baz: 0, quxx: 3 });
  });

  it('Should pick an object\'s values (bad iteratee)', () => {
    expect(omitFx(0)({
      foo: 1,
      bar: 2,
      baz: 0,
      quxx: 3,
    })).toEqual({
      baz: 0,
    });
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(omitFx(val => val > 1)(collection)).toEqual({
      a: 1,
    });
  });

  it('Should work for Map objects (2)', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(omitFx((val, key) => key === 'a', collection)).toEqual({
      b: 2,
      c: 3,
    });
  });

  it('Should work for Map objects (3)', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(omitFx(['a', 'c'])(collection)).toEqual({
      b: 2,
    });
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3]);
    expect(omitFx(val => val > 1)(collection)).toEqual({
      0: 1,
    });
  });

  it('Should work for falsy values', () => {
    expect(omitFx(['foo'])(null)).toEqual({});
    expect(omitFx(['foo'])(undefined)).toEqual({});
    expect(omitFx(['foo'])('')).toEqual({});
    expect(omitFx(['foo'])(0)).toEqual({});
    expect(omitFx(['foo'])(false)).toEqual({});
    expect(omitFx(['foo'])(NaN)).toEqual({});
    expect(omitFx(new Date(), null)).toEqual({});
  });
});
