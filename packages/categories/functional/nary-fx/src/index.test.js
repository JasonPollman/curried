import naryFx from '.';

describe('naryFx', () => {
  it('Should be a function', () => {
    expect(typeof naryFx).toBe('function');
  });

  it('Should limit the arity of a function', () => {
    const echo = (...args) => args;

    let fixed = naryFx(2)(echo);
    expect(fixed(1, 2, 3, 4)).toEqual([1, 2]);

    fixed = naryFx(0)(echo);
    expect(fixed(1, 2, 3, 4)).toEqual([]);

    fixed = naryFx(-1, echo);
    expect(fixed(1, 2, 3, 4)).toEqual([]);

    fixed = naryFx('3')(echo);
    expect(fixed(1, 2, 3, 4)).toEqual([1, 2, 3]);

    fixed = naryFx(100, echo);
    expect(fixed(1, 2, 3, 4)).toEqual([1, 2, 3, 4]);
  });
});
