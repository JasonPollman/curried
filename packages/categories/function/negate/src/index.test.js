import negate from '.';

describe('negate', () => {
  it('Should be a function', () => {
    expect(typeof negate).toBe('function');
  });

  it('Should negate the results of the given function', () => {
    const t = () => true;
    const f = negate(t);
    expect(f()).toEqual(false);
  });

  it('Should negate the results of the given function 2', () => {
    const t = n => n % 2 === 0;
    const f = negate(t);

    expect(t(0)).toEqual(true);
    expect(t(1)).toEqual(false);

    expect(f(0)).toEqual(false);
    expect(f(1)).toEqual(true);
  });
});
