import attemptFx from '.';

describe('attemptFx', () => {
  it('Should be a function', () => {
    expect(typeof attemptFx).toBe('function');
  });

  it('Should execute a function (curried)', () => {
    const fn = (a, b) => {
      expect(a).toBe(1);
      expect(b).toBe(2);
      return 3;
    };

    expect(attemptFx([1, 2])(fn)).toBe(3);
  });

  it('Should catch if the function throws', () => {
    const fn = (a, b) => {
      expect(a).toBe(1);
      expect(b).toBe(2);
      throw new Error('foo');
    };

    expect(attemptFx([1, 2])(fn).message).toBe('foo');
  });

  it('Should handle bad arguments silently', () => {
    const fn = (a, b) => {
      expect(a).toBe(undefined);
      expect(b).toBe(undefined);
      return 7;
    };

    expect(attemptFx('foobar')(fn)).toBe(7);
  });
});
