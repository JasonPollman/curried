import toPath, { cache } from '.';

describe('toPath', () => {
  it('Should be a function', () => {
    expect(typeof toPath).toBe('function');
  });

  it('Should convert strings to path arrays', () => {
    expect(toPath('foo')).toEqual(['foo']);
    expect(toPath('foo.bar')).toEqual(['foo', 'bar']);
    expect(toPath('foo.bar.baz')).toEqual(['foo', 'bar', 'baz']);
  });

  it('Should convert strings to path arrays (empty string)', () => {
    expect(toPath('')).toEqual([]);
  });

  it('Should memoize paths up to 100 paths then clear the cache', () => {
    cache.clear();

    for (let i = 0; i < 102; i++) {
      expect(toPath(`${i}.foo`)).toEqual([i.toString(), 'foo']);
      expect(cache.size).toBe(i === 101 ? 1 : i + 1);
    }

    expect(cache.size).toBe(1);
  });

  it('Should return arrays', () => {
    const arr = [];
    expect(toPath(arr)).toBe(arr);
  });

  it('Should convert strings to path arrays (nil)', () => {
    expect(toPath(null)).toEqual([]);
    expect(toPath(undefined)).toEqual([]);
  });

  it('Should convert strings to path arrays using bracket notation', () => {
    expect(toPath('foo')).toEqual(['foo']);
    expect(toPath('foo[0]')).toEqual(['foo', '0']);
    expect(toPath('foo[0][1][2]')).toEqual(['foo', '0', '1', '2']);
    expect(toPath('foo[0][1][2].bar')).toEqual(['foo', '0', '1', '2', 'bar']);
    expect(toPath('foo[0][1][2].bar[0]')).toEqual(['foo', '0', '1', '2', 'bar', '0']);
  });

  it('Should convert strings to path arrays using bracket notation (with quotes)', () => {
    expect(toPath('foo')).toEqual(['foo']);
    expect(toPath("foo['0']")).toEqual(['foo', '0']);
    expect(toPath('foo[0]["1"][2]')).toEqual(['foo', '0', '1', '2']);
    expect(toPath('foo[0]["1"]["2"].bar')).toEqual(['foo', '0', '1', '2', 'bar']);
    expect(toPath("foo['0'][1]['2'].bar[0]")).toEqual(['foo', '0', '1', '2', 'bar', '0']);
  });

  it('Should convert strings to path arrays (quotes edge casts)', () => {
    expect(toPath('"foo"')).toEqual(['"foo"']);
    expect(toPath("foo['\"0\"']")).toEqual(['foo', '"0"']);
    expect(toPath('foo["\'0\'"]["1"][2]')).toEqual(['foo', "'0'", '1', '2']);
    expect(toPath('foo"""[0]["1"]["2"]."""bar')).toEqual(['foo"""[0]["1"]["2"]."""bar']);
    expect(toPath('foo""[0]["1"]["2"].""bar')).toEqual(['foo""', '0', '1', '2', '""bar']);
    expect(toPath("f'o'o['0'][1]['2'].b'a'r[0]")).toEqual(['f\'o\'o', '0', '1', '2', 'b\'a\'r', '0']);
  });

  it('Should convert strings to path arrays (bracket edge cases)', () => {
    expect(toPath('foo[]')).toEqual(['foo']);
    expect(toPath('foo[[]')).toEqual(['foo', '[']);
    expect(toPath('foo[[bar]]')).toEqual(['foo', '[bar', ']']);
    expect(toPath('foo["[bar]"]')).toEqual(['foo', '[bar]']);
    expect(toPath('f[oo[0]["[1]"][2]')).toEqual(['f', 'oo[0', '[1]', '2']);
  });

  it('Should convert strings to path arrays (right-bracket edge cases)', () => {
    expect(toPath('foo[]')).toEqual(['foo']);
    expect(toPath('foo[]]')).toEqual(['foo', ']']);
    expect(toPath('f]oo[0]]["[1]"][2]')).toEqual(['f]oo', '0', ']', '[1]', '2']);
  });

  it('Should convert strings to path arrays (dot edge cases)', () => {
    expect(toPath('foo[]')).toEqual(['foo']);
    expect(toPath('foo[...]')).toEqual(['foo', '...']);
    expect(toPath('foo".".bar".baz"')).toEqual(['foo"."', 'bar".baz"']);
  });

  it('Should work for numbers', () => {
    expect(toPath(0)).toEqual(['0']);
    expect(toPath(1)).toEqual(['1']);
    expect(toPath(-1)).toEqual(['-1']);
  });

  it('Should work for Symbols', () => {
    const sym = Symbol('foo');
    expect(toPath(sym)).toEqual([sym]);
  });

  it('Should work for booleans', () => {
    expect(toPath(false)).toEqual(['false']);
    expect(toPath(true)).toEqual(['true']);
  });

  it('Should work for objects', () => {
    const x = {
      toString() {
        return 'x.y';
      },
    };

    expect(toPath(x)).toEqual(['x', 'y']);
  });
});
