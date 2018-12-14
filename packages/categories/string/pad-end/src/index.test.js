import padEnd from '.';

describe('padEnd', () => {
  it('Should be a function', () => {
    expect(typeof padEnd).toBe('function');
  });

  it('Should right pad a string (empty string)', () => {
    expect(padEnd('', 1)).toBe(' ');
    expect(padEnd(undefined, 1)).toBe(' ');
    expect(padEnd(null, 1)).toBe(' ');
  });

  it('Should pad the end of a string', () => {
    expect(padEnd('foo', 1)).toBe('foo');
    expect(padEnd('foo', 2)).toBe('foo');
    expect(padEnd('foo', 3)).toBe('foo');
    expect(padEnd('foo', 4)).toBe('foo ');
    expect(padEnd('foo', 5)).toBe('foo  ');
    expect(padEnd('foo', 6)).toBe('foo   ');
    expect(padEnd('foo', 7)).toBe('foo    ');
    expect(padEnd('foo', 8)).toBe('foo     ');
    expect(padEnd('foo', 9)).toBe('foo      ');

    expect(padEnd('quxx', 1)).toBe('quxx');
    expect(padEnd('quxx', 2)).toBe('quxx');
    expect(padEnd('quxx', 3)).toBe('quxx');
    expect(padEnd('quxx', 4)).toBe('quxx');
    expect(padEnd('quxx', 5)).toBe('quxx ');
    expect(padEnd('quxx', 6)).toBe('quxx  ');
    expect(padEnd('quxx', 7)).toBe('quxx   ');
    expect(padEnd('quxx', 8)).toBe('quxx    ');
    expect(padEnd('quxx', 9)).toBe('quxx     ');
    expect(padEnd('quxx', 10)).toBe('quxx      ');
  });

  it('Should pad the end of a string (custom pad chars)', () => {
    expect(padEnd('foo', 1, '<>')).toBe('foo');
    expect(padEnd('foo', 2, '<>')).toBe('foo');
    expect(padEnd('foo', 3, '<>')).toBe('foo');
    expect(padEnd('foo', 4, '<>')).toBe('foo<');
    expect(padEnd('foo', 5, '<>')).toBe('foo<>');
    expect(padEnd('foo', 6, '<>')).toBe('foo<><');
    expect(padEnd('foo', 7, '<>')).toBe('foo<><>');
    expect(padEnd('foo', 8, '<>')).toBe('foo<><><');
    expect(padEnd('foo', 9, '<>')).toBe('foo<><><>');

    expect(padEnd('quxx', 1, '<>')).toBe('quxx');
    expect(padEnd('quxx', 2, '<>')).toBe('quxx');
    expect(padEnd('quxx', 3, '<>')).toBe('quxx');
    expect(padEnd('quxx', 4, '<>')).toBe('quxx');
    expect(padEnd('quxx', 5, '<>')).toBe('quxx<');
    expect(padEnd('quxx', 6, '<>')).toBe('quxx<>');
    expect(padEnd('quxx', 7, '<>')).toBe('quxx<><');
    expect(padEnd('quxx', 8, '<>')).toBe('quxx<><>');
    expect(padEnd('quxx', 9, '<>')).toBe('quxx<><><');
    expect(padEnd('quxx', 10, '<>')).toBe('quxx<><><>');
  });

  it('Should pad the end of a string (edge cases for length)', () => {
    expect(padEnd('foo', null)).toBe('foo');
    expect(padEnd('foo', undefined)).toBe('foo');
    expect(padEnd('foo', NaN)).toBe('foo');
    expect(padEnd('foo', {})).toBe('foo');
    expect(padEnd('foo', [])).toBe('foo');
    expect(padEnd('foo', 'foobar')).toBe('foo');
  });

  it('Should pad the end of a string (edge cases for chars)', () => {
    expect(padEnd('foo', 1, undefined)).toBe('foo');
    expect(padEnd('foo', 2, undefined)).toBe('foo');
    expect(padEnd('foo', 3, undefined)).toBe('foo');
    expect(padEnd('foo', 4, undefined)).toBe('foo ');
    expect(padEnd('foo', 4, null)).toBe('foo ');
    expect(padEnd('foo', 5, NaN)).toBe('fooNa');
    expect(padEnd('foo', 6, {})).toBe('foo[ob');
    expect(padEnd('foo', 7, [1, 2])).toBe('foo1,21');
    expect(padEnd('foo', 7, [])).toBe('foo');
    expect(padEnd('foo', 8, Infinity)).toBe('fooInfin');
    expect(padEnd('foo', 9, 8188)).toBe('foo818881');
    expect(padEnd('foo', 9, 0)).toBe('foo000000');
  });
});
