import compact from '.';

describe('compact', () => {
  it('Should remove falsy values from an array', () => {
    expect(compact([0, 'hey', 'there', undefined])).toEqual(['hey', 'there']);
    expect(compact(['', null, 'foo', 'bar'])).toEqual(['foo', 'bar']);
    expect(compact([{}, 'hey', 'there', null])).toEqual([{}, 'hey', 'there']);
    expect(compact([0, 'hey', 'there', undefined])).toEqual(['hey', 'there']);
    expect(compact([true, true, true, true])).toEqual([true, true, true, true]);
    expect(compact([true, true, false, true])).toEqual([true, true, true]);
  });

  it('Should work on array-like objects', () => {
    const obj = {
      0: 0,
      1: 'hey',
      2: 'there',
      3: undefined,
      length: 4,
    };

    expect(compact(obj)).toEqual(['hey', 'there']);
  });

  it('Should remove falsy values from an array (length 0)', () => {
    const array = [];
    expect(compact(array)).toEqual([]);
    expect(compact(array)).not.toBe(array);
  });

  it('Should properly handle non-array values', () => {
    expect(compact(null)).toEqual([]);
    expect(compact(undefined)).toEqual([]);
    expect(compact('foo')).toEqual(['f', 'o', 'o']);
    expect(compact('')).toEqual([]);
    expect(compact({ foo: 'bar' })).toEqual([]);
  });
});
