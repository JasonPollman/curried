import reverse from '.';

describe('reverse', () => {
  it('Should be a function', () => {
    expect(typeof reverse).toBe('function');
  });

  it('Should return an empty array for invalid input', () => {
    expect(reverse()).toEqual([]);
    expect(reverse(0)).toEqual([]);
    expect(reverse(null)).toEqual([]);
    expect(reverse(() => {})).toEqual([]);
    expect(reverse({ foo: 'bar' })).toEqual([]);
  });

  it('Should reverse an array', () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    expect(reverse(['foo', 'bar'])).toEqual(['bar', 'foo']);

    const array = ['foo'];
    const results = reverse(array);

    expect(results).toEqual(['foo']);
    expect(results).not.toBe(array);
  });

  it('Should work on Arguments objects', () => {
    (function data() {
      expect(reverse(arguments)).toEqual([3, 2, 1]);
    }(1, 2, 3));
  });

  it('Should handle bad inputs', () => {
    expect(reverse(undefined)).toEqual([]);
    expect(reverse({})).toEqual([]);
  });
});
