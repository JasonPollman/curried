/**
 * Tests for the `compose` function.
 * @since 10/23/18
 * @file
 */

import concat, { f } from '.';

describe('compose', () => {
  it('Should be a function', () => {
    expect(typeof concat).toBe('function');
  });

  it('should concat two arrays', () => {
    expect(concat([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should concat two falsy values', () => {
    expect(concat(null, null)).toEqual([null, null]);
  });

  it('should default to empty array given no arguments', () => {
    expect(concat()).toEqual([]);
  });

  describe('compose', () => {
    it('Should be a function', () => {
      // eslint-disable-next-line import/no-named-as-default-member
      expect(typeof concat.f).toBe('function');
      expect(typeof f).toBe('function');

      // eslint-disable-next-line import/no-named-as-default-member
      expect(concat.f === f).toBe(true);
    });

    it('should concat two arrays', () => {
      expect(f([1, 2, 3])([4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should concat two falsy values', () => {
      expect(f(null)(null)).toEqual([null, null]);
    });
  });
});
