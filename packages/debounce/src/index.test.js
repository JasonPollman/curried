import debounce from './';

describe('debounce', () => {
  it('subsequent calls should result in a returned timeout reference', () => {
    const debounced = debounce(() => console.log('hello'), 1000);

    const first = debounced();
    const second = debounced();

    expect(first).toBe(undefined);
    expect(typeof second).toBe('object');
  });
});
