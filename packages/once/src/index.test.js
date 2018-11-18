import once, { ARITY } from '.';

describe('once', () => {
  it('Should return the first value if called more than once', () => {
    const onceDouble = once(num => num * 2);
    const onceSquare = once(num => num * num);

    expect(onceDouble(2)).toBe(4);
    expect(onceDouble(6)).toBe(4);

    expect(onceSquare(6)).toBe(36);
    expect(onceSquare(4)).toBe(36);
  });

  it('Should noop if arg passed to once is not a function', () => {
    const onceNull = once(null);
    const onceUndefined = once();

    expect(onceNull(2)).toBe(undefined);
    expect(onceUndefined(2)).toBe(undefined);
  });

  it('Should set the `ARITY` symbol on the onced function', () => {
    const onceDouble = once(num => num * 2);
    expect(onceDouble[ARITY]).toBe(1);
  });

  it('Should set the `ARITY` symbol on the onced function (existing)', () => {
    const fn = num => num * 2;
    fn[ARITY] = 5;

    const onceDouble = once(fn);
    expect(onceDouble[ARITY]).toBe(5);
  });
});
