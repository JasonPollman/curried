/**
 * Tests for the `clamp` function.
 * @since 11/10/18
 * @file
 */

import clamp, { f } from '.';

describe('clamp', () => {
  it('Should be a function', () => {
    expect(typeof clamp).toBe('function');
  });

  it('Should reutrn NaN', () => {
    expect(clamp(NaN, 0, 0)).toBe(NaN);
    expect(clamp('foo', 0, 0)).toBe(NaN);
  });

  it('Should clamp a numeric value (to min)', () => {
    expect(clamp(0, 0, 0)).toBe(0);
    expect(clamp(0, 0, 1)).toBe(0);
    expect(clamp(0, 1, 1)).toBe(1);
    expect(clamp(0, 10, 1)).toBe(10);
    expect(clamp(100, 1, -1)).toBe(1);
    expect(clamp(100, 0, -1)).toBe(0);
  });

  it('Should clamp a numeric value (Infinity)', () => {
    expect(clamp(0, Infinity, 0)).toBe(Infinity);
    expect(clamp(0, Infinity, Infinity)).toBe(Infinity);
    expect(clamp(0, 0, Infinity)).toBe(0);
    expect(clamp(0, -1, Infinity)).toBe(0);
    expect(clamp(0, -Infinity, Infinity)).toBe(0);
    expect(clamp(0, -Infinity, 1)).toBe(0);
    expect(clamp(2, -Infinity, 1)).toBe(1);
    expect(clamp(2, 3, Infinity)).toBe(3);
  });

  it('Should clamp a numeric value (NaN)', () => {
    expect(clamp(0, NaN, 0)).toBe(0);
    expect(clamp(0, NaN, NaN)).toBe(0);
    expect(clamp(0, 0, NaN)).toBe(0);
    expect(clamp(0, -1, NaN)).toBe(0);
    expect(clamp(0, -NaN, NaN)).toBe(0);
    expect(clamp(0, -NaN, 1)).toBe(0);
    expect(clamp(2, -NaN, 1)).toBe(1);
    expect(clamp(2, 3, NaN)).toBe(3);
  });

  it('Should clamp a numeric value (decimal)', () => {
    expect(clamp(0, 1.001, 1.01)).toBe(1.001);
    expect(clamp(0, 1.01, 1.01)).toBe(1.01);
    expect(clamp(0, -1.01, 1.01)).toBe(0);
  });

  it('Should clamp a numeric value (to max)', () => {
    expect(clamp(100, 0, 1)).toBe(1);
    expect(clamp(100, 1, 1)).toBe(1);
    expect(clamp(100, -1, 1)).toBe(1);
  });

  it('Should clamp a numeric value (no max)', () => {
    expect(clamp(0, 10)).toBe(0);
    expect(clamp(0, -10)).toBe(-10);
  });

  it('Should clamp a string value (to min)', () => {
    expect(clamp('0', 0, 1)).toBe(0);
    expect(clamp('0', 1, 1)).toBe(1);
    expect(clamp('0', 10, 1)).toBe(10);
    expect(clamp('100', 1, -1)).toBe(1);
    expect(clamp('100', 0, -1)).toBe(0);
  });

  it('Should clamp a string value (to max)', () => {
    expect(clamp('100', 0, 1)).toBe(1);
    expect(clamp('100', 1, 1)).toBe(1);
    expect(clamp('100', -1, 1)).toBe(1);
  });

  it('Should clamp a string value (no max)', () => {
    expect(clamp('0', 10)).toBe(0);
    expect(clamp('0', -10)).toBe(-10);
  });

  it('Should clamp a string value (to min)', () => {
    expect(clamp('0', '0', '1')).toBe(0);
    expect(clamp('0', '1', '1')).toBe(1);
    expect(clamp('0', '10', '1')).toBe(10);
    expect(clamp('100', '1', '-1')).toBe(1);
    expect(clamp('100', '0', '-1')).toBe(0);
  });

  describe('clamp.f', () => {
    it('Should be a function', () => {
      // eslint-disable-next-line import/no-named-as-default-member
      expect(typeof clamp.f).toBe('function');
      expect(typeof f).toBe('function');

      // eslint-disable-next-line import/no-named-as-default-member
      expect(clamp.f === f).toBe(true);
    });

    it('Should reutrn NaN', () => {
      expect(f(0, 0)(NaN)).toBe(NaN);
      expect(f(0, 0)('foo')).toBe(NaN);
    });

    it('Should clamp a numeric value (to min)', () => {
      expect(f(0, 0)(0)).toBe(0);
      expect(f(0, 1)(0)).toBe(0);
      expect(f(1, 1)(0)).toBe(1);
      expect(f(10, 1)(0)).toBe(10);
      expect(f(1, -1)(100)).toBe(1);
      expect(f(0, -1)(100)).toBe(0);
    });

    it('Should clamp a numeric value (Infinity)', () => {
      expect(f(Infinity, 0)(0)).toBe(Infinity);
      expect(f(Infinity, Infinity)(0)).toBe(Infinity);
      expect(f(0, Infinity)(0)).toBe(0);
      expect(f(-1, Infinity)(0)).toBe(0);
      expect(f(-Infinity, Infinity)(0)).toBe(0);
      expect(f(-Infinity, 1)(0)).toBe(0);
      expect(f(-Infinity, 1)(2)).toBe(1);
      expect(f(3, Infinity)(2)).toBe(3);
    });

    it('Should clamp a numeric value (NaN)', () => {
      expect(f(NaN, 0)(0)).toBe(0);
      expect(f(NaN, NaN)(0)).toBe(0);
      expect(f(0, NaN)(0)).toBe(0);
      expect(f(-1, NaN)(0)).toBe(0);
      expect(f(-NaN, NaN)(0)).toBe(0);
      expect(f(-NaN, 1)(0)).toBe(0);
      expect(f(-NaN, 1)(2)).toBe(1);
      expect(f(3, NaN)(2)).toBe(3);
    });

    it('Should clamp a numeric value (decimal)', () => {
      expect(f(1.001, 1.01)(0)).toBe(1.001);
      expect(f(1.01, 1.01)(0)).toBe(1.01);
      expect(f(-1.01, 1.01)(0)).toBe(0);
    });

    it('Should clamp a numeric value (to max)', () => {
      expect(f(0, 1)(100)).toBe(1);
      expect(f(1, 1)(100)).toBe(1);
      expect(f(-1, 1)(100)).toBe(1);
    });
  });
});
