import repeat from '.';

describe('repeat', () => {
  it('Should be a function', () => {
    expect(typeof repeat).toBe('function');
  });

  it('Should guard against empty input', () => {
    expect(repeat()).toBe('');
    expect(repeat('')).toBe('');
    expect(repeat(null)).toBe('');
    expect(repeat(undefined)).toBe('');
    expect(repeat([])).toBe('');
    expect(repeat({})).toBe('');
    expect(repeat(() => {})).toBe('');
    expect(repeat(NaN)).toBe('');
  });

  it('Should guard against bad input', () => {
    expect(repeat()).toBe('');
    expect(repeat(null)).toBe('');
    expect(repeat(undefined)).toBe('');
    expect(repeat([])).toBe('');
    expect(repeat({}, 1)).toBe('[object Object]');
    expect(repeat(() => {}, 1)).toBe('function(){}');
    expect(repeat(NaN, 1)).toBe('NaN');
    expect(repeat(Symbol('foo'), 1)).toBe('Symbol(foo)');
  });

  it('Should repeat a string', () => {
    expect(repeat('foo', 5)).toBe('foofoofoofoofoo');
    expect(repeat('x', 2)).toBe('xx');
    expect(repeat('x', 1)).toBe('x');
    expect(repeat('xx', 1)).toBe('xx');
    expect(repeat('x', 10)).toBe('x'.repeat(10));
    expect(repeat('x', 100)).toBe('x'.repeat(100));
    expect(repeat('/\\/\\/', 5)).toBe('/\\/\\//\\/\\//\\/\\//\\/\\//\\/\\/');
    expect(repeat(' ', 5)).toBe('     ');
  });

  it('Should repeat a string (number given)', () => {
    expect(repeat(0, 3)).toBe('000');
    expect(repeat(-1, 3)).toBe('-1-1-1');
    expect(repeat(0.123, 3)).toBe('0.1230.1230.123');
  });

  it('Should repeat a string (array given)', () => {
    expect(repeat([1, 2, 3], 3)).toBe('1,2,31,2,31,2,3');
  });

  it('Should repeat a string (negative value for `n` given)', () => {
    expect(repeat(0, -3)).toBe('');
    expect(repeat('foo', -3)).toBe('');
  });
});
