import clampFx from '.';

describe('clampFx', () => {
  it('Should be a function', () => {
    expect(typeof clampFx).toBe('function');
  });

  it('Should reutrn NaN', () => {
    expect(clampFx(0, 0)(NaN)).toBe(NaN);
    expect(clampFx(0, 0)('foo')).toBe(NaN);
  });

  it('Should clamp a numeric value (to min)', () => {
    expect(clampFx(0, 0)(0)).toBe(0);
    expect(clampFx(0, 1)(0)).toBe(0);
    expect(clampFx(1, 1)(0)).toBe(1);
    expect(clampFx(10, 1)(0)).toBe(10);
    expect(clampFx(1, -1)(100)).toBe(1);
    expect(clampFx(0, -1)(100)).toBe(0);
  });

  it('Should clamp a numeric value (Infinity)', () => {
    expect(clampFx(Infinity, 0)(0)).toBe(Infinity);
    expect(clampFx(Infinity, Infinity)(0)).toBe(Infinity);
    expect(clampFx(0, Infinity)(0)).toBe(0);
    expect(clampFx(-1, Infinity)(0)).toBe(0);
    expect(clampFx(-Infinity, Infinity)(0)).toBe(0);
    expect(clampFx(-Infinity, 1)(0)).toBe(0);
    expect(clampFx(-Infinity, 1)(2)).toBe(1);
    expect(clampFx(3, Infinity)(2)).toBe(3);
  });

  it('Should clamp a numeric value (NaN)', () => {
    expect(clampFx(NaN, 0)(0)).toBe(0);
    expect(clampFx(NaN, NaN)(0)).toBe(0);
    expect(clampFx(0, NaN)(0)).toBe(0);
    expect(clampFx(-1, NaN)(0)).toBe(0);
    expect(clampFx(-NaN, NaN)(0)).toBe(0);
    expect(clampFx(-NaN, 1)(0)).toBe(0);
    expect(clampFx(-NaN, 1)(2)).toBe(1);
    expect(clampFx(3, NaN)(2)).toBe(3);
  });

  it('Should clamp a numeric value (decimal)', () => {
    expect(clampFx(1.001, 1.01)(0)).toBe(1.001);
    expect(clampFx(1.01, 1.01)(0)).toBe(1.01);
    expect(clampFx(-1.01, 1.01)(0)).toBe(0);
  });

  it('Should clamp a numeric value (to max)', () => {
    expect(clampFx(0, 1)(100)).toBe(1);
    expect(clampFx(1, 1)(100)).toBe(1);
    expect(clampFx(-1, 1)(100)).toBe(1);
  });
});
