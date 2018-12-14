import toFinite from '.';

describe('toFinite', () => {
  it('Should convert values to a finite number', () => {
    expect(toFinite(null)).toBe(0);
    expect(toFinite(undefined)).toBe(0);

    expect(toFinite(5)).toBe(5);
    expect(toFinite('5')).toBe(5);

    expect(toFinite(Number(5))).toBe(5);
    expect(toFinite(Number('5'))).toBe(5);

    /* eslint-disable no-new-wrappers */
    expect(toFinite(new Number(5))).toBe(5);
    expect(toFinite(new Number('5'))).toBe(5);
    /* eslint-enable no-new-wrappers */

    expect(toFinite(0)).toBe(0);
    expect(toFinite('0')).toBe(0);

    expect(toFinite(-1)).toBe(-1);
    expect(toFinite('-1')).toBe(-1);

    expect(toFinite(0)).toBe(0);
    expect(toFinite('0')).toBe(0);
    expect(toFinite(-0)).toBe(-0);
    expect(toFinite('-0')).toBe(-0);

    expect(toFinite({ valueOf() { return 7; } })).toBe(7);
    expect(toFinite({ valueOf() { return 'foo'; } })).toBe(0);

    expect(toFinite([])).toBe(0);
    expect(toFinite('')).toBe(0);

    expect(toFinite({})).toBe(0);
    expect(toFinite('foo')).toBe(0);
    expect(toFinite('-foo')).toBe(0);
    expect(toFinite(Symbol('foo'))).toBe(0);

    expect(toFinite(NaN)).toBe(0);
    expect(toFinite(Infinity)).toBe(Number.MAX_VALUE);
    expect(toFinite(-Infinity)).toBe(-Number.MAX_VALUE);

    expect(toFinite('1e6')).toBe(1000000);
    expect(toFinite('-1e6')).toBe(-1000000);
    expect(toFinite(1e6)).toBe(1000000);
    expect(toFinite(-1e6)).toBe(-1000000);

    expect(toFinite('1.001e2')).toBe(100.1);
    expect(toFinite('-1.001e2')).toBe(-100.1);
    expect(toFinite(1.001e2)).toBe(100.1);
    expect(toFinite(-1.001e2)).toBe(-100.1);

    expect(toFinite('0x1f')).toBe(31);
    expect(toFinite('-0x1f')).toBe(0);
    expect(toFinite(0x1f)).toBe(31);
    expect(toFinite(-0x1f)).toBe(-31);

    expect(toFinite('0b101')).toBe(5);
    expect(toFinite('-0b101')).toBe(0);
    expect(toFinite(0b101)).toBe(5);
    expect(toFinite(-0b101)).toBe(-5);

    expect(toFinite('0o17')).toBe(15);
    expect(toFinite('-0o17')).toBe(0);
    expect(toFinite(0o17)).toBe(15);
    expect(toFinite(-0o17)).toBe(-15);
  });
});
