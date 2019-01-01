import flattenDeep from '.';

describe('flattenDeep', () => {
  it('Should flatten an array', () => {
    const array = [1, 2, 3, null, undefined, {}];
    const flattend = flattenDeep(array);
    expect(flattend).toEqual(array);
  });

  it('Should flatten an array with nested arrays', () => {
    const array = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const flattend = flattenDeep(array);
    expect(flattend).toEqual(expected);
  });

  it('Should flatten an array with nested arrays and undefined values', () => {
    const ogArray = [1, [2, [3, [undefined]]], null, [8, [9, 10]], '', undefined];
    const expected = [1, 2, 3, undefined, null, 8, 9, 10, '', undefined];

    const flattend = flattenDeep(ogArray);
    expect(flattend).toEqual(expected);
  });

  it('Should properly handle non-array values', () => {
    expect(flattenDeep(null)).toEqual([]);
    expect(flattenDeep(undefined)).toEqual([]);
    expect(flattenDeep(false)).toEqual([]);
    expect(flattenDeep(true)).toEqual([]);
    expect(flattenDeep({})).toEqual([]);
    expect(flattenDeep(NaN)).toEqual([]);
    expect(flattenDeep(Symbol('foo'))).toEqual([]);
    expect(flattenDeep(undefined)).toEqual([]);
    expect(flattenDeep(Infinity)).toEqual([]);
    expect(flattenDeep(0)).toEqual([]);
    expect(flattenDeep(null)).toEqual([]);
  });
});
