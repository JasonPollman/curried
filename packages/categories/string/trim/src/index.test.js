import trim from '.';

describe('trim', () => {
  it('Should be a function', () => {
    expect(typeof trim).toBe('function');
  });

  it('Should trim a string (nil input)', () => {
    expect(trim(null)).toBe('');
    expect(trim(undefined)).toBe('');
    expect(trim([])).toBe('');
    expect(trim([1, 2, 3])).toBe('1,2,3');
    expect(trim({})).toBe('[object Object]');
  });

  it('Should trim a string', () => {
    expect(trim('foo', 'f')).toBe('oo');
    expect(trim('foof', 'f')).toBe('oo');
    expect(trim('fffoo', 'f')).toBe('oo');
    expect(trim('oofff', 'f')).toBe('oo');
    expect(trim('fffoofff', 'f')).toBe('oo');
  });

  it('Should trim a string (2)', () => {
    expect(trim('<><><><>xxx<><><><>', '<>')).toBe('xxx');
    expect(trim('><><><><>xxx<><><><><', '<>')).toBe('xxx');
    expect(trim('><><><><>xxx<><><><><', '><><><><>xxx<><><><><')).toBe('');
  });

  it('Should trim a string (3)', () => {
    expect(trim('/////xxx/////', '/')).toBe('xxx');
    expect(trim('/////xxx/////', '//')).toBe('xxx');
  });

  it('Should trim a string (multi chars)', () => {
    expect(trim('foo', 'fo')).toBe('');
    expect(trim('foof', 'fo')).toBe('');
    expect(trim('fooafao', 'fo')).toBe('afa');
    expect(trim('fffxooxx', 'fx')).toBe('oo');
  });

  it('Should trim all whitespace by default', () => {
    expect(trim('\n\n\tfoo   \n')).toBe('foo');
    expect(trim('\tfoo   \r\n')).toBe('foo');
  });

  it('Should trim all whitespace by default', () => {
    expect(trim('\n\n\tfoo   \n')).toBe('foo');
    expect(trim('\tfoo   \r\n')).toBe('foo');
  });

  it('Should work with regular expressions', () => {
    expect(trim('  foO  ', /O +/)).toBe('fo');
    expect(trim('  foobar  ', / +/)).toBe('foobar');
    expect(trim('  foobar  ', /( *foo)?/)).toBe('bar');
    expect(trim('  foobarfoo  ', /( *foo *)?/)).toBe('bar');
    expect(trim('ffffffffff', /f/)).toBe('');
  });

  it('Should return the original string if an empty charset is passed', () => {
    expect(trim('foo', '')).toBe('foo');
  });
});
