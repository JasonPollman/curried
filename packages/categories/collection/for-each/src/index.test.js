import forEach from '.';

describe('forEach', () => {
  it('Should be a function', () => {
    expect(typeof forEach).toBe('function');
  });

  it('Should iterate over all items (empty input)', () => {
    expect(forEach(null, () => 5)).toEqual(undefined);
  });

  it('Should iterate over all items', () => {
    let i = 0;
    const keys = [];
    const vals = [];

    expect(forEach([1, 3, 5, 7], (val, key) => {
      i++;
      keys.push(key);
      vals.push(val);
    })).toEqual(undefined);

    expect(i).toBe(4);
    expect(keys).toEqual([0, 1, 2, 3]);
    expect(vals).toEqual([1, 3, 5, 7]);
  });

  it('Should work for objects', () => {
    const collection = {
      foo: 1,
      bar: 2,
      baz: 3,
      quxx: 4,
    };

    let i = 0;
    const keys = [];
    const vals = [];

    expect(forEach(collection, (val, key) => {
      i++;
      keys.push(key);
      vals.push(val);
    })).toEqual(undefined);

    expect(i).toBe(4);
    expect(keys).toEqual(['foo', 'bar', 'baz', 'quxx']);
    expect(vals).toEqual([1, 2, 3, 4]);
  });
});
