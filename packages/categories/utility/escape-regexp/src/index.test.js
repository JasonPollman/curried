import escapeRegExp from '.';

describe('escapeRegExp', () => {
  it('Should be a function', () => {
    expect(typeof escapeRegExp).toBe('function');
  });

  it('Should escape a string for regular expression use', () => {
    expect(escapeRegExp('\\^$.*+?()[]{}|')).toBe('\\\\\\^\\$\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|');
  });

  it('Should return an empty string when misused', () => {
    expect(escapeRegExp(null)).toBe('');
    expect(escapeRegExp(undefined)).toBe('');
    expect(escapeRegExp('')).toBe('');
  });
});
