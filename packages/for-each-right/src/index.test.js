/**
 * Tests for the `forEachRight` function.
 * @since 11/10/18
 * @file
 */

import forEachRight from '.';

describe('forEachRight', () => {
  it('Should be a function', () => {
    expect(typeof forEachRight).toBe('function');
  });

  it('Should iterate over all items (empty input)', () => {
    expect(forEachRight(null, () => 5)).toEqual(undefined);
  });

  it('Should iterate over all items', () => {
    let i = 0;
    const keys = [];
    const vals = [];

    expect(forEachRight([1, 3, 5, 7], (val, key) => {
      i++;
      keys.push(key);
      vals.push(val);
    })).toEqual(undefined);

    expect(i).toBe(4);
    expect(keys).toEqual([3, 2, 1, 0]);
    expect(vals).toEqual([7, 5, 3, 1]);
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

    expect(forEachRight(collection, (val, key) => {
      i++;
      keys.push(key);
      vals.push(val);
    })).toEqual(undefined);

    expect(i).toBe(4);
    expect(keys).toEqual(['quxx', 'baz', 'bar', 'foo']);
    expect(vals).toEqual([4, 3, 2, 1]);
  });
});
