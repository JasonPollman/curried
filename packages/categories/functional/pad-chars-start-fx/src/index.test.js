import padStartFx from '.';

describe('padStartFx', () => {
  it('Should be a function', () => {
    expect(typeof padStartFx).toBe('function');
  });

  it('Should left pad a string (empty string)', () => {
    expect(padStartFx(' ')(1)('')).toBe(' ');
    expect(padStartFx(' ')(1)(undefined)).toBe(' ');
    expect(padStartFx(' ')(1)(null)).toBe(' ');
  });

  it('Should padStartFx a string', () => {
    expect(padStartFx(' ')(1)('foo')).toBe('foo');
    expect(padStartFx(' ')(2)('foo')).toBe('foo');
    expect(padStartFx(' ')(3)('foo')).toBe('foo');
    expect(padStartFx(' ')(4)('foo')).toBe(' foo');
    expect(padStartFx(' ')(5)('foo')).toBe('  foo');
    expect(padStartFx(' ')(6)('foo')).toBe('   foo');
    expect(padStartFx(' ')(7)('foo')).toBe('    foo');
    expect(padStartFx(' ')(8)('foo')).toBe('     foo');
    expect(padStartFx(' ')(9)('foo')).toBe('      foo');

    expect(padStartFx(' ')(1, 'quxx')).toBe('quxx');
    expect(padStartFx(' ')(2, 'quxx')).toBe('quxx');
    expect(padStartFx(' ')(3, 'quxx')).toBe('quxx');
    expect(padStartFx(' ')(4, 'quxx')).toBe('quxx');
    expect(padStartFx(' ')(5, 'quxx')).toBe(' quxx');
    expect(padStartFx(' ')(6, 'quxx')).toBe('  quxx');
    expect(padStartFx(' ')(7, 'quxx')).toBe('   quxx');
    expect(padStartFx(' ')(8, 'quxx')).toBe('    quxx');
    expect(padStartFx(' ')(9, 'quxx')).toBe('     quxx');
    expect(padStartFx(' ')(10)('quxx')).toBe('      quxx');
  });

  it('Should padStartFx a string (edge cases for length)', () => {
    expect(padStartFx(' ')(null)('foo')).toBe('foo');
    expect(padStartFx(' ')(undefined)('foo')).toBe('foo');
    expect(padStartFx(' ')(NaN)('foo')).toBe('foo');
    expect(padStartFx(' ')({})('foo')).toBe('foo');
    expect(padStartFx(' ')([])('foo')).toBe('foo');
    expect(padStartFx(' ')('foobar')('foo')).toBe('foo');
  });
});
