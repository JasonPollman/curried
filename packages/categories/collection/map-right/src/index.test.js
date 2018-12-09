import mapRight from '.';

describe('mapRight', () => {
  it('Should be a function', () => {
    expect(typeof mapRight).toBe('function');
  });

  it('Should mapRight over an array in reverse', () => {
    expect(mapRight([1, 2, 3], x => x * 2)).toEqual([6, 4, 2]);
  });

  it('Should work for objects, in reverse', () => {
    expect(mapRight({ foo: 1, bar: 2, baz: 3 }, x => x * 2)).toEqual([6, 4, 2]);
  });

  it('Should work for falsy values', () => {
    expect(mapRight(null, x => x * 2)).toEqual([]);
    expect(mapRight(undefined, x => x * 2)).toEqual([]);
    expect(mapRight('', x => x * 2)).toEqual([]);
    expect(mapRight(0, x => x * 2)).toEqual([]);
    expect(mapRight(false, x => x * 2)).toEqual([]);
    expect(mapRight(NaN, x => x * 2)).toEqual([]);
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(mapRight(collection, x => x * 2)).toEqual([6, 4, 2]);
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(mapRight(collection, x => x * 2)).toEqual([8, 6, 4, 2]);
  });
});
