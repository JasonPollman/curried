import mapValues from '.';

const square = x => x ** 2;

describe('mapValues', () => {
  it('Should be a function', () => {
    expect(typeof mapValues).toBe('function');
  });

  it('Should map an array\'s values', () => {
    expect(mapValues([1, 2, 3, 4], square)).toEqual({
      0: 1,
      1: 4,
      2: 9,
      3: 16,
    });
  });

  it('Should map an objects\'s values', () => {
    expect(mapValues({}, square)).toEqual({});
    expect(mapValues({ foo: 1, bar: 2 }, square)).toEqual({ foo: 1, bar: 4 });
  });

  it('Should work with shorthand string iteratees (1)', () => {
    const things = [
      { value: 1, name: 'a', foo: 'bar' },
      { value: 2, name: 'b', foo: 'bar' },
      { value: 2, name: 'c', foo: 'bar' },
      { value: 2, name: 'd', foo: 'bar' },
    ];

    expect(mapValues(things, 'name')).toEqual({
      0: 'a',
      1: 'b',
      2: 'c',
      3: 'd',
    });
  });

  it('Should work with shorthand string iteratees (2)', () => {
    const things = {
      a: { value: 1, name: 'a', foo: 'bar' },
      b: { value: 2, name: 'b', foo: 'bar' },
      c: { value: 2, name: 'c', foo: 'bar' },
      d: { value: 2, name: 'd', foo: 'bar' },
    };

    expect(mapValues(things, 'name')).toEqual({
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd',
    });
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(mapValues(collection, square)).toEqual({
      a: 1,
      b: 4,
      c: 9,
    });
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3]);
    expect(mapValues(collection, square)).toEqual({
      0: 1,
      1: 4,
      2: 9,
    });
  });

  it('Should work for falsy values', () => {
    expect(mapValues(null, square)).toEqual({});
    expect(mapValues(undefined, square)).toEqual({});
    expect(mapValues('', square)).toEqual({});
    expect(mapValues(0, square)).toEqual({});
    expect(mapValues(false, square)).toEqual({});
    expect(mapValues(NaN, square)).toEqual({});
  });
});
