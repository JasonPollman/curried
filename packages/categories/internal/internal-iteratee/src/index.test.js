/**
 * Tests for the `internal-iteratee` file.
 * @since 10/23/18
 * @file
 */

import getIteratee from '.';

describe('internal-env', () => {
  it('Should be a function', () => {
    expect(typeof getIteratee).toBe('function');
  });

  it('Should return `identity` if no value is given', () => {
    expect(getIteratee()(5)).toEqual(5);
  });

  it('Should return `identity` if a non-standard object is given', () => {
    expect(getIteratee(new Date())(5)).toEqual(5);
  });

  it('Should return the given function if provided a function', () => {
    const fn = () => {};
    expect(getIteratee(fn)).toEqual(fn);
  });

  it('Should return the correct iteratee for strings', () => {
    expect(getIteratee('name')({ name: 'test' })).toEqual('test');
    expect(getIteratee('name')({ foo: 'test' })).toEqual(undefined);
    expect(getIteratee('name')()).toEqual(undefined);
  });

  it('Should return the correct iteratee for numbers', () => {
    expect(getIteratee(0)({ 0: 'test' })).toEqual('test');
    expect(getIteratee(1)({ 1: 'test' })).toEqual('test');
    expect(getIteratee(0)({ 1: 'test' })).toEqual(undefined);
    expect(getIteratee(10)()).toEqual(undefined);
  });

  it('Should return the correct iteratee for arrays', () => {
    expect(getIteratee([])()).toEqual(true);
    expect(getIteratee([])({ name: 'test' })).toEqual(true);
    expect(getIteratee(['name', 'test'])({ name: 'test' })).toEqual(true);
    expect(getIteratee(['name', 'wrong'])({ name: 'test' })).toEqual(false);
  });

  it('Should return the correct iteratee for arrays (NaN)', () => {
    expect(getIteratee(['name', NaN])({ name: NaN })).toEqual(true);
  });

  it('Should return the correct iteratee for objects', () => {
    expect(getIteratee({})()).toEqual(true);
    expect(getIteratee({})({ name: 'test' })).toEqual(true);
    expect(getIteratee({ name: 'test' })({})).toEqual(false);
    expect(getIteratee({ name: 'test' })()).toEqual(false);
    expect(getIteratee({ foo: 'bar' })({ name: 'test' })).toEqual(false);
    expect(getIteratee({ name: 'test' })({ foo: 'bar', name: 'test' })).toEqual(true);
    expect(getIteratee({ foo: 'bar', name: 'test' })({ name: 'test' })).toEqual(false);
    expect(getIteratee({ foo: 'bar', name: 'test' })({ foo: 'bar', name: 'test' })).toEqual(true);
    expect(getIteratee({ foo: 'bar', name: 'test' })({ foo: 'baz', name: 'test' })).toEqual(false);
  });
});
