import once from '.';

describe('once', () => {
  it('should return the first value if called more than once', () => {
    const onceDouble = once(num => num * 2);
    const onceSquare = once(num => num * num);

    expect(onceDouble(2)).toBe(4);
    expect(onceDouble(6)).toBe(4);

    expect(onceSquare(6)).toBe(36);
    expect(onceSquare(4)).toBe(36);
  });

  it('should noop if arg passed to once is not a function', () => {
    const onceNull = once(null);
    const onceUndefined = once();

    expect(onceNull(2)).toBe(undefined);
    expect(onceUndefined(2)).toBe(undefined);
  });
});
