# @foldr/memoize

**The `memoize` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/memoize) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/memoize/src/index.js) for details.

Creates a [memoized](https://en.wikipedia.org/wiki/Memoization) version of `fn`.

That is, a function that caches calls based on the "signature" of the provided arguments.
If the function is invoked multiple times with the same arguments signature, the results
from the first invocation is returned.

`memoize` uses the value of `memoize.Cache` to create new cache objects that store the
results calls to `fn`. You can override `memoize.Cache` with anything that implements
a `Map` like interface.

```js
import memoize from '@foldr/memoize';

function fibonacci(n) {
  return n <= 1 ? 1 : fibonacci(n - 2) + fibonacci(n - 1);
}

// Takes about ~12-15 seconds.
fibonacci(45); // => 1836311903

const fastFibonacci = memoize((n) => {
  return n <= 1 ? 1 : fastFibonacci(n - 2) + fastFibonacci(n - 1);
});

// Takes less than a second (only a few ms, actually).
fastFibonacci(45); // => 1836311903
```
