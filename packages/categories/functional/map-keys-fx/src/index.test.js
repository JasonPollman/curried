import mapKeysFx from '.';

describe('mapKeysFx', () => {
  const upperKey = x => x.toUpperCase();

  it('Should be a function', () => {
    expect(typeof mapKeysFx).toBe('function');
  });

  it('Should map an array\'s values', () => {
    expect(mapKeysFx(x => x * 2)([1, 2, 3, 4])).toEqual({
      0: 1,
      2: 2,
      4: 3,
      6: 4,
    });
  });

  it('Should map an objects\'s values', () => {
    expect(mapKeysFx(upperKey, {})).toEqual({});
    expect(mapKeysFx(upperKey, { foo: 1, bar: 2 })).toEqual({ FOO: 1, BAR: 2 });
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);

    function fn(x) {
      return x.toUpperCase();
    }

    expect(mapKeysFx(fn)(collection)).toEqual({
      A: 1,
      B: 2,
      C: 3,
    });
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3]);
    expect(mapKeysFx(x => x)(collection)).toEqual({
      0: 1,
      1: 2,
      2: 3,
    });
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(mapKeysFx(upperKey)(collection)).toEqual({ A: 1, B: 2, C: 3 });
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(mapKeysFx(x => x * 2)(collection)).toEqual({
      0: 1,
      2: 2,
      4: 3,
      6: 4,
    });
  });

  it('Should work for falsy values', () => {
    expect(mapKeysFx(upperKey)(null)).toEqual({});
    expect(mapKeysFx(upperKey)(undefined)).toEqual({});
    expect(mapKeysFx(upperKey)('')).toEqual({});
    expect(mapKeysFx(upperKey)(0)).toEqual({});
    expect(mapKeysFx(upperKey)(false)).toEqual({});
    expect(mapKeysFx(upperKey)(NaN)).toEqual({});
  });
});
