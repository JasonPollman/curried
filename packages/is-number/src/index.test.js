/**
 * Tests for the `isNumber` function.
 * @since 10/23/18
 * @file
 */

import { isNumberNode, isNumberBrowser } from '.';

describe('isNumber', () => {
  [isNumberNode, isNumberBrowser].forEach((method) => {
    describe(method.name, () => {
      it('Should return `true` for numbers', () => {
        expect(method(0)).toBe(true);
        expect(method(1e6)).toBe(true);
        expect(method(0xfff)).toBe(true);
        expect(method(-1.01)).toBe(true);
        expect(method(-0)).toBe(true);
        expect(method(-0.00000001)).toBe(true);
        expect(method(NaN)).toBe(true);
        expect(method(Number.MAX_SAFE_INTEGER)).toBe(true);
        expect(method(Number.MIN_SAFE_INTEGER)).toBe(true);
        expect(method(Infinity)).toBe(true);
        expect(method(-Infinity)).toBe(true);
      });

      it('Should return `false` otherwise', () => {
        // eslint-disable-next-line no-void
        expect(method(void 0)).toBe(false);
        expect(method(undefined)).toBe(false);
        expect(method(false)).toBe(false);
        expect(method(true)).toBe(false);
        expect(method([])).toBe(false);
        expect(method('foo')).toBe(false);
        expect(method('0')).toBe(false);
        expect(method('1')).toBe(false);
        expect(method('-1')).toBe(false);
      });

      it('Should return `true` for Number objects', () => {
        /* eslint-disable no-new-wrappers */
        expect(method(new Number(0))).toBe(true);
        expect(method(new Number(1))).toBe(true);
        expect(method(new Number('5'))).toBe(true);
        /* eslint-enable no-new-wrappers */

        expect(method(Number(0))).toBe(true);
        expect(method(Number(1))).toBe(true);
        expect(method(Number('5'))).toBe(true);
      });
    });
  });
});
