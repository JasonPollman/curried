import trimCharsFx from '.';

describe('trimCharsFx', () => {
  it('Should be a function', () => {
    expect(typeof trimCharsFx).toBe('function');
  });

  it('Should trim a string (nil input)', () => {
    expect(trimCharsFx(' ')(null)).toBe('');
    expect(trimCharsFx(' ')(undefined)).toBe('');
    expect(trimCharsFx(' ')([])).toBe('');
    expect(trimCharsFx(' ')([1, 2, 3])).toBe('1,2,3');
    expect(trimCharsFx(' ')({})).toBe('[object Object]');
  });

  it('Should trim a string', () => {
    expect(trimCharsFx('f')('foo')).toBe('oo');
    expect(trimCharsFx('f')('foof')).toBe('oo');
    expect(trimCharsFx('f')('fffoo')).toBe('oo');
    expect(trimCharsFx('f')('oofff')).toBe('oo');
    expect(trimCharsFx('f')('fffoofff')).toBe('oo');
  });

  it('Should trim a string (2)', () => {
    expect(trimCharsFx('<>')('<><><><>xxx<><><><>')).toBe('xxx');
    expect(trimCharsFx('<>')('><><><><>xxx<><><><><')).toBe('xxx');
    expect(trimCharsFx('><><><><>xxx<><><><><')('><><><><>xxx<><><><><')).toBe('');
  });

  it('Should trim a string (3)', () => {
    expect(trimCharsFx('/')('/////xxx/////')).toBe('xxx');
    expect(trimCharsFx('//')('/////xxx/////')).toBe('xxx');
  });

  it('Should trim a string (multi chars)', () => {
    expect(trimCharsFx('fo')('foo')).toBe('');
    expect(trimCharsFx('fo')('foof')).toBe('');
    expect(trimCharsFx('fo')('fooafao')).toBe('afa');
    expect(trimCharsFx('fx')('fffxooxx')).toBe('oo');
  });

  it('Should return the original string if an empty charset is passed', () => {
    expect(trimCharsFx('', 'foo')).toBe('foo');
  });
});
