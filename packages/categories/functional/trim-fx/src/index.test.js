import trimFx from '.';

describe('trimFx', () => {
  it('Should be a function', () => {
    expect(typeof trimFx).toBe('function');
  });

  it('Should trimFx a string (nil input)', () => {
    expect(trimFx(null)).toBe('');
    expect(trimFx(undefined)).toBe('');
    expect(trimFx([])).toBe('');
    expect(trimFx([1, 2, 3])).toBe('1,2,3');
    expect(trimFx({})).toBe('[object Object]');
  });

  it('Should trimFx a string', () => {
    expect(trimFx('      foo      ')).toBe('foo');
    expect(trimFx(`${' '.repeat(1000)}foo${' '.repeat(1000)}`)).toBe('foo');
  });
});
