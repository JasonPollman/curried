/**
 * Exports the `memoize` function.
 * @since 10/28/18
 * @file
 */

const { hasOwnProperty } = Object.prototype;

/**
 * Default cache `delete` implementation.
 * @param {string} key The cache key to delete.
 * @returns {Cache} The current cache object.
 */
function del(key) {
  delete this.data[key];
  return this;
}

/**
 * Default cache `set` implementation.
 * @param {string} key The cache key to set.
 * @param {any} value The value to store as `key` on the cache.
 * @returns {Cache} The current cache object.
 */
function set(key, value) {
  this.data[key] = value;
  return this;
}

/**
 * Default cache `get` implementation.
 * @param {string} key The cache key to get.
 * @returns {any} The value of the cache key `key` or undefined.
 */
function get(key) {
  return this.data[key];
}

/**
 * Default cache `has` implementation.
 * @param {string} key The cache key to assert cache membership of.
 * @returns {boolean} True if the cache has the key, false otherwise.
 */
function has(key) {
  return hasOwnProperty.call(this.data, key);
}

/**
 * Default cache `clear` implementation.
 * @returns {Cache} The current cache object.
 */
function clear() {
  this.data = {};
  return this;
}

/**
 * Internal implementation of Map for memoize purposes.
 * @returns {Object} A "cache" object.
 */
function DefaultCache() {
  return {
    has,
    set,
    get,
    clear,
    data: {},
    delete: del,
  };
}

/**
 * Creates a memoized version of `fn`.
 *
 * That is, a function that caches calls based on the "signature" of the provided arguments.
 * If the function is invoked multiple times with the same arguments signature, the results
 * from the first invocation is returned.
 *
 * memoize uses the value of `memoize.Cache` to create new Cache objects that store the
 * results calls to `fn`. You can override `memoize.Cache` with anything that implements
 * a `Map` like interface.
 *
 * @param {function} fn The function to memoize.
 * @param {function=} [resolver=memoize.resolver] The cache key resolver. This is a function
 * used to generate the cache key for the current call. This should serialize arguments in
 * a way that is unique for the arguments set. It is passed the input Arguments object.
 * Default value is `JSON.stringify`.
 * @param {function=} [Cache=memoize.Cache] The class used to create the cache
 * for the memoized function. This requires an interface similar to the native Map object.
 * Custom implementations require implementing the following methods: `has`, `get`, and `set`.
 * @returns {function} The memoized version of `fn`.
 * @memberof foldr
 * @since v0.0.0
 * @export
 * @example
 * function fibonacci(n) {
 *   return n <= 1 ? 1 : fibonacci(n - 2) + fibonacci(n - 1);
 * }
 *
 * // Takes about ~12-15 seconds.
 * fibonacci(45); // => 1836311903
 *
 * const fastFibonacci = memoize((n) => {
 *   return n <= 1 ? 1 : fastFibonacci(n - 2) + fastFibonacci(n - 1);
 * });
 *
 * // Takes less than a second (only a few ms, actually).
 * fastFibonacci(45); // => 1836311903
 */
export default function memoize(fn, resolver = JSON.stringify, Cache = memoize.Cache) {
  if (typeof fn !== 'function') {
    throw new Error('Argument for parameter `fn` must be a function.');
  }

  if (typeof resolver !== 'function') {
    throw new Error('Argument for parameter `resolver` must be a function.');
  }

  // eslint-disable-next-line require-jsdoc
  function memoized() {
    const { cache } = memoized;
    const key = resolver(arguments);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const results = fn.apply(this, arguments);
    cache.set(key, results);
    return results;
  }

  memoized.cache = new Cache();
  return memoized;
}

memoize.Cache = DefaultCache;
