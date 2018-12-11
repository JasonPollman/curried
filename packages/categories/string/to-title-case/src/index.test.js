import toTitleCase from '.';

describe('toTitleCase', () => {
  it('Should be a function', () => {
    expect(typeof toTitleCase).toBe('function');
  });

  it('Should convert a string to title case', () => {
    expect(toTitleCase('FoO BaR')).toBe('Fo O Ba R');
    expect(toTitleCase('FOO_BAR')).toBe('Foo Bar');
    expect(toTitleCase('')).toBe('');
  });

  it('Should work with numbers', () => {
    expect(toTitleCase(0)).toBe('0');
    expect(toTitleCase(Infinity)).toBe('Infinity');
  });

  it('Should work with objects', () => {
    expect(toTitleCase({})).toBe('Object Object');
  });
});
