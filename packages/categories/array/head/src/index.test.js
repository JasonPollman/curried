import head from '.';

describe('head', () => {
  it('Should return the value at the first index of an array', () => {
    expect(head([5, 6, 7])).toEqual(5);
    expect(head(['a', 'b', 'c'])).toEqual('a');
    expect(head('hello')).toEqual('h');
  });

  it('Should return undefined if param is not an array', () => {
    expect(head(null)).toEqual(undefined);
    expect(head()).toEqual(undefined);
    expect(head({})).toEqual(undefined);
  });

  it('Should handle bad input', () => {
    expect(head(true)).toEqual(undefined);
    expect(head(false)).toEqual(undefined);
    expect(head(NaN)).toEqual(undefined);
    expect(head(Symbol('foo'))).toEqual(undefined);
    expect(head(undefined)).toEqual(undefined);
    expect(head(Infinity)).toEqual(undefined);
    expect(head(0)).toEqual(undefined);
    expect(head(null)).toEqual(undefined);
  });
});
