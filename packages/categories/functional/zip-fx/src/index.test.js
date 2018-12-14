import zipFx from '.';

describe('zip', () => {
  it('Should be a function', () => {
    expect(typeof zipFx).toBe('function');
  });

  it('Should zip arrays', () => {
    expect(zipFx([1, 2, 3])(['a', 'b', 'c'])).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
  });

  it('Should zip arrays (bad values given)', () => {
    expect(zipFx([1, 2, 3], {})).toEqual([[1], [2], [3]]);
  });

  it('Should zip arrays (no elements in first array)', () => {
    expect(zipFx([])(['a', 'b', 'c'])).toEqual([[undefined, 'a'], [undefined, 'b'], [undefined, 'c']]);
  });

  it('Should zip arrays (no elements in second array)', () => {
    expect(zipFx([1, 2])([])).toEqual([[1, undefined], [2, undefined]]);
  });

  it('Should zip arrays (strings given)', () => {
    expect(zipFx('foo')('bar')).toEqual([['f', 'b'], ['o', 'a'], ['o', 'r']]);
  });
});
