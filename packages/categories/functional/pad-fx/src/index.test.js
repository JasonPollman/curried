import padFx from '.';

describe('padFx', () => {
  it('Should be a function', () => {
    expect(typeof padFx).toBe('function');
  });

  it('Should pad a string', () => {
    expect(padFx(1)('foo')).toBe('foo');
    expect(padFx(2)('foo')).toBe('foo');
    expect(padFx(3)('foo')).toBe('foo');
    expect(padFx(4)('foo')).toBe('foo ');
    expect(padFx(5)('foo')).toBe(' foo ');
    expect(padFx(6)('foo')).toBe(' foo  ');
    expect(padFx(7)('foo')).toBe('  foo  ');
    expect(padFx(8)('foo')).toBe('  foo   ');
    expect(padFx(9)('foo')).toBe('   foo   ');

    expect(padFx(1, 'quxx')).toBe('quxx');
    expect(padFx(2, 'quxx')).toBe('quxx');
    expect(padFx(3, 'quxx')).toBe('quxx');
    expect(padFx(4, 'quxx')).toBe('quxx');
    expect(padFx(5, 'quxx')).toBe('quxx ');
    expect(padFx(6, 'quxx')).toBe(' quxx ');
    expect(padFx(7, 'quxx')).toBe(' quxx  ');
    expect(padFx(8, 'quxx')).toBe('  quxx  ');
    expect(padFx(9, 'quxx')).toBe('  quxx   ');
    expect(padFx(10)('quxx')).toBe('   quxx   ');
  });

  it('Should pad a string (edge cases for length)', () => {
    expect(padFx(null, 'foo')).toBe('foo');
    expect(padFx(undefined, 'foo')).toBe('foo');
    expect(padFx(NaN)('foo')).toBe('foo');
    expect(padFx({})('foo')).toBe('foo');
    expect(padFx([])('foo')).toBe('foo');
    expect(padFx('foobar')('foo')).toBe('foo');
  });
});
