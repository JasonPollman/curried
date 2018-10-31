/**
 * Tests for the `get` function.
 * @since 10/28/18
 * @file
 */

import get from '.';

describe('get', () => {
  it('Should be a function', () => {
    expect(typeof get).toBe('function');
  });

  it('Should get a property by path', () => {
    expect(get({ foo: 'bar' }, 'foo')).toBe('bar');
  });

  it('Should get a property by path (depth 2)', () => {
    expect(get({ foo: { bar: 5 } }, 'foo.bar')).toBe(5);
  });

  it('Should get a property by path (depth 3)', () => {
    expect(get({ foo: { bar: { baz: 5 } } }, 'foo.bar.baz')).toBe(5);
  });

  it('Should get a property by path (depth 4)', () => {
    expect(get({ foo: { bar: { baz: [0, 1] } } }, 'foo.bar.baz[1]')).toBe(1);
    expect(get({ foo: { bar: { baz: ['0', '1'] } } }, 'foo.bar.baz[1]')).toBe('1');
  });

  it('Should get a property by path and fallback if the property isn\'t found', () => {
    expect(get({ foo: 'bar' }, 'quxx', 'fallback')).toBe('fallback');
  });

  it('Should return `fallback` if path is `null`', () => {
    expect(get({ foo: 'bar' }, null)).toBe(undefined);
    expect(get({ foo: 'bar' }, null, 'fallback')).toBe('fallback');
  });

  it('Should return `fallback` if path is an empty string', () => {
    expect(get({ foo: 'bar' }, '')).toBe(undefined);
    expect(get({ foo: 'bar' }, '', 'fallback')).toBe('fallback');
  });

  it('Should return `fallback` if path is `undefined`', () => {
    expect(get({ foo: 'bar' }, undefined)).toBe(undefined);
    expect(get({ foo: 'bar' }, undefined, 'fallback')).toBe('fallback');
  });

  it('Should return `fallback` if `thing` isn\'t a string or object', () => {
    expect(get(5, 'foo')).toBe(undefined);
    expect(get(5, 'foo', 'fallback')).toBe('fallback');
  });

  it('Should work for strings', () => {
    expect(get('foo', '0')).toBe('f');
    expect(get('foo', 0)).toBe('f');
    expect(get('foo', 'foo')).toBe(undefined);
    expect(get('foo', '0.1')).toBe(undefined);
    expect(get('foo', '1')).toBe('o');
    expect(get('foo', 'foo', 'fallback')).toBe('fallback');
  });

  it('Should work for functions', () => {
    expect(get(() => {}, '0')).toBe(undefined);
    expect(typeof get(() => {}, 'toString')).toBe('function');
  });

  it('Should work for arrays', () => {
    expect(get([0, 1], '1')).toBe(1);
    expect(get([0, [0, 1]], '1[1]')).toBe(1);
    expect(get([0, [0, 1]], '1.1')).toBe(1);
    expect(get([0, [0, 1]], '1.1.2')).toBe(undefined);
    expect(get([0, [0, 1]], '1.1.2', 'foo')).toBe('foo');
    expect(get([0, [0, [0, 1, { foo: 'bar' }]]], '1.1.2')).toEqual({ foo: 'bar' });
    expect(get([0, [0, [0, 1, { foo: 'bar' }]]], '1[1].2')).toEqual({ foo: 'bar' });
    expect(get([0, [0, [0, 1, { foo: 'bar' }]]], '1[1][2]')).toEqual({ foo: 'bar' });
    expect(get([0, [0, [0, 1, { foo: 'bar' }]]], '[1][1][2]')).toEqual({ foo: 'bar' });
  });
});
