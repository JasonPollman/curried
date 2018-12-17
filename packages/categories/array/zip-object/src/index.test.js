import zipObject from '.';

describe('zipObject', () => {
  it('Should be a function', () => {
    expect(typeof zipObject).toBe('function');
  });

  it('Should always return an object', () => {
    expect(zipObject()).toEqual({});
    expect(zipObject(undefined)).toEqual({});
    expect(zipObject(null)).toEqual({});
    expect(zipObject(NaN)).toEqual({});
    expect(zipObject(Infinity)).toEqual({});
    expect(zipObject(0)).toEqual({});
    expect(zipObject(Symbol('foo'))).toEqual({});
    expect(zipObject(-1)).toEqual({});
  });

  it('Should zip an object', () => {
    expect(zipObject(['a', 'b', 'c'], [1, 2, 3])).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  it('Should zip an object (string)', () => {
    expect(zipObject('abc', 'def')).toEqual({
      a: 'd',
      b: 'e',
      c: 'f',
    });
  });

  it('Should zip an object (numbers)', () => {
    expect(zipObject([1, 2, 3], [4, 5, 6])).toEqual({
      1: 4,
      2: 5,
      3: 6,
    });
  });

  it('Should zip an object (with object)', () => {
    expect(zipObject([1, 2, 3], [4, {}, { x: 1 }])).toEqual({
      1: 4,
      2: {},
      3: { x: 1 },
    });
  });

  it('Should ignore additional values', () => {
    expect(zipObject(['a', 'b', 'c'], [1, 2, 3, 4, 5, 6, 7, 8])).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  it('Should return an empty array if keys isn\'t an array or string', () => {
    expect(zipObject(null, [1, 2, 3, 4, 5, 6, 7, 8])).toEqual({});
    expect(zipObject(Symbol('foo'), [1, 2, 3, 4, 5, 6, 7, 8])).toEqual({});
    expect(zipObject(Infinity, [1, 2, 3, 4, 5, 6, 7, 8])).toEqual({});
    expect(zipObject(() => {}, [1, 2, 3, 4, 5, 6, 7, 8])).toEqual({});
  });

  it('Should return all undefined values if no values are given', () => {
    expect(zipObject([1, 2, 3])).toEqual({
      1: undefined,
      2: undefined,
      3: undefined,
    });

    expect(zipObject([1, 2, 3], 0)).toEqual({
      1: undefined,
      2: undefined,
      3: undefined,
    });

    expect(zipObject([1, 2, 3], () => {})).toEqual({
      1: undefined,
      2: undefined,
      3: undefined,
    });

    expect(zipObject([1, 2, 3], 100)).toEqual({
      1: undefined,
      2: undefined,
      3: undefined,
    });

    expect(zipObject([1, 2, 3], null)).toEqual({
      1: undefined,
      2: undefined,
      3: undefined,
    });
  });
});
