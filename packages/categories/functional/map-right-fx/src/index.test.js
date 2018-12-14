import mapRightFx from '.';

describe('mapRightFx', () => {
  it('Should be a function', () => {
    expect(typeof mapRightFx).toBe('function');
  });

  it('Should mapRight over an array in reverse', () => {
    expect(mapRightFx(x => x * 2, [1, 2, 3])).toEqual([6, 4, 2]);
  });

  it('Should work for objects, in reverse', () => {
    expect(mapRightFx(x => x * 2, { foo: 1, bar: 2, baz: 3 })).toEqual([6, 4, 2]);
  });

  it('Should work for falsy values', () => {
    expect(mapRightFx(x => x * 2)(null)).toEqual([]);
    expect(mapRightFx(x => x * 2)(undefined)).toEqual([]);
    expect(mapRightFx(x => x * 2)('')).toEqual([]);
    expect(mapRightFx(x => x * 2)(0)).toEqual([]);
    expect(mapRightFx(x => x * 2)(false)).toEqual([]);
    expect(mapRightFx(x => x * 2)(NaN)).toEqual([]);
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(mapRightFx(x => x * 2)(collection)).toEqual([6, 4, 2]);
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(mapRightFx(x => x * 2)(collection)).toEqual([8, 6, 4, 2]);
  });
});
