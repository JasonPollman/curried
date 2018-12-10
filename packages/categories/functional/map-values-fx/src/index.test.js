import mapValuesFx from '.';

const square = x => x ** 2;

describe('mapValuesFx', () => {
  it('Should be a function', () => {
    expect(typeof mapValuesFx).toBe('function');
  });

  it('Should map an array\'s values', () => {
    expect(mapValuesFx(square, [1, 2, 3, 4])).toEqual({
      0: 1,
      1: 4,
      2: 9,
      3: 16,
    });
  });

  it('Should map an objects\'s values', () => {
    expect(mapValuesFx(square)({})).toEqual({});
    expect(mapValuesFx(square)({ foo: 1, bar: 2 })).toEqual({ foo: 1, bar: 4 });
  });

  it('Should work with shorthand string iteratees (1)', () => {
    const things = [
      { value: 1, name: 'a', foo: 'bar' },
      { value: 2, name: 'b', foo: 'bar' },
      { value: 2, name: 'c', foo: 'bar' },
      { value: 2, name: 'd', foo: 'bar' },
    ];

    expect(mapValuesFx('name')(things)).toEqual({
      0: 'a',
      1: 'b',
      2: 'c',
      3: 'd',
    });
  });

  it('Should work with shorthand string iteratees (2)', () => {
    const things = {
      a: { value: 1, name: 'a', foo: 'bar' },
      b: { value: 2, name: 'b', foo: 'bar' },
      c: { value: 2, name: 'c', foo: 'bar' },
      d: { value: 2, name: 'd', foo: 'bar' },
    };

    expect(mapValuesFx('name', things)).toEqual({
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd',
    });
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(mapValuesFx(square)(collection)).toEqual({
      a: 1,
      b: 4,
      c: 9,
    });
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3]);
    expect(mapValuesFx(square)(collection)).toEqual({
      0: 1,
      1: 4,
      2: 9,
    });
  });

  it('Should work for falsy values', () => {
    expect(mapValuesFx(square)(null)).toEqual({});
    expect(mapValuesFx(square)(undefined)).toEqual({});
    expect(mapValuesFx(square)('')).toEqual({});
    expect(mapValuesFx(square)(0)).toEqual({});
    expect(mapValuesFx(square)(false)).toEqual({});
    expect(mapValuesFx(square)(NaN)).toEqual({});
  });
});
