import mapFx from '.';

describe('mapFx', () => {
  it('Should be a function', () => {
    expect(typeof mapFx).toBe('function');
  });

  it('Should map over an array', () => {
    expect(mapFx(x => x * 2, [1, 2, 3])).toEqual([2, 4, 6]);
    expect(mapFx(x => x * 2)([1, 2, 3])).toEqual([2, 4, 6]);
  });

  it('Should work for objects', () => {
    expect(mapFx(x => x * 2, { foo: 1, bar: 2, baz: 3 })).toEqual([2, 4, 6]);
    expect(mapFx(x => x * 2)({ foo: 1, bar: 2, baz: 3 })).toEqual([2, 4, 6]);
  });

  it('Should work for falsy values', () => {
    expect(mapFx(x => x * 2)(null)).toEqual([]);
    expect(mapFx(x => x * 2)(undefined)).toEqual([]);
    expect(mapFx(x => x * 2)('')).toEqual([]);
    expect(mapFx(x => x * 2)(0)).toEqual([]);
    expect(mapFx(x => x * 2)(false)).toEqual([]);
    expect(mapFx(x => x * 2)(NaN)).toEqual([]);
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(mapFx(x => x * 2)(collection)).toEqual([2, 4, 6]);
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(mapFx(x => x * 2)(collection)).toEqual([2, 4, 6, 8]);
  });
});
