import pad from '.';

describe('pad', () => {
  it('Should be a function', () => {
    expect(typeof pad).toBe('function');
  });

  it('Should pad a string (empty string)', () => {
    expect(pad('')).toBe('');
    expect(pad('', 0, '?')).toBe('');
    expect(pad('', 0)).toBe('');
    expect(pad('', 1, '?')).toBe('?');
    expect(pad('', 1)).toBe(' ');
    expect(pad('', 3)).toBe('   ');
    expect(pad('', -3)).toBe('');
    expect(pad(undefined, 1)).toBe(' ');
    expect(pad(null, 1)).toBe(' ');
  });

  it('Should allow for left and right pad', () => {
    expect(pad('', 1, '<>')).toBe('<');
    expect(pad('', 2, '<>')).toBe('<>');
    expect(pad('', 3, '<>')).toBe('<><');
    expect(pad('', 4, '<>')).toBe('<><>');
  });

  it('Should pad a string', () => {
    expect(pad('foo', 1)).toBe('foo');
    expect(pad('foo', 2)).toBe('foo');
    expect(pad('foo', 3)).toBe('foo');
    expect(pad('foo', 4)).toBe('foo ');
    expect(pad('foo', 5)).toBe(' foo ');
    expect(pad('foo', 6)).toBe(' foo  ');
    expect(pad('foo', 7)).toBe('  foo  ');
    expect(pad('foo', 8)).toBe('  foo   ');
    expect(pad('foo', 9)).toBe('   foo   ');

    expect(pad('quxx', 1)).toBe('quxx');
    expect(pad('quxx', 2)).toBe('quxx');
    expect(pad('quxx', 3)).toBe('quxx');
    expect(pad('quxx', 4)).toBe('quxx');
    expect(pad('quxx', 5)).toBe('quxx ');
    expect(pad('quxx', 6)).toBe(' quxx ');
    expect(pad('quxx', 7)).toBe(' quxx  ');
    expect(pad('quxx', 8)).toBe('  quxx  ');
    expect(pad('quxx', 9)).toBe('  quxx   ');
    expect(pad('quxx', 10)).toBe('   quxx   ');
  });

  it('Should pad a string (custom padding chars)', () => {
    expect(pad('foo', 7, '<>')).toBe('<>foo<>');
    expect(pad('foo', 8, '<>')).toBe('<>foo<><');
    expect(pad('foo', 9, '<>')).toBe('<><foo<><');

    expect(pad('quxx', 1, '<>')).toBe('quxx');
    expect(pad('quxx', 2, '<>')).toBe('quxx');
    expect(pad('quxx', 3, '<>')).toBe('quxx');
    expect(pad('quxx', 4, '<>')).toBe('quxx');
    expect(pad('quxx', 5, '<>')).toBe('quxx<');
    expect(pad('quxx', 6, '<>')).toBe('<quxx<');
    expect(pad('quxx', 7, '<>')).toBe('<quxx<>');
    expect(pad('quxx', 8, '<>')).toBe('<>quxx<>');
    expect(pad('quxx', 9, '<>')).toBe('<>quxx<><');
    expect(pad('quxx', 10, '<>')).toBe('<><quxx<><');
  });

  it('Should pad a string (edge cases for length)', () => {
    expect(pad('foo', null)).toBe('foo');
    expect(pad('foo', undefined)).toBe('foo');
    expect(pad('foo', NaN)).toBe('foo');
    expect(pad('foo', {})).toBe('foo');
    expect(pad('foo', [])).toBe('foo');
    expect(pad('foo', 'foobar')).toBe('foo');
  });

  it('Should pad a string (edge cases for chars)', () => {
    expect(pad('foo', 1, undefined)).toBe('foo');
    expect(pad('foo', 2, undefined)).toBe('foo');
    expect(pad('foo', 3, undefined)).toBe('foo');
    expect(pad('foo', 4, undefined)).toBe('foo ');
    expect(pad('foo', 4, null)).toBe('foo ');
    expect(pad('foo', 5, NaN)).toBe('NfooN');
    expect(pad('foo', 6, {})).toBe('[foo[o');
    expect(pad('foo', 7, [1, 2])).toBe('1,foo1,');
    expect(pad('foo', 7, [])).toBe('foo');
    expect(pad('foo', 8, Infinity)).toBe('InfooInf');
    expect(pad('foo', 9, 8188)).toBe('818foo818');
    expect(pad('foo', 9, 0)).toBe('000foo000');
  });
});
