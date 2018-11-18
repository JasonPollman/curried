/**
 * Tests for the `attempt` function.
 * @since 11/14/18
 * @file
 */

import attempt, { f } from '.';

describe('attempt', () => {
  it('Should be a function', () => {
    expect(typeof attempt).toBe('function');
  });

  it('Should execute a function', () => {
    const fn = (a, b) => {
      expect(a).toBe(1);
      expect(b).toBe(2);
      return 3;
    };

    expect(attempt(fn, [1, 2])).toBe(3);
  });

  it('Should catch if the function throws', () => {
    const fn = (a, b) => {
      expect(a).toBe(1);
      expect(b).toBe(2);
      throw new Error('foo');
    };

    expect(attempt(fn, [1, 2]).message).toBe('foo');
  });

  it('Should return the fallback value if provided', () => {
    const fn = (a, b) => {
      expect(a).toBe(1);
      expect(b).toBe(2);
      throw new Error('foo');
    };

    expect(attempt(fn, [1, 2], 3)).toBe(3);
  });

  it('Should return the fallback value if provided (undefined)', () => {
    const fn = (a, b) => {
      expect(a).toBe(1);
      expect(b).toBe(2);
      throw new Error('foo');
    };

    expect(attempt(fn, [1, 2], undefined)).toBe(undefined);
  });

  it('Should handle bad arguments silently', () => {
    const fn = (a, b) => {
      expect(a).toBe(undefined);
      expect(b).toBe(undefined);
      return 7;
    };

    expect(attempt(fn, 'foobar')).toBe(7);
  });

  describe('attempt.f', () => {
    it('Should be a function', () => {
      // eslint-disable-next-line import/no-named-as-default-member
      expect(typeof attempt.f).toBe('function');
      expect(typeof f).toBe('function');

      // eslint-disable-next-line import/no-named-as-default-member
      expect(attempt.f === f).toBe(true);
    });

    it('Should execute a function (curried)', () => {
      const fn = (a, b) => {
        expect(a).toBe(1);
        expect(b).toBe(2);
        return 3;
      };

      expect(f([1, 2])(fn)).toBe(3);
    });

    it('Should catch if the function throws', () => {
      const fn = (a, b) => {
        expect(a).toBe(1);
        expect(b).toBe(2);
        throw new Error('foo');
      };

      expect(f([1, 2])(fn).message).toBe('foo');
    });

    it('Should handle bad arguments silently', () => {
      const fn = (a, b) => {
        expect(a).toBe(undefined);
        expect(b).toBe(undefined);
        return 7;
      };

      expect(f('foobar')(fn)).toBe(7);
    });
  });
});
