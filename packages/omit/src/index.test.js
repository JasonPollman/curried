/**
 * Tests for the `omit` function.
 * @since 11/10/18
 * @file
 */

import omit, { f } from '.';

describe('omit', () => {
  it('Should be a function', () => {
    expect(typeof omit).toBe('function');
  });

  it('Should omit from array\'s values', () => {
    expect(omit([1, 2, 3, 4], x => x % 2 === 0)).toEqual({
      0: 1,
      2: 3,
    });
  });

  it('Should omit an object\'s values', () => {
    expect(omit({}, null)).toEqual({});
    expect(omit({}, [])).toEqual({});
    expect(omit({}, () => {})).toEqual({});
    expect(omit({ foo: 1, bar: 2 }, ['foo', 'bar'])).toEqual({});

    expect(omit({
      foo: 1,
      bar: 2,
      baz: 0,
      quxx: 3,
    }, ['foo', 'bar'])).toEqual({ baz: 0, quxx: 3 });
  });

  it('Should omit an object\'s values (identity)', () => {
    expect(omit({
      foo: 1,
      bar: 2,
      baz: 0,
      quxx: 3,
    })).toEqual({
      baz: 0,
    });
  });

  it('Should pick an object\'s values (bad iteratee)', () => {
    expect(omit({
      foo: 1,
      bar: 2,
      baz: 0,
      quxx: 3,
    }, 0)).toEqual({
      baz: 0,
    });
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(omit(collection, val => val > 1)).toEqual({
      a: 1,
    });
  });

  it('Should work for Map objects (2)', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(omit(collection, (val, key) => key === 'a')).toEqual({
      b: 2,
      c: 3,
    });
  });

  it('Should work for Map objects (3)', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(omit(collection, ['a', 'c'])).toEqual({
      b: 2,
    });
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3]);
    expect(omit(collection, val => val > 1)).toEqual({
      0: 1,
    });
  });

  it('Should work for falsy values', () => {
    expect(omit(null, ['foo'])).toEqual({});
    expect(omit(undefined, ['foo'])).toEqual({});
    expect(omit('', ['foo'])).toEqual({});
    expect(omit(0, ['foo'])).toEqual({});
    expect(omit(false, ['foo'])).toEqual({});
    expect(omit(NaN, ['foo'])).toEqual({});

    expect(omit(null)).toEqual({});
    expect(omit(undefined)).toEqual({});
    expect(omit('')).toEqual({});
    expect(omit(0)).toEqual({});
    expect(omit(false)).toEqual({});
    expect(omit(NaN)).toEqual({});

    expect(omit(null, new Date())).toEqual({});
    expect(omit(undefined, new Date())).toEqual({});
    expect(omit('', new Date())).toEqual({});
    expect(omit(0, new Date())).toEqual({});
    expect(omit(false, new Date())).toEqual({});
    expect(omit(NaN, new Date())).toEqual({});
  });

  describe('omit.f', () => {
    it('Should be a function', () => {
      // eslint-disable-next-line import/no-named-as-default-member
      expect(typeof omit.f).toBe('function');
      expect(typeof f).toBe('function');
    });

    it('Should omit from array\'s values', () => {
      expect(f(x => x % 2 === 0, [1, 2, 3, 4])).toEqual({
        0: 1,
        2: 3,
      });
    });

    it('Should omit an object\'s values', () => {
      expect(f(null, {})).toEqual({});
      expect(f([], {})).toEqual({});
      expect(f(() => {}, {})).toEqual({});
      expect(f({ foo: 1, bar: 2 }, ['foo', 'bar'])).toEqual({});

      expect(f(['foo', 'bar'])({
        foo: 1,
        bar: 2,
        baz: 0,
        quxx: 3,
      })).toEqual({ baz: 0, quxx: 3 });
    });

    it('Should pick an object\'s values (bad iteratee)', () => {
      expect(f(0)({
        foo: 1,
        bar: 2,
        baz: 0,
        quxx: 3,
      })).toEqual({
        baz: 0,
      });
    });

    it('Should work for Map objects', () => {
      const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
      expect(f(val => val > 1)(collection)).toEqual({
        a: 1,
      });
    });

    it('Should work for Map objects (2)', () => {
      const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
      expect(f((val, key) => key === 'a', collection)).toEqual({
        b: 2,
        c: 3,
      });
    });

    it('Should work for Map objects (3)', () => {
      const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
      expect(f(['a', 'c'])(collection)).toEqual({
        b: 2,
      });
    });

    it('Should work for Set objects', () => {
      const collection = new Set([1, 2, 3]);
      expect(f(val => val > 1)(collection)).toEqual({
        0: 1,
      });
    });

    it('Should work for falsy values', () => {
      expect(f(['foo'])(null)).toEqual({});
      expect(f(['foo'])(undefined)).toEqual({});
      expect(f(['foo'])('')).toEqual({});
      expect(f(['foo'])(0)).toEqual({});
      expect(f(['foo'])(false)).toEqual({});
      expect(f(['foo'])(NaN)).toEqual({});
      expect(f(new Date(), null)).toEqual({});
    });
  });
});
