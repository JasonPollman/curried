/**
 * Tests for the `toNumber` function.
 * @since 10/23/18
 * @file
 */

import { toNumber, toNumberIE } from '.';

describe('toNumber', () => {
  [toNumber, toNumberIE].forEach((method) => {
    it('Should be a function', () => {
      expect(typeof method).toBe('function');
    });

    it('Should convert values to a number', () => {
      expect(method(null)).toBe(0);
      expect(method(undefined)).toBe(NaN);

      expect(method(5)).toBe(5);
      expect(method('5')).toBe(5);

      expect(method(Number(5))).toBe(5);
      expect(method(Number('5'))).toBe(5);

      /* eslint-disable no-new-wrappers */
      expect(method(new Number(5))).toBe(5);
      expect(method(new Number('5'))).toBe(5);
      /* eslint-enable no-new-wrappers */

      expect(method(0)).toBe(0);
      expect(method('0')).toBe(0);

      expect(method(-1)).toBe(-1);
      expect(method('-1')).toBe(-1);

      expect(method(-0)).toBe(-0);
      expect(method('-0')).toBe(-0);

      expect(method({ valueOf() { return 7; } })).toBe(7);
      expect(method({ valueOf() { return 'foo'; } })).toBe(NaN);

      expect(method([])).toBe(0);
      expect(method('')).toBe(0);

      expect(method({})).toBe(NaN);
      expect(method('foo')).toBe(NaN);
      expect(method('-foo')).toBe(NaN);
      expect(method(Symbol('foo'))).toBe(NaN);

      expect(method(NaN)).toBe(NaN);
      expect(method(Infinity)).toBe(Infinity);
      expect(method(-Infinity)).toBe(-Infinity);

      expect(method(0)).toBe(0);
      expect(method('0')).toBe(0);
      expect(method(-0)).toBe(-0);
      expect(method('-0')).toBe(-0);

      expect(method('1e6')).toBe(1000000);
      expect(method('-1e6')).toBe(-1000000);
      expect(method(1e6)).toBe(1000000);
      expect(method(-1e6)).toBe(-1000000);

      expect(method('1.001e2')).toBe(100.1);
      expect(method('-1.001e2')).toBe(-100.1);
      expect(method(1.001e2)).toBe(100.1);
      expect(method(-1.001e2)).toBe(-100.1);

      expect(method('0x1f')).toBe(31);
      expect(method('-0x1f')).toBe(NaN);
      expect(method(0x1f)).toBe(31);
      expect(method(-0x1f)).toBe(-31);

      expect(method('0b101')).toBe(5);
      expect(method('-0b101')).toBe(NaN);
      expect(method(0b101)).toBe(5);
      expect(method(-0b101)).toBe(-5);

      expect(method('0o17')).toBe(15);
      expect(method('-0o17')).toBe(NaN);
      expect(method(0o17)).toBe(15);
      expect(method(-0o17)).toBe(-15);
    });
  });
});
