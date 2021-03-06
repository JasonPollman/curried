import stubObject from '.';

describe('stubObject', () => {
  it('Should be a function', () => {
    expect(typeof stubObject).toBe('function');
  });

  it('Should always return false', () => {
    expect(stubObject()).toEqual({});
    expect(stubObject(1)).toEqual({});
    expect(stubObject(0)).toEqual({});
  });
});
