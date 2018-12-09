import nthFx from '.';

describe('nth', () => {
  it('Should return the value at the nth index of an array', () => {
    expect(nthFx(0)([5, 6, 7])).toEqual(5);
    expect(nthFx(1)([5, 6, 7])).toEqual(6);
    expect(nthFx(2)([5, 6, 7])).toEqual(7);

    expect(nthFx(2, ['a', 'b', 'c'])).toEqual('c');
    expect(nthFx(2, 'hello')).toEqual('l');
  });

  it('Should return the value at the nth index of an array (negative index)', () => {
    expect(nthFx(-0)([5, 6, 7])).toEqual(5);
    expect(nthFx(-1)([5, 6, 7])).toEqual(7);
    expect(nthFx(-2)([5, 6, 7])).toEqual(6);
    expect(nthFx(-3)([5, 6, 7])).toEqual(5);
    expect(nthFx(-4)([5, 6, 7])).toEqual(undefined);

    expect(nthFx(-2, ['a', 'b', 'c'])).toEqual('b');

    expect(nthFx(-1, 'hello')).toEqual('o');
    expect(nthFx(-2, 'hello')).toEqual('l');
    expect(nthFx(-4, 'hello')).toEqual('e');
    expect(nthFx(-5, 'hello')).toEqual('h');
  });

  it('Should return undefined if param is not an array', () => {
    expect(nthFx(0, () => {})).toEqual(undefined);
    expect(nthFx(2, null)).toEqual(undefined);
    expect(nthFx(2, {})).toEqual(undefined);
  });
});
