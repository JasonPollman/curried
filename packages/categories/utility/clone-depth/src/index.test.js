import cloneDepth from '.';

describe('cloneDepth', () => {
  describe('Shallow cloning (default depth)', () => {
    it('Should be a function', () => {
      expect(typeof cloneDepth).toBe('function');
    });

    it('Should return literal values', () => {
      expect(cloneDepth()).toBe(undefined);
      expect(cloneDepth(null)).toBe(null);
      expect(cloneDepth(1)).toBe(1);
      expect(cloneDepth(0)).toBe(0);
      expect(cloneDepth(-0)).toBe(-0);
      expect(cloneDepth(-1)).toBe(-1);
      expect(cloneDepth('foo')).toBe('foo');
      expect(cloneDepth('')).toBe('');
      expect(cloneDepth(Infinity)).toBe(Infinity);
      expect(cloneDepth(-Infinity)).toBe(-Infinity);
      expect(cloneDepth(NaN)).toBe(NaN);
    });

    it('Should clone plain objects', () => {
      const object = { foo: 'bar' };
      const cloned = cloneDepth(object);

      expect(cloned).toEqual(object);
      expect(cloned).not.toBe(object);
    });

    it('Should default to cloning to depth 0 (1)', () => {
      const object = { foo: 'bar', baz: {} };
      const cloned = cloneDepth(object, -1);

      expect(cloned).toEqual(object);
      expect(cloned.baz).toBe(object.baz);
      expect(cloned).not.toBe(object);
    });

    it('Should default to cloning to depth 0 (2)', () => {
      const object = { foo: 'bar', baz: {} };
      const cloned = cloneDepth(object, '-1');

      expect(cloned).toEqual(object);
      expect(cloned.baz).toBe(object.baz);
      expect(cloned).not.toBe(object);
    });

    it('Should handle if the user overwrites an object\'s `constructor` property', () => {
      const object = { foo: 'bar', constructor: 'constructor' };
      const cloned = cloneDepth(object);

      expect(cloned).toEqual(object);
      expect(cloned).not.toBe(object);
      expect(cloned).toEqual({ foo: 'bar', constructor: 'constructor' });
      expect(cloned instanceof Object).toBe(true);
    });

    it('Should handle if the user overwrites an object\'s `constructor` property (2)', () => {
      const object = new Number(7); // eslint-disable-line no-new-wrappers
      object.constructor = 'constructor';
      const cloned = cloneDepth(object);

      expect(cloned).not.toBe(object);
      expect(cloned !== object).toBe(true);

      const copy = new Number(7); // eslint-disable-line no-new-wrappers
      copy.constructor = 'constructor';

      expect(cloned).toEqual(copy);
      expect(cloned instanceof Object).toBe(true);
    });

    it('Should handle if the user overwrites an object\'s `constructor` property (3)', () => {
      const object = new String('foo'); // eslint-disable-line no-new-wrappers
      object.constructor = 'constructor';
      const cloned = cloneDepth(object);

      expect(cloned).not.toBe(object);
      expect(cloned !== object).toBe(true);

      const copy = new String('foo'); // eslint-disable-line no-new-wrappers

      expect(cloned).toEqual(copy);
      expect(cloned instanceof Object).toBe(true);
    });

    it('Should clone Arrays', () => {
      const array = [1, 2, 3];
      const cloned = cloneDepth(array);

      expect(cloned).toEqual(array);
      expect(cloned.length).toBe(array.length);
      expect(cloned).not.toBe(array);
    });

    it('Should clone Arrays (retain own enumerable properties)', () => {
      const array = [1, 2, 3];
      array.foo = 'bar';

      const cloned = cloneDepth(array);

      expect(cloned).toEqual(array);
      expect(cloned.length).toBe(array.length);
      expect(cloned.foo).toBe(array.foo);
      expect(cloned.foo).toBe('bar');
      expect(cloned).not.toBe(array);
    });

    it('Should clone Arrays (retain own enumerable properties, 2)', () => {
      const array = /\w+/.exec('foobar');
      const cloned = cloneDepth(array);

      expect(cloned).toEqual(array);
      expect(cloned.length).toBe(array.length);
      expect(cloned.input).toBe('foobar');
      expect(cloned.index).toBe(0);
      expect(cloned).not.toBe(array);
    });

    it('Should clone RegExp objects', () => {
      const regexp = /foo/gi;
      const cloned = cloneDepth(regexp);

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
      const cloned = cloneDepth(symbol);

      expect(cloned).not.toBe(symbol);
      expect(cloned.toString()).toBe(symbol.toString());
    });

    it('Should clone Symbol objects (2)', () => {
      const symbol = Symbol(); // eslint-disable-line symbol-description
      const cloned = cloneDepth(symbol);

      expect(cloned).not.toBe(symbol);
      expect(cloned.toString()).toBe(symbol.toString());
    });

    it('Should clone Date objects (1)', () => {
      const date = new Date(-1);
      const cloned = cloneDepth(date);

      expect(cloned).not.toBe(date);
      expect(cloned.toString()).toBe(date.toString());
      expect(cloned.getTime()).toBe(date.getTime());
    });

    it('Should clone Date objects (2)', () => {
      const date = new Date(100);
      const cloned = cloneDepth(date);

      expect(cloned).not.toBe(date);
      expect(cloned.toString()).toBe(date.toString());
      expect(cloned.getTime()).toBe(date.getTime());
    });

    it('Should clone Number objects (1)', () => {
      const source = new Number(); // eslint-disable-line no-new-wrappers
      const cloned = cloneDepth(source);

      expect(cloned).not.toBe(source);
      expect(cloned.toString()).toBe(source.toString());
      expect(cloned.valueOf()).toBe(source.valueOf());
      expect(cloned.valueOf()).toBe(0);
    });

    it('Should clone Number objects (2)', () => {
      const source = new Number(7); // eslint-disable-line no-new-wrappers
      const cloned = cloneDepth(source);

      expect(cloned).not.toBe(source);
      expect(cloned.toString()).toBe(source.toString());
      expect(cloned.valueOf()).toBe(source.valueOf());
      expect(cloned.valueOf()).toBe(7);
    });

    it('Should clone Number objects (3)', () => {
      const source = new Number(7); // eslint-disable-line no-new-wrappers
      source.foo = 'bar';

      const cloned = cloneDepth(source);

      expect(cloned).not.toBe(source);
      expect(cloned.toString()).toBe(source.toString());
      expect(cloned.valueOf()).toBe(source.valueOf());
      expect(cloned.valueOf()).toBe(7);
      expect(cloned.foo).toBe('bar');
    });

    it('Should clone String objects (1)', () => {
      const source = new String(); // eslint-disable-line no-new-wrappers
      const cloned = cloneDepth(source);

      expect(cloned).not.toBe(source);
      expect(cloned.toString()).toBe(source.toString());
      expect(cloned.valueOf()).toBe(source.valueOf());
      expect(cloned.valueOf()).toBe('');
    });

    it('Should clone String objects (2)', () => {
      const source = new String('foo'); // eslint-disable-line no-new-wrappers
      const cloned = cloneDepth(source);

      expect(cloned).not.toBe(source);
      expect(cloned.toString()).toBe(source.toString());
      expect(cloned.valueOf()).toBe(source.valueOf());
      expect(cloned.valueOf()).toBe('foo');
    });

    it('Should clone Boolean objects (1)', () => {
      const source = new Boolean(); // eslint-disable-line no-new-wrappers
      const cloned = cloneDepth(source);

      expect(cloned).not.toBe(source);
      expect(cloned.toString()).toBe(source.toString());
      expect(cloned.valueOf()).toBe(source.valueOf());
      expect(cloned.valueOf()).toBe(false);
    });

    it('Should clone Boolean objects (2)', () => {
      const source = new Boolean(true); // eslint-disable-line no-new-wrappers
      const cloned = cloneDepth(source);

      expect(cloned).not.toBe(source);
      expect(cloned.toString()).toBe(source.toString());
      expect(cloned.valueOf()).toBe(source.valueOf());
      expect(cloned.valueOf()).toBe(true);
    });

    it('Should clone Boolean objects (3)', () => {
      const source = new Boolean(false); // eslint-disable-line no-new-wrappers
      source.foo = 'bar';

      const cloned = cloneDepth(source);

      expect(cloned).not.toBe(source);
      expect(cloned.toString()).toBe(source.toString());
      expect(cloned.valueOf()).toBe(source.valueOf());
      expect(cloned.valueOf()).toBe(false);
      expect(cloned.foo).toBe('bar');
    });

    it('Should clone Arguments objects', () => {
      (function testit() {
        const cloned = cloneDepth(arguments);
        expect(cloned).not.toBe(arguments);
        expect(cloned).toEqual({ 0: 1, 1: 2, 2: 3 });
        expect(cloned.length).toBe(arguments.length);
      }(1, 2, 3));
    });

    it('Should turn functions into objects (1)', () => {
      const source = () => {};
      const cloned = cloneDepth(source);

      expect(cloned).not.toBe(source);
      expect(cloned).toEqual({});
    });

    it('Should turn functions into objects (2)', () => {
      const source = () => {};
      source.foo = 'bar';
      const cloned = cloneDepth(source);

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
      const cloned = cloneDepth(source);

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

      const cloned = cloneDepth(source);

      expect(cloned).not.toBe(source);
      expect(cloned).toEqual(source);
      expect(cloned instanceof Foo).toBe(true);
      expect(cloned.y).toBe(10);
    });

    it('Should clone Map objects (1)', () => {
      const source = new Map();
      const cloned = cloneDepth(source);

      expect(cloned).not.toBe(source);
      expect(Array.from(cloned.values())).toEqual([]);
      expect(Array.from(cloned.keys())).toEqual([]);
    });

    it('Should clone Map objects (2)', () => {
      const source = new Map([[1, 2], [3, 4]]);
      const cloned = cloneDepth(source);

      expect(cloned).not.toBe(source);
      expect(Array.from(cloned.values())).toEqual([2, 4]);
      expect(Array.from(cloned.keys())).toEqual([1, 3]);
    });

    it('Should clone Map objects (3)', () => {
      const source = new Map([[1, 2], [3, 4]]);
      source.foo = 'bar';
      const cloned = cloneDepth(source);

      expect(cloned).not.toBe(source);
      expect(Array.from(cloned.values())).toEqual([2, 4]);
      expect(Array.from(cloned.keys())).toEqual([1, 3]);
      expect(cloned.foo).toBe('bar');
    });

    it('Should clone Map objects (4)', () => {
      const source = new Map([[1, 2], [3, 4]]);
      source.forEach = undefined;
      source.foo = 'bar';

      const cloned = cloneDepth(source);
      expect(cloned).not.toBe(source);

      expect(Array.from(cloned.values())).toEqual([]);
      expect(Array.from(cloned.keys())).toEqual([]);
      expect(cloned.foo).toBe('bar');
    });

    it('Should clone Set objects (1)', () => {
      const source = new Set();
      const cloned = cloneDepth(source);

      expect(cloned).not.toBe(source);
      expect(Array.from(cloned.values())).toEqual([]);
      expect(Array.from(cloned.keys())).toEqual([]);
    });

    it('Should clone Set objects (2)', () => {
      const source = new Set([1, 2, 3, 4]);
      const cloned = cloneDepth(source);

      expect(cloned).not.toBe(source);
      expect(Array.from(cloned.values())).toEqual([1, 2, 3, 4]);
    });

    it('Should clone Set objects (3)', () => {
      const source = new Set([1, 2, 3, 4]);
      source.foo = 'bar';
      const cloned = cloneDepth(source);

      expect(cloned).not.toBe(source);
      expect(Array.from(cloned.values())).toEqual([1, 2, 3, 4]);
      expect(cloned.foo).toBe('bar');
    });

    it('Should clone Set objects (4)', () => {
      const source = new Set([1, 2, 3, 4]);
      source.forEach = undefined;
      source.foo = 'bar';

      const cloned = cloneDepth(source);
      expect(cloned).not.toBe(source);

      expect(Array.from(cloned.values())).toEqual([]);
      expect(cloned.foo).toBe('bar');
    });
  });

  describe('Deep cloning (depth > 0)', () => {
    it('Should clone to the specified depth (0)', () => {
      const object = {
        foo: 'bar',
        baz: {
          quxx: 'foo',
          qwerty: {
            nope: {},
          },
        },
      };

      const cloned = cloneDepth(object, '0');

      expect(cloned).toEqual(object);
      expect(cloned.baz).toBe(object.baz);
      expect(cloned.baz.qwerty).toBe(object.baz.qwerty);
      expect(cloned.baz.qwerty.nope).toBe(object.baz.qwerty.nope);
      expect(cloned).not.toBe(object);
    });

    it('Should clone to the specified depth (1)', () => {
      const object = {
        foo: 'bar',
        baz: {
          quxx: 'foo',
          qwerty: {
            nope: {},
          },
        },
      };

      const cloned = cloneDepth(object, 1);

      expect(cloned).toEqual(object);
      expect(cloned.baz).not.toBe(object.baz);
      expect(cloned.baz.qwerty).toBe(object.baz.qwerty);
      expect(cloned.baz.qwerty.nope).toBe(object.baz.qwerty.nope);
      expect(cloned).not.toBe(object);
    });

    it('Should clone to the specified depth (1, circular)', () => {
      const object = {};
      object.x = object;

      const cloned = cloneDepth(object, 1);

      expect(cloned).toEqual(object);
      expect(cloned.x).toBe(cloned.x);
      expect(cloned.x).not.toBe(object.x);
      expect(cloned.x).toEqual(object.x);
      expect(cloned).not.toBe(object);
    });

    it('Should clone to the specified (depth 2, circular)', () => {
      const object = { foo: {} };
      object.foo.x = object;

      const cloned = cloneDepth(object, 2);

      expect(cloned).toEqual(object);
      expect(cloned.foo).not.toBe(object);
      expect(cloned.foo.x).not.toBe(object);
      expect(cloned.foo.x).toBe(cloned);
      expect(cloned).not.toBe(object);
    });

    it('Should clone to the specified (depth 1, circular, Array)', () => {
      const object = [];
      object.push(object);
      object[0][1] = object;
      object.x = object;

      const cloned = cloneDepth(object, 1);

      expect(cloned).toEqual(object);
      expect(cloned[0]).toBe(cloned);
      expect(cloned[0]).not.toBe(object);
      expect(cloned[1]).toBe(cloned);
      expect(cloned[1]).not.toBe(object);
      expect(cloned.x).not.toBe(object.x);
      expect(cloned.x).toBe(cloned.x);
      expect(cloned).not.toBe(object);
    });

    it('Should clone to the specified depth (Infinity)', () => {
      const object = {
        foo: 'bar',
        baz: {
          quxx: 'foo',
          qwerty: {
            nope: {},
          },
        },
      };

      const cloned = cloneDepth(object, Infinity);

      expect(cloned).toEqual(object);
      expect(cloned.baz).not.toBe(object.baz);
      expect(cloned.baz.qwerty).not.toBe(object.baz.qwerty);
      expect(cloned.baz.qwerty.nope).not.toBe(object.baz.qwerty.nope);
      expect(cloned).not.toBe(object);
    });

    it('Should clone to the specified depth (Infinity, Circular)', () => {
      const object = {
        foo: 'bar',
        baz: {
          quxx: 'foo',
          qwerty: {
            nope: {},
          },
        },
      };

      object.baz.qwerty.baz = object.baz;

      const cloned = cloneDepth(object, Infinity);

      expect(cloned).toEqual(object);
      expect(cloned.baz).not.toBe(object.baz);
      expect(cloned.baz.qwerty).not.toBe(object.baz.qwerty);
      expect(cloned.baz.qwerty.nope).not.toBe(object.baz.qwerty.nope);
      expect(cloned).not.toBe(object);
    });

    it('Should clone to the specified depth (NaN)', () => {
      const object = {
        foo: 'bar',
        baz: {
          quxx: 'foo',
          qwerty: {
            nope: {},
          },
        },
      };

      const cloned = cloneDepth(object, NaN);

      expect(cloned).toEqual(object);
      expect(cloned.baz).toBe(object.baz);
      expect(cloned.baz.qwerty).toBe(object.baz.qwerty);
      expect(cloned.baz.qwerty.nope).toBe(object.baz.qwerty.nope);
      expect(cloned).not.toBe(object);
    });

    it('Should clone to the specified depth (array, depth 100)', () => {
      const map = new Map([
        ['a', 1],
        ['b', 2],
      ]);

      map.props = {
        x: 1,
        y: 2,
      };

      const object = [
        map,
        {
          foo: {
            bar: {
              baz: 10,
            },
          },
        },
        [
          { first: true },
          { second: true },
        ],
      ];

      const cloned = cloneDepth(object, 100);

      expect(cloned).not.toBe(object);
      expect(cloned).toEqual(object);

      expect(cloned[0]).not.toBe(object[0]);
      expect(cloned[0]).not.toBe(map);
      expect(cloned[0]).toEqual(map);

      expect(cloned[0].props).not.toBe(map.props);
      expect(cloned[0].props).not.toBe(object[0].props);
      expect(cloned[0].props).toEqual({
        x: 1,
        y: 2,
      });

      expect(cloned[1]).not.toBe(object[1]);
      expect(cloned[1].foo).not.toBe(object[1].foo);
      expect(cloned[1].foo.bar).not.toBe(object[1].foo.bar);
      expect(cloned[1].foo.bar.baz).toBe(object[1].foo.bar.baz);

      expect(cloned[2][0]).not.toBe(object[2][0]);
      expect(cloned[2][1]).not.toBe(object[2][1]);
    });

    it('Should clone to the specified depth (array, depth 2)', () => {
      const map = new Map([
        ['a', 1],
        ['b', 2],
      ]);

      map.props = {
        x: 1,
        y: 2,
      };

      const object = [
        map,
        {
          foo: {
            bar: {
              baz: 10,
            },
          },
        },
        [
          { first: true },
          { second: true },
        ],
      ];

      const cloned = cloneDepth(object, 2);

      expect(cloned).not.toBe(object);
      expect(cloned).toEqual(object);

      expect(cloned[0]).not.toBe(object[0]);
      expect(cloned[0]).not.toBe(map);
      expect(cloned[0]).toEqual(map);

      expect(cloned[0].props).not.toBe(map.props);
      expect(cloned[0].props).not.toBe(object[0].props);
      expect(cloned[0].props).toEqual({
        x: 1,
        y: 2,
      });

      expect(cloned[1]).not.toBe(object[1]);
      expect(cloned[1].foo).not.toBe(object[1].foo);
      expect(cloned[1].foo.bar).toBe(object[1].foo.bar);
      expect(cloned[1].foo.bar.baz).toBe(object[1].foo.bar.baz);

      expect(cloned[2][0]).not.toBe(object[2][0]);
      expect(cloned[2][1]).not.toBe(object[2][1]);
    });
  });
});
