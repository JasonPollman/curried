import defaults from '.';

describe('defaults', () => {
  it('Should be a function', () => {
    expect(typeof defaults).toBe('function');
  });

  it('Should return an empty object if nothing is passed', () => {
    expect(defaults()).toEqual({});
  });

  it('Should shallow combine 1 object', () => {
    const a = { a: 1 };
    expect(defaults(a)).toEqual({ a: 1 });
    expect(defaults(a)).not.toBe(a);
  });

  it('Should handle bad input', () => {
    const a = { a: 1 };
    expect(defaults(a, null, 4, undefined)).toEqual({ a: 1 });
  });

  it('Should shallow combine 2 objects', () => {
    const a = { a: 1 };
    expect(defaults(a, { b: 2 })).toEqual({ a: 1, b: 2 });
    expect(defaults(a, { b: 2 })).not.toBe(a);
  });

  it('Should shallow combine 3+ objects', () => {
    const x1 = { x: 1 };
    const x2 = { x: 2 };

    const combined = defaults(x1, { a: 1 }, x2, { b: 2 });
    expect(combined).toEqual({ x: 1, a: 1, b: 2 });
    expect(combined).not.toBe(x1);
    expect(combined).not.toBe(x2);
  });

  it('Should shallow combine multiple types of objects', () => {
    const x1 = { x: 1 };
    const x2 = { x: 2 };
    const map = new Map([['x', 5], ['q', 'q']]);
    const set = new Set([1, 2, 3]);
    const arr = [4, 5, 6];
    const str = 'ab';

    const combined = defaults(x1, { a: 1 }, x2, { b: 2 }, map, set, arr, str);
    expect(combined).toEqual({
      0: 1,
      1: 2,
      2: 3,
      x: 1,
      a: 1,
      b: 2,
      q: 'q',
    });

    expect(combined).not.toBe(x1);
    expect(combined).not.toBe(x2);
  });
});
