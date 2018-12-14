/**
 * Tests for the `random` function.
 * @since 11/14/18
 * @file
 */

import random from '.';

describe('random', () => {
  it('Should be a function', () => {
    expect(typeof random).toBe('function');
  });

  it('Should return a random number (no input)', () => {
    const x = random();
    expect(x === 0 || x === 1).toBe(true);
  });

  it('Should return a random number (single argument)', () => {
    for (let i = 0; i < 1000; i++) {
      const x = random(5);
      expect(x >= 0 && x <= 5).toBe(true);
      expect(Math.trunc(x) === x).toBe(true);
    }
  });

  it('Should return a random number (single argument)', () => {
    for (let i = 0; i < 1000; i++) {
      const x = random(1, 5);
      expect(x >= 1 && x <= 5).toBe(true);
      expect(Math.trunc(x) === x).toBe(true);
    }
  });

  it('Should return a random number (upper and lower given)', () => {
    for (let i = 0; i < 1000; i++) {
      const x = random(5, 6);
      expect(x >= 5 && x <= 6).toBe(true);
      expect(Math.trunc(x) === x).toBe(true);
    }
  });

  it('Should return a random number (upper and lower given, exponential notation)', () => {
    for (let i = 0; i < 1000; i++) {
      const x = random(1e2, 1e6);
      expect(x >= 1e2 && x <= 1e6).toBe(true);
      expect(Math.trunc(x) === x).toBe(true);
    }
  });

  it('Should return a random number (upper and lower given, float)', () => {
    for (let i = 0; i < 1000; i++) {
      const x = random(5, 6, true);
      expect(x.toString().indexOf('.') > -1).toBe(true);
      expect(x >= 5 && x <= 6).toBe(true);
    }
  });

  it('Should return a random number (upper and lower given, exact, float, 1)', () => {
    const x = random(5, 5, true);
    expect(x.toString().indexOf('.') === -1).toBe(true);
    expect(x >= 5 && x <= 5).toBe(true);
  });

  it('Should return a random number (upper and lower given, exact, float, 2)', () => {
    const x = random(Infinity, Infinity, true);
    expect(x.toString().indexOf('.') > -1).toBe(true);
    expect(x >= -Number.MAX_VALUE && x <= Number.MAX_VALUE).toBe(true);
  });

  it('Should return a random number (upper and lower given, exact, float, 3)', () => {
    const x = random(Infinity, Infinity);
    expect(x >= -Number.MAX_VALUE && x <= Number.MAX_VALUE).toBe(true);
    expect(Math.trunc(x) === x).toBe(true);
  });

  it('Should return a random number (upper and lower given, exact)', () => {
    const x = random(5, 5, false);
    expect(x === 5).toBe(true);
    expect(Math.trunc(x) === x).toBe(true);
  });

  it('Should return a random number (upper and lower given, exact)', () => {
    const x = random(5, 5);
    expect(x === 5).toBe(true);
    expect(Math.trunc(x) === x).toBe(true);
  });
});
