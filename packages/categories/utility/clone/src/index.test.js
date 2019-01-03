import clone from '.';

describe('False', () => {
  it('Should be a function', () => {
    expect(typeof clone).toBe('function');
  });

  it('Should return literal values', () => {
    expect(clone()).toBe(undefined);
    expect(clone(null)).toBe(null);
    expect(clone(1)).toBe(1);
    expect(clone(0)).toBe(0);
    expect(clone(-0)).toBe(-0);
    expect(clone(-1)).toBe(-1);
    expect(clone('foo')).toBe('foo');
    expect(clone('')).toBe('');
    expect(clone(Infinity)).toBe(Infinity);
    expect(clone(-Infinity)).toBe(-Infinity);
    expect(clone(NaN)).toBe(NaN);
  });

  it('Should clone plain objects', () => {
    const object = { foo: 'bar' };
    const cloned = clone(object);

    expect(cloned).toEqual(object);
    expect(cloned).not.toBe(object);
  });

  it('Should handle if the user overwrites an object\'s `constructor` property', () => {
    const object = { foo: 'bar', constructor: 'constructor' };
    const cloned = clone(object);

    expect(cloned).toEqual(object);
    expect(cloned).not.toBe(object);
    expect(cloned).toEqual({ foo: 'bar', constructor: 'constructor' });
    expect(cloned instanceof Object).toBe(true);
  });

  it('Should clone Arrays', () => {
    const array = [1, 2, 3];
    const cloned = clone(array);

    expect(cloned).toEqual(array);
    expect(cloned.length).toBe(array.length);
    expect(cloned).not.toBe(array);
  });

  it('Should clone Arrays (retain own enumerable properties)', () => {
    const array = [1, 2, 3];
    array.foo = 'bar';

    const cloned = clone(array);

    expect(cloned).toEqual(array);
    expect(cloned.length).toBe(array.length);
    expect(cloned.foo).toBe(array.foo);
    expect(cloned.foo).toBe('bar');
    expect(cloned).not.toBe(array);
  });

  it('Should clone Arrays (retain own enumerable properties, 2)', () => {
    const array = /\w+/.exec('foobar');
    const cloned = clone(array);

    expect(cloned).toEqual(array);
    expect(cloned.length).toBe(array.length);
    expect(cloned.input).toBe('foobar');
    expect(cloned.index).toBe(0);
    expect(cloned).not.toBe(array);
  });

  it('Should clone RegExp objects', () => {
    const regexp = /foo/gi;
    const cloned = clone(regexp);

    expect(regexp.flags).toBe('gi');
    expect(regexp.source).toBe('foo');
    expect(regexp.lastIndex).toBe(0);

    expect(cloned.flags).toBe('gi');
    expect(cloned.source).toBe('foo');
    expect(cloned.lastIndex).toBe(0);
    expect(cloned).not.toBe(regexp);
  });

  it('Should clone Symbol objects (1)', () => {
    const symbol = Symbol('foo');
    const cloned = clone(symbol);

    expect(cloned).not.toBe(symbol);
    expect(cloned.toString()).toBe(symbol.toString());
  });

  it('Should clone Symbol objects (2)', () => {
    const symbol = Symbol(); // eslint-disable-line symbol-description
    const cloned = clone(symbol);

    expect(cloned).not.toBe(symbol);
    expect(cloned.toString()).toBe(symbol.toString());
  });

  it('Should clone Date objects (1)', () => {
    const date = new Date(-1);
    const cloned = clone(date);

    expect(cloned).not.toBe(date);
    expect(cloned.toString()).toBe(date.toString());
    expect(cloned.getTime()).toBe(date.getTime());
  });

  it('Should clone Date objects (2)', () => {
    const date = new Date(100);
    const cloned = clone(date);

    expect(cloned).not.toBe(date);
    expect(cloned.toString()).toBe(date.toString());
    expect(cloned.getTime()).toBe(date.getTime());
  });

  it('Should clone Number objects (1)', () => {
    const source = new Number(); // eslint-disable-line no-new-wrappers
    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(cloned.toString()).toBe(source.toString());
    expect(cloned.valueOf()).toBe(source.valueOf());
    expect(cloned.valueOf()).toBe(0);
  });

  it('Should clone Number objects (2)', () => {
    const source = new Number(7); // eslint-disable-line no-new-wrappers
    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(cloned.toString()).toBe(source.toString());
    expect(cloned.valueOf()).toBe(source.valueOf());
    expect(cloned.valueOf()).toBe(7);
  });

  it('Should clone Number objects (3)', () => {
    const source = new Number(7); // eslint-disable-line no-new-wrappers
    source.foo = 'bar';

    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(cloned.toString()).toBe(source.toString());
    expect(cloned.valueOf()).toBe(source.valueOf());
    expect(cloned.valueOf()).toBe(7);
    expect(cloned.foo).toBe('bar');
  });

  it('Should clone String objects (1)', () => {
    const source = new String(); // eslint-disable-line no-new-wrappers
    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(cloned.toString()).toBe(source.toString());
    expect(cloned.valueOf()).toBe(source.valueOf());
    expect(cloned.valueOf()).toBe('');
  });

  it('Should clone String objects (2)', () => {
    const source = new String('foo'); // eslint-disable-line no-new-wrappers
    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(cloned.toString()).toBe(source.toString());
    expect(cloned.valueOf()).toBe(source.valueOf());
    expect(cloned.valueOf()).toBe('foo');
  });

  it('Should clone Boolean objects (1)', () => {
    const source = new Boolean(); // eslint-disable-line no-new-wrappers
    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(cloned.toString()).toBe(source.toString());
    expect(cloned.valueOf()).toBe(source.valueOf());
    expect(cloned.valueOf()).toBe(false);
  });

  it('Should clone Boolean objects (2)', () => {
    const source = new Boolean(true); // eslint-disable-line no-new-wrappers
    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(cloned.toString()).toBe(source.toString());
    expect(cloned.valueOf()).toBe(source.valueOf());
    expect(cloned.valueOf()).toBe(true);
  });

  it('Should clone Boolean objects (3)', () => {
    const source = new Boolean(false); // eslint-disable-line no-new-wrappers
    source.foo = 'bar';

    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(cloned.toString()).toBe(source.toString());
    expect(cloned.valueOf()).toBe(source.valueOf());
    expect(cloned.valueOf()).toBe(false);
    expect(cloned.foo).toBe('bar');
  });

  it('Should clone Arguments objects', () => {
    (function testit() {
      const cloned = clone(arguments);
      expect(cloned).not.toBe(arguments);
      expect(cloned).toEqual({ 0: 1, 1: 2, 2: 3 });
      expect(cloned.length).toBe(arguments.length);
    }(1, 2, 3));
  });

  it('Should turn functions into objects (1)', () => {
    const source = () => {};
    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(cloned).toEqual({});
  });

  it('Should turn functions into objects (2)', () => {
    const source = () => {};
    source.foo = 'bar';
    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(cloned).toEqual({ foo: 'bar' });
  });

  it('Should clone custom class objects (1)', () => {
    class Foo {
      // eslint-disable-next-line class-methods-use-this
      get [Symbol.toStringTag]() {
        return 'Foo';
      }
    }

    const source = new Foo();
    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(cloned).toEqual(source);
    expect(cloned instanceof Foo).toBe(true);
  });

  it('Should clone custom class objects (2)', () => {
    class Foo {
      constructor() {
        this.x = 5;
      }

      // eslint-disable-next-line class-methods-use-this
      get [Symbol.toStringTag]() {
        return 'Foo';
      }
    }

    const source = new Foo();
    source.y = 10;

    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(cloned).toEqual(source);
    expect(cloned instanceof Foo).toBe(true);
    expect(cloned.y).toBe(10);
  });

  it('Should clone Map objects (1)', () => {
    const source = new Map();
    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(Array.from(cloned.values())).toEqual([]);
    expect(Array.from(cloned.keys())).toEqual([]);
  });

  it('Should clone Map objects (2)', () => {
    const source = new Map([[1, 2], [3, 4]]);
    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(Array.from(cloned.values())).toEqual([2, 4]);
    expect(Array.from(cloned.keys())).toEqual([1, 3]);
  });

  it('Should clone Map objects (3)', () => {
    const source = new Map([[1, 2], [3, 4]]);
    source.foo = 'bar';
    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(Array.from(cloned.values())).toEqual([2, 4]);
    expect(Array.from(cloned.keys())).toEqual([1, 3]);
    expect(cloned.foo).toBe('bar');
  });

  it('Should clone Map objects (4)', () => {
    const source = new Map([[1, 2], [3, 4]]);
    source.forEach = undefined;
    source.foo = 'bar';

    const cloned = clone(source);
    expect(cloned).not.toBe(source);

    expect(Array.from(cloned.values())).toEqual([]);
    expect(Array.from(cloned.keys())).toEqual([]);
    expect(cloned.foo).toBe('bar');
  });

  it('Should clone Set objects (1)', () => {
    const source = new Set();
    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(Array.from(cloned.values())).toEqual([]);
    expect(Array.from(cloned.keys())).toEqual([]);
  });

  it('Should clone Set objects (2)', () => {
    const source = new Set([1, 2, 3, 4]);
    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(Array.from(cloned.values())).toEqual([1, 2, 3, 4]);
  });

  it('Should clone Set objects (3)', () => {
    const source = new Set([1, 2, 3, 4]);
    source.foo = 'bar';
    const cloned = clone(source);

    expect(cloned).not.toBe(source);
    expect(Array.from(cloned.values())).toEqual([1, 2, 3, 4]);
    expect(cloned.foo).toBe('bar');
  });

  it('Should clone Set objects (4)', () => {
    const source = new Set([1, 2, 3, 4]);
    source.forEach = undefined;
    source.foo = 'bar';

    const cloned = clone(source);
    expect(cloned).not.toBe(source);

    expect(Array.from(cloned.values())).toEqual([]);
    expect(cloned.foo).toBe('bar');
  });
});
