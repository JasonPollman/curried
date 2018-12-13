import padCharsFx from '.';

describe('padCharsFx', () => {
  it('Should be a function', () => {
    expect(typeof padCharsFx).toBe('function');
  });

  it('Should pad a string', () => {
    padCharsFx('<>')(5)('foo');
    padCharsFx('<>', 8, 'foo');
    const padZeros = padCharsFx(0);
    expect(padZeros(10, 1)).toBe('0000100000');

    expect(padCharsFx(' ')(1)('foo')).toBe('foo');
    expect(padCharsFx(' ')(2)('foo')).toBe('foo');
    expect(padCharsFx(' ')(3)('foo')).toBe('foo');
    expect(padCharsFx(' ')(4)('foo')).toBe('foo ');
    expect(padCharsFx(' ')(5)('foo')).toBe(' foo ');
    expect(padCharsFx(' ')(6)('foo')).toBe(' foo  ');
    expect(padCharsFx(' ')(7)('foo')).toBe('  foo  ');
    expect(padCharsFx(' ')(8)('foo')).toBe('  foo   ');
    expect(padCharsFx(' ')(9)('foo')).toBe('   foo   ');

    expect(padCharsFx('<>')(1, 'quxx')).toBe('quxx');
    expect(padCharsFx('<>')(2, 'quxx')).toBe('quxx');
    expect(padCharsFx('<>')(3, 'quxx')).toBe('quxx');
    expect(padCharsFx('<>')(4, 'quxx')).toBe('quxx');
    expect(padCharsFx('<>')(5, 'quxx')).toBe('quxx<');
    expect(padCharsFx('<>')(6, 'quxx')).toBe('<quxx<');
    expect(padCharsFx('<>')(7, 'quxx')).toBe('<quxx<>');
    expect(padCharsFx('<>')(8, 'quxx')).toBe('<>quxx<>');
    expect(padCharsFx('<>')(9, 'quxx')).toBe('<>quxx<><');
    expect(padCharsFx('<>')(10)('quxx')).toBe('<><quxx<><');
  });

  it('Should pad a string (edge cases for length)', () => {
    expect(padCharsFx(undefined)(null, 'foo')).toBe('foo');
    expect(padCharsFx(undefined)(undefined, 'foo')).toBe('foo');
    expect(padCharsFx(undefined)(NaN)('foo')).toBe('foo');
    expect(padCharsFx(undefined)({})('foo')).toBe('foo');
    expect(padCharsFx(undefined)([])('foo')).toBe('foo');
    expect(padCharsFx(undefined)('foobar')('foo')).toBe('foo');
  });

  it('Should pad a string (edge cases for chars)', () => {
    expect(padCharsFx(undefined)(5, 'foo')).toBe(' foo ');
    expect(padCharsFx(null)(5, 'foo')).toBe(' foo ');
    expect(padCharsFx(NaN)(5)('foo')).toBe('NfooN');
    expect(padCharsFx([])(5)('foo')).toBe('foo');
    expect(padCharsFx([1, 2, 3])(5)('foo')).toBe('1foo1');
  });
});
