import pickFx from '.';

describe('pickFx', () => {
  it('Should be a function', () => {
    expect(typeof pickFx).toBe('function');
  });

  it('Should pick from array\'s values', () => {
    expect(pickFx(x => x % 2 === 0, [1, 2, 3, 4])).toEqual({
      1: 2,
      3: 4,
    });
  });

  it('Should pick an object\'s values', () => {
    expect(pickFx(null)({})).toEqual({});
    expect(pickFx([])({})).toEqual({});
    expect(pickFx(() => {})({})).toEqual({});
    expect(pickFx(['foo', 'bar'], { foo: 1, bar: 2 })).toEqual({ foo: 1, bar: 2 });

    expect(pickFx(['foo', 'bar'])({
      foo: 1,
      bar: 2,
      baz: 0,
      quxx: 3,
    })).toEqual({ foo: 1, bar: 2 });
  });

  it('Should pass the proper values to the iteratee function', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);

    const fn = (val, key, map) => {
      expect(typeof val).toBe('number');
      expect(typeof key).toBe('string');
      expect(map).toBe(undefined);
      return val > 1;
    };

    expect(pickFx(fn, collection)).toEqual({
      b: 2,
      c: 3,
    });
  });

  it('Should pick an object\'s values (bad iteratee)', () => {
    expect(pickFx(0, {
      foo: 1,
      bar: 2,
      baz: 0,
      quxx: 3,
    })).toEqual({
      foo: 1,
      bar: 2,
      quxx: 3,
    });
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(pickFx(val => val > 1)(collection)).toEqual({
      b: 2,
      c: 3,
    });
  });

  it('Should work for Map objects (2)', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(pickFx((val, key) => key === 'a', collection)).toEqual({
      a: 1,
    });
  });

  it('Should work for Map objects (3)', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(pickFx(['a', 'c'])(collection)).toEqual({
      a: 1,
      c: 3,
    });
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3]);
    expect(pickFx(val => val > 1, collection)).toEqual({
      1: 2,
      2: 3,
    });
  });

  it('Should work for falsy values', () => {
    expect(pickFx(['foo'])(null)).toEqual({});
    expect(pickFx(['foo'])(undefined)).toEqual({});
    expect(pickFx(['foo'])('')).toEqual({});
    expect(pickFx(['foo'])(0)).toEqual({});
    expect(pickFx(['foo'])(false)).toEqual({});
    expect(pickFx(['foo'])(NaN)).toEqual({});
    expect(pickFx(new Date(), null)).toEqual({});
  });
});
