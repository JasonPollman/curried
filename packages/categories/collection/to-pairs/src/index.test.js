import toPairs from '.';

describe('toPairs', () => {
  it('Should be a function', () => {
    expect(typeof toPairs).toBe('function');
  });

  it('Should always return an array', () => {
    expect(toPairs()).toEqual([]);
    expect(toPairs(undefined)).toEqual([]);
    expect(toPairs([])).toEqual([]);
    expect(toPairs({})).toEqual([]);
    expect(toPairs(() => {})).toEqual([]);
    expect(toPairs('')).toEqual([]);
    expect(toPairs(0)).toEqual([]);
    expect(toPairs(NaN)).toEqual([]);
    expect(toPairs(Symbol('foo'))).toEqual([]);
    expect(toPairs(-1)).toEqual([]);
    expect(toPairs(true)).toEqual([]);
    expect(toPairs(false)).toEqual([]);
  });

  it('Should create tuple arrays (object)', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };

    expect(toPairs(obj)).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });

  it('Should create tuple arrays (array)', () => {
    const obj = [1, 2, 3];

    expect(toPairs(obj)).toEqual([
      [0, 1],
      [1, 2],
      [2, 3],
    ]);
  });

  it('Should create tuple arrays (string)', () => {
    const obj = 'foo';

    expect(toPairs(obj)).toEqual([
      [0, 'f'],
      [1, 'o'],
      [2, 'o'],
    ]);
  });

  it('Should create tuple arrays (Map)', () => {
    const obj = new Map([
      [0, 'f'],
      [1, 'o'],
      [2, 'o'],
    ]);

    expect(toPairs(obj)).toEqual([
      [0, 'f'],
      [1, 'o'],
      [2, 'o'],
    ]);
  });

  it('Should create tuple arrays (Set)', () => {
    const obj = new Set([1, 2, 3]);

    expect(toPairs(obj)).toEqual([
      [0, 1],
      [1, 2],
      [2, 3],
    ]);
  });
});
