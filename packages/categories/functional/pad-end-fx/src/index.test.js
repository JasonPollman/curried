import padEndFx from '.';

describe('padEndFx', () => {
  it('Should be a function', () => {
    expect(typeof padEndFx).toBe('function');
  });

  it('Should right pad a string (empty string)', () => {
    expect(padEndFx(1, '')).toBe(' ');
    expect(padEndFx(1)(undefined)).toBe(' ');
    expect(padEndFx(1)(null)).toBe(' ');
  });

  it('Should pad the end of a string', () => {
    expect(padEndFx(1)('foo')).toBe('foo');
    expect(padEndFx(2)('foo')).toBe('foo');
    expect(padEndFx(3)('foo')).toBe('foo');
    expect(padEndFx(4)('foo')).toBe('foo ');
    expect(padEndFx(5)('foo')).toBe('foo  ');
    expect(padEndFx(6)('foo')).toBe('foo   ');
    expect(padEndFx(7)('foo')).toBe('foo    ');
    expect(padEndFx(8)('foo')).toBe('foo     ');
    expect(padEndFx(9)('foo')).toBe('foo      ');

    expect(padEndFx(1)('quxx')).toBe('quxx');
    expect(padEndFx(2)('quxx')).toBe('quxx');
    expect(padEndFx(3)('quxx')).toBe('quxx');
    expect(padEndFx(4)('quxx')).toBe('quxx');
    expect(padEndFx(5)('quxx')).toBe('quxx ');
    expect(padEndFx(6)('quxx')).toBe('quxx  ');
    expect(padEndFx(7)('quxx')).toBe('quxx   ');
    expect(padEndFx(8)('quxx')).toBe('quxx    ');
    expect(padEndFx(9)('quxx')).toBe('quxx     ');
    expect(padEndFx(10, 'quxx')).toBe('quxx      ');
  });

  it('Should pad the end of a string (edge cases for length)', () => {
    expect(padEndFx(null)('foo')).toBe('foo');
    expect(padEndFx(undefined)('foo')).toBe('foo');
    expect(padEndFx(NaN)('foo')).toBe('foo');
    expect(padEndFx({})('foo')).toBe('foo');
    expect(padEndFx([])('foo')).toBe('foo');
    expect(padEndFx('foobar')('foo')).toBe('foo');
  });
});
