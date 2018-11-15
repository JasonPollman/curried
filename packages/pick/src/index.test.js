/**
 * Tests for the `pick` function.
 * @since 11/10/18
 * @file
 */

import pick from '.';

describe('pick', () => {
  it('Should be a function', () => {
    expect(typeof pick).toBe('function');
  });

  it('Should pick from array\'s values', () => {
    expect(pick([1, 2, 3, 4], x => x % 2 === 0)).toEqual({
      1: 2,
      3: 4,
    });
  });

  it('Should pick an object\'s values', () => {
    expect(pick({}, null)).toEqual({});
    expect(pick({}, [])).toEqual({});
    expect(pick({}, () => {})).toEqual({});
    expect(pick({ foo: 1, bar: 2 }, ['foo', 'bar'])).toEqual({ foo: 1, bar: 2 });

    expect(pick({
      foo: 1,
      bar: 2,
      baz: 0,
      quxx: 3,
    }, ['foo', 'bar'])).toEqual({ foo: 1, bar: 2 });
  });

  it('Should pick an object\'s values (identity)', () => {
    expect(pick({
      foo: 1,
      bar: 2,
      baz: 0,
      quxx: 3,
    })).toEqual({
      foo: 1,
      bar: 2,
      quxx: 3,
    });
  });

  it('Should pick an object\'s values (bad iteratee)', () => {
    expect(pick({
      foo: 1,
      bar: 2,
      baz: 0,
      quxx: 3,
    }, 0)).toEqual({
      foo: 1,
      bar: 2,
      quxx: 3,
    });
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(pick(collection, val => val > 1)).toEqual({
      b: 2,
      c: 3,
    });
  });

  it('Should work for Map objects (2)', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(pick(collection, (val, key) => key === 'a')).toEqual({
      a: 1,
    });
  });

  it('Should work for Map objects (3)', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(pick(collection, ['a', 'c'])).toEqual({
      a: 1,
      c: 3,
    });
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3]);
    expect(pick(collection, val => val > 1)).toEqual({
      1: 2,
      2: 3,
    });
  });

  it('Should work for falsy values', () => {
    expect(pick(null, ['foo'])).toEqual({});
    expect(pick(undefined, ['foo'])).toEqual({});
    expect(pick('', ['foo'])).toEqual({});
    expect(pick(0, ['foo'])).toEqual({});
    expect(pick(false, ['foo'])).toEqual({});
    expect(pick(NaN, ['foo'])).toEqual({});

    expect(pick(null)).toEqual({});
    expect(pick(undefined)).toEqual({});
    expect(pick('')).toEqual({});
    expect(pick(0)).toEqual({});
    expect(pick(false)).toEqual({});
    expect(pick(NaN)).toEqual({});

    expect(pick(null, new Date())).toEqual({});
    expect(pick(undefined, new Date())).toEqual({});
    expect(pick('', new Date())).toEqual({});
    expect(pick(0, new Date())).toEqual({});
    expect(pick(false, new Date())).toEqual({});
    expect(pick(NaN, new Date())).toEqual({});
  });
});
