/**
 * Tests for the `memoize` function.
 * @since 10/23/18
 * @file
 */

import memoize from '.';

describe('curry', () => {
  it('Should be a function', () => {
    expect(typeof memoize).toBe('function');
  });

  it('Should expose a default `Cache` property', () => {
    expect(typeof memoize.Cache).toBe('function');
  });

  it('Should memoize a function', () => {
    const fn = (x, y) => x + y;
    const memoized = memoize(fn);

    expect(memoized(1, 2)).toBe(3);
    expect(memoized.cache.data).toEqual({
      '{"0":1,"1":2}': 3,
    });

    expect(memoized(1, 2)).toBe(3);
    expect(memoized.cache.data).toEqual({
      '{"0":1,"1":2}': 3,
    });

    expect(memoized(3, 4)).toBe(7);
    expect(memoized.cache.data).toEqual({
      '{"0":1,"1":2}': 3,
      '{"0":3,"1":4}': 7,
    });
  });

  it('Should memoize a function (custom cache)', () => {
    const fn = (x, y) => x + y;
    const memoized = memoize(fn);
    memoized.cache = new Map();

    expect(memoized(1, 2)).toBe(3);
    expect(Array.from(memoized.cache.entries())).toEqual([
      ['{"0":1,"1":2}', 3],
    ]);

    expect(memoized(1, 2)).toBe(3);
    expect(Array.from(memoized.cache.entries())).toEqual([
      ['{"0":1,"1":2}', 3],
    ]);


    expect(memoized(3, 4)).toBe(7);
    expect(Array.from(memoized.cache.entries())).toEqual([
      ['{"0":1,"1":2}', 3],
      ['{"0":3,"1":4}', 7],
    ]);
  });

  it('Should memoize a function (custom cache 2)', () => {
    const fn = (x, y) => x + y;
    const memoized = memoize(fn, JSON.stringify, new Map());

    expect(memoized(1, 2)).toBe(3);
    expect(Array.from(memoized.cache.entries())).toEqual([
      ['{"0":1,"1":2}', 3],
    ]);

    expect(memoized(1, 2)).toBe(3);
    expect(Array.from(memoized.cache.entries())).toEqual([
      ['{"0":1,"1":2}', 3],
    ]);


    expect(memoized(3, 4)).toBe(7);
    expect(Array.from(memoized.cache.entries())).toEqual([
      ['{"0":1,"1":2}', 3],
      ['{"0":3,"1":4}', 7],
    ]);
  });

  it('Should memoize a function (clearing cache)', () => {
    const fn = (x, y) => x + y;
    const memoized = memoize(fn);

    expect(memoized(1, 2)).toBe(3);
    expect(memoized.cache.data).toEqual({
      '{"0":1,"1":2}': 3,
    });

    expect(memoized(3, 4)).toBe(7);
    expect(memoized.cache.data).toEqual({
      '{"0":1,"1":2}': 3,
      '{"0":3,"1":4}': 7,
    });

    memoized.cache.clear();
    expect(memoized.cache.data).toEqual({});

    expect(memoized(1, 4)).toBe(5);
    expect(memoized.cache.data).toEqual({
      '{"0":1,"1":4}': 5,
    });
  });

  it('Should memoize a function (deleting a cached value)', () => {
    const fn = (x, y) => x + y;
    const memoized = memoize(fn);

    expect(memoized(1, 2)).toBe(3);
    expect(memoized.cache.data).toEqual({
      '{"0":1,"1":2}': 3,
    });

    expect(memoized(3, 4)).toBe(7);
    expect(memoized.cache.data).toEqual({
      '{"0":1,"1":2}': 3,
      '{"0":3,"1":4}': 7,
    });

    memoized.cache.delete('{"0":3,"1":4}');
    expect(memoized.cache.data).toEqual({
      '{"0":1,"1":2}': 3,
    });

    expect(memoized(1, 4)).toBe(5);
    expect(memoized.cache.data).toEqual({
      '{"0":1,"1":2}': 3,
      '{"0":1,"1":4}': 5,
    });
  });

  it('Should memoize a function (and retain cache size)', () => {
    const fn = (x, y) => x + y;
    const memoized = memoize(fn);

    expect(memoized.cache.size).toBe(0);
    expect(memoized(1, 2)).toBe(3);
    expect(memoized.cache.data).toEqual({
      '{"0":1,"1":2}': 3,
    });

    expect(memoized.cache.size).toBe(1);

    expect(memoized(3, 4)).toBe(7);
    expect(memoized.cache.data).toEqual({
      '{"0":1,"1":2}': 3,
      '{"0":3,"1":4}': 7,
    });

    expect(memoized.cache.size).toBe(2);

    memoized.cache.delete('{"0":3,"1":4}');
    expect(memoized.cache.data).toEqual({
      '{"0":1,"1":2}': 3,
    });

    expect(memoized.cache.size).toBe(1);
    expect(memoized(1, 4)).toBe(5);

    expect(memoized.cache.size).toBe(2);
    expect(memoized(1, 4)).toBe(5);

    expect(memoized.cache.size).toBe(2);
    expect(memoized(1, 4)).toBe(5);

    expect(memoized.cache.size).toBe(2);
    expect(memoized(1, 4)).toBe(5);

    expect(memoized.cache.data).toEqual({
      '{"0":1,"1":2}': 3,
      '{"0":1,"1":4}': 5,
    });
  });

  it('Should memoize a function (cache size should set properly)', () => {
    const fn = (x, y) => x + y;
    const memoized = memoize(fn);

    expect(memoized.cache.size).toBe(0);
    expect(memoized(1, 2)).toBe(3);
    expect(memoized.cache.data).toEqual({
      '{"0":1,"1":2}': 3,
    });

    expect(memoized.cache.size).toBe(1);
    memoized.cache.set('foo', 'bar');
    memoized.cache.set('foo', 'bar');
    memoized.cache.set('foo', 'bar');
    expect(memoized.cache.size).toBe(2);

    memoized.cache.delete('foo');
    expect(memoized.cache.size).toBe(1);

    memoized.cache.delete('xxx');
    expect(memoized.cache.size).toBe(1);

    memoized.cache.clear();
    expect(memoized.cache.size).toBe(0);
  });

  it('Should throw if `fn` isn\'t a function', () => {
    expect(() => memoize()).toThrow('Argument for parameter "fn" must be a function.');
  });

  it('Should throw if `resolver` isn\'t a function', () => {
    expect(() => memoize(() => {}, null)).toThrow('Argument for parameter "resolver" must be a function.');
  });
});
