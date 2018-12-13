import padCharsEndFx from '.';

describe('padCharsEndFx', () => {
  it('Should be a function', () => {
    expect(typeof padCharsEndFx).toBe('function');
  });

  it('Should right pad a string (empty string)', () => {
    expect(padCharsEndFx(' ')(1, '')).toBe(' ');
    expect(padCharsEndFx(' ')(1)(undefined)).toBe(' ');
    expect(padCharsEndFx(' ')(1)(null)).toBe(' ');
  });

  it('Should pad the end of a string', () => {
    expect(padCharsEndFx(' ')(1)('foo')).toBe('foo');
    expect(padCharsEndFx(' ')(2)('foo')).toBe('foo');
    expect(padCharsEndFx(' ')(3)('foo')).toBe('foo');
    expect(padCharsEndFx(' ')(4)('foo')).toBe('foo ');
    expect(padCharsEndFx(' ')(5)('foo')).toBe('foo  ');
    expect(padCharsEndFx(' ')(6)('foo')).toBe('foo   ');
    expect(padCharsEndFx(' ')(7)('foo')).toBe('foo    ');
    expect(padCharsEndFx(' ')(8)('foo')).toBe('foo     ');
    expect(padCharsEndFx(' ')(9)('foo')).toBe('foo      ');

    expect(padCharsEndFx(' ')(1)('quxx')).toBe('quxx');
    expect(padCharsEndFx(' ')(2)('quxx')).toBe('quxx');
    expect(padCharsEndFx(' ')(3)('quxx')).toBe('quxx');
    expect(padCharsEndFx(' ')(4)('quxx')).toBe('quxx');
    expect(padCharsEndFx(' ')(5)('quxx')).toBe('quxx ');
    expect(padCharsEndFx(' ')(6)('quxx')).toBe('quxx  ');
    expect(padCharsEndFx(' ')(7)('quxx')).toBe('quxx   ');
    expect(padCharsEndFx(' ')(8)('quxx')).toBe('quxx    ');
    expect(padCharsEndFx(' ')(9)('quxx')).toBe('quxx     ');
    expect(padCharsEndFx(' ')(10, 'quxx')).toBe('quxx      ');
  });

  it('Should pad the end of a string (custom pad chars)', () => {
    expect(padCharsEndFx('<>', 1, 'foo')).toBe('foo');
    expect(padCharsEndFx('<>', 2, 'foo')).toBe('foo');
    expect(padCharsEndFx('<>', 3, 'foo')).toBe('foo');
    expect(padCharsEndFx('<>', 4, 'foo')).toBe('foo<');
    expect(padCharsEndFx('<>', 5, 'foo')).toBe('foo<>');
    expect(padCharsEndFx('<>', 6, 'foo')).toBe('foo<><');
    expect(padCharsEndFx('<>', 7, 'foo')).toBe('foo<><>');
    expect(padCharsEndFx('<>', 8, 'foo')).toBe('foo<><><');
    expect(padCharsEndFx('<>', 9, 'foo')).toBe('foo<><><>');

    expect(padCharsEndFx('<>')(1)('quxx')).toBe('quxx');
    expect(padCharsEndFx('<>')(2)('quxx')).toBe('quxx');
    expect(padCharsEndFx('<>')(3)('quxx')).toBe('quxx');
    expect(padCharsEndFx('<>')(4)('quxx')).toBe('quxx');
    expect(padCharsEndFx('<>')(5)('quxx')).toBe('quxx<');
    expect(padCharsEndFx('<>')(6)('quxx')).toBe('quxx<>');
    expect(padCharsEndFx('<>')(7)('quxx')).toBe('quxx<><');
    expect(padCharsEndFx('<>')(8)('quxx')).toBe('quxx<><>');
    expect(padCharsEndFx('<>')(9)('quxx')).toBe('quxx<><><');
    expect(padCharsEndFx('<>', 10, 'quxx')).toBe('quxx<><><>');
  });

  it('Should pad the end of a string (edge cases for length)', () => {
    expect(padCharsEndFx(' ')(null)('foo')).toBe('foo');
    expect(padCharsEndFx(' ')(undefined)('foo')).toBe('foo');
    expect(padCharsEndFx(' ')(NaN)('foo')).toBe('foo');
    expect(padCharsEndFx(' ')({})('foo')).toBe('foo');
    expect(padCharsEndFx(' ')([])('foo')).toBe('foo');
    expect(padCharsEndFx(' ')('foobar')('foo')).toBe('foo');
  });

  it('Should pad the end of a string (edge cases for chars)', () => {
    expect(padCharsEndFx(undefined)(1)('foo')).toBe('foo');
    expect(padCharsEndFx(undefined)(2)('foo')).toBe('foo');
    expect(padCharsEndFx(undefined)(3)('foo')).toBe('foo');
    expect(padCharsEndFx(undefined)(4)('foo')).toBe('foo ');
    expect(padCharsEndFx(null)(4)('foo')).toBe('foo ');
    expect(padCharsEndFx(NaN)(5)('foo')).toBe('fooNa');
    expect(padCharsEndFx({})(6)('foo')).toBe('foo[ob');
    expect(padCharsEndFx([1, 2])(7)('foo')).toBe('foo1,21');
    expect(padCharsEndFx([])(7)('foo')).toBe('foo');
    expect(padCharsEndFx(Infinity)(8)('foo')).toBe('fooInfin');
    expect(padCharsEndFx(8188)(9)('foo')).toBe('foo818881');
    expect(padCharsEndFx(0)(9)('foo')).toBe('foo000000');
  });
});
