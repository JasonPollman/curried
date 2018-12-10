import mapKeys from '.';

const uppercaseKey = (x, y) => y.toString().toUpperCase();

describe('mapKeys', () => {
  it('Should be a function', () => {
    expect(typeof mapKeys).toBe('function');
  });

  it('Should work for capped functions', () => {
    const context = {
      capped: true,
    };

    function iteratee() {
      expect(arguments.length).toBe(1);
      return true;
    }

    expect(mapKeys.call(context, [1, 2, 3], iteratee)).toEqual({ true: 3 });
  });

  it('Should map an array\'s values', () => {
    expect(mapKeys([1, 2, 3, 4], uppercaseKey)).toEqual({
      0: 1,
      1: 2,
      2: 3,
      3: 4,
    });
  });

  it('Should map an objects\'s values', () => {
    expect(mapKeys({}, uppercaseKey)).toEqual({});
    expect(mapKeys({ foo: 1, bar: 2 }, uppercaseKey)).toEqual({ FOO: 1, BAR: 2 });
  });

  it('Should work with shorthand string iteratees (1)', () => {
    const things = [
      { value: 1, name: 'a', foo: 'bar' },
      { value: 2, name: 'b', foo: 'bar' },
      { value: 2, name: 'c', foo: 'bar' },
      { value: 2, name: 'd', foo: 'bar' },
    ];

    expect(mapKeys(things, 'name')).toEqual({
      a: { value: 1, name: 'a', foo: 'bar' },
      b: { value: 2, name: 'b', foo: 'bar' },
      c: { value: 2, name: 'c', foo: 'bar' },
      d: { value: 2, name: 'd', foo: 'bar' },
    });
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(mapKeys(collection, uppercaseKey)).toEqual({
      A: 1,
      B: 2,
      C: 3,
    });
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3]);
    expect(mapKeys(collection, x => x)).toEqual({
      1: 1,
      2: 2,
      3: 3,
    });
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(mapKeys(collection, x => x * 2)).toEqual({ 2: 1, 4: 2, 6: 3 });
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(mapKeys(collection, x => x * 2)).toEqual({
      2: 1,
      4: 2,
      6: 3,
      8: 4,
    });
  });

  it('Should work for falsy values', () => {
    expect(mapKeys(null, uppercaseKey)).toEqual({});
    expect(mapKeys(undefined, uppercaseKey)).toEqual({});
    expect(mapKeys('', uppercaseKey)).toEqual({});
    expect(mapKeys(0, uppercaseKey)).toEqual({});
    expect(mapKeys(false, uppercaseKey)).toEqual({});
    expect(mapKeys(NaN, uppercaseKey)).toEqual({});
  });
});
