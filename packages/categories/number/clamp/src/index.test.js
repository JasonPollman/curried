import clamp from '.';

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
});
