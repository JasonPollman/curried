const compact = require('./');

describe('compact', () => {
  it('should remove falsy values from an array', () => {
    expect(compact([0, 'hey', 'there', undefined])).toEqual(['hey', 'there']);
    expect(compact(['', null, 'foo', 'bar'])).toEqual(['foo', 'bar']);
    expect(compact([{}, 'hey', 'there', null])).toEqual([{}, 'hey', 'there']);
    expect(compact([0, 'hey', 'there', undefined])).toEqual(['hey', 'there']);
    expect(compact([true, true, true, true])).toEqual([true, true, true, true]);
    expect(compact([true, true, false, true])).toEqual([true, true, true]);
  });
});
