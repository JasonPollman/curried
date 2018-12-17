import repeatFx from '.';

describe('repeatFx', () => {
  it('Should be a function', () => {
    expect(typeof repeatFx).toBe('function');
  });

  it('Should guard against empty input', () => {
    expect(repeatFx(0)(undefined)).toBe('');
    expect(repeatFx(0)('')).toBe('');
    expect(repeatFx(0)(null)).toBe('');
    expect(repeatFx(0)(undefined)).toBe('');
    expect(repeatFx(0)([])).toBe('');
    expect(repeatFx(0)({})).toBe('');
    expect(repeatFx(0)(() => {})).toBe('');
    expect(repeatFx(0)(NaN)).toBe('');
  });

  it('Should guard against bad input (1)', () => {
    expect(repeatFx(1)(undefined)).toBe('');
    expect(repeatFx(1)(null)).toBe('');
    expect(repeatFx(1)(undefined)).toBe('');
    expect(repeatFx(1)([])).toBe('');
    expect(repeatFx(1)({})).toBe('[object Object]');
    expect(repeatFx(1)(() => {})).toMatch(/function\s{0,1}\(\)\{\}/);
    expect(repeatFx(1)(NaN)).toBe('NaN');
  });

  it('Should repeatFx a string', () => {
    expect(repeatFx(1)('x')).toBe('x');
    expect(repeatFx(2)('x')).toBe('xx');
    expect(repeatFx(1)('xx')).toBe('xx');
    expect(repeatFx(5)('foo')).toBe('foofoofoofoofoo');
    expect(repeatFx(5)('/\\/\\/')).toBe('/\\/\\//\\/\\//\\/\\//\\/\\//\\/\\/');
    expect(repeatFx(5)(' ')).toBe('     ');
  });

  it('Should repeatFx a string (number given)', () => {
    expect(repeatFx(3, 0)).toBe('000');
    expect(repeatFx(3, -1)).toBe('-1-1-1');
    expect(repeatFx(3, 0.123)).toBe('0.1230.1230.123');
  });

  it('Should repeatFx a string (array given)', () => {
    expect(repeatFx(3, [1, 2, 3])).toBe('1,2,31,2,31,2,3');
  });

  it('Should repeatFx a string (negative value for `n` given)', () => {
    expect(repeatFx(-3)(0)).toBe('');
    expect(repeatFx(-3)('foo')).toBe('');
  });
});
