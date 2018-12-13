import padStart from '.';

describe('padStart', () => {
  it('Should be a function', () => {
    expect(typeof padStart).toBe('function');
  });

  it('Should left pad a string (empty string)', () => {
    expect(padStart('', 1)).toBe(' ');
    expect(padStart(undefined, 1)).toBe(' ');
    expect(padStart(null, 1)).toBe(' ');
  });

  it('Should left pad a string', () => {
    expect(padStart('foo', 1)).toBe('foo');
    expect(padStart('foo', 2)).toBe('foo');
    expect(padStart('foo', 3)).toBe('foo');
    expect(padStart('foo', 4)).toBe(' foo');
    expect(padStart('foo', 5)).toBe('  foo');
    expect(padStart('foo', 6)).toBe('   foo');
    expect(padStart('foo', 7)).toBe('    foo');
    expect(padStart('foo', 8)).toBe('     foo');
    expect(padStart('foo', 9)).toBe('      foo');

    expect(padStart('quxx', 1)).toBe('quxx');
    expect(padStart('quxx', 2)).toBe('quxx');
    expect(padStart('quxx', 3)).toBe('quxx');
    expect(padStart('quxx', 4)).toBe('quxx');
    expect(padStart('quxx', 5)).toBe(' quxx');
    expect(padStart('quxx', 6)).toBe('  quxx');
    expect(padStart('quxx', 7)).toBe('   quxx');
    expect(padStart('quxx', 8)).toBe('    quxx');
    expect(padStart('quxx', 9)).toBe('     quxx');
    expect(padStart('quxx', 10)).toBe('      quxx');
  });

  it('Should left pad a string (custom pad chars)', () => {
    expect(padStart('foo', 1, '<>')).toBe('foo');
    expect(padStart('foo', 2, '<>')).toBe('foo');
    expect(padStart('foo', 3, '<>')).toBe('foo');
    expect(padStart('foo', 4, '<>')).toBe('<foo');
    expect(padStart('foo', 5, '<>')).toBe('<>foo');
    expect(padStart('foo', 6, '<>')).toBe('<><foo');
    expect(padStart('foo', 7, '<>')).toBe('<><>foo');
    expect(padStart('foo', 8, '<>')).toBe('<><><foo');
    expect(padStart('foo', 9, '<>')).toBe('<><><>foo');

    expect(padStart('quxx', 1, '<>')).toBe('quxx');
    expect(padStart('quxx', 2, '<>')).toBe('quxx');
    expect(padStart('quxx', 3, '<>')).toBe('quxx');
    expect(padStart('quxx', 4, '<>')).toBe('quxx');
    expect(padStart('quxx', 5, '<>')).toBe('<quxx');
    expect(padStart('quxx', 6, '<>')).toBe('<>quxx');
    expect(padStart('quxx', 7, '<>')).toBe('<><quxx');
    expect(padStart('quxx', 8, '<>')).toBe('<><>quxx');
    expect(padStart('quxx', 9, '<>')).toBe('<><><quxx');
    expect(padStart('quxx', 10, '<>')).toBe('<><><>quxx');
  });

  it('Should left pad a string (edge cases for length)', () => {
    expect(padStart('foo', null)).toBe('foo');
    expect(padStart('foo', undefined)).toBe('foo');
    expect(padStart('foo', NaN)).toBe('foo');
    expect(padStart('foo', {})).toBe('foo');
    expect(padStart('foo', [])).toBe('foo');
    expect(padStart('foo', 'foobar')).toBe('foo');
  });

  it('Should left pad a string (edge cases for chars)', () => {
    expect(padStart('foo', 1, undefined)).toBe('foo');
    expect(padStart('foo', 2, undefined)).toBe('foo');
    expect(padStart('foo', 3, undefined)).toBe('foo');
    expect(padStart('foo', 4, undefined)).toBe(' foo');
    expect(padStart('foo', 4, null)).toBe(' foo');
    expect(padStart('foo', 5, NaN)).toBe('Nafoo');
    expect(padStart('foo', 6, {})).toBe('[obfoo');
    expect(padStart('foo', 7, [1, 2])).toBe('1,21foo');
    expect(padStart('foo', 7, [])).toBe('foo');
    expect(padStart('foo', 8, Infinity)).toBe('Infinfoo');
    expect(padStart('foo', 9, 8188)).toBe('818881foo');
    expect(padStart('foo', 9, 0)).toBe('000000foo');
  });
});
