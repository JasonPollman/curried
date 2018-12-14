# @foldr/random

**The `random` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/random) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/random/src/index.js) for details.

Gets a random number in the given range (inclusive).

If no `upper` value is given the random number returned will be
in the range `0` to `lower`.

If `floating` is explicitly passed, the returned value will be
a floating point number if `floating` is truthy and an integer
it `floating` is falsy.

If `floating` isn't passed, then if either `upper` or `lower`
are floats `floating` will be `true`.

If either `lower` or `upper` are `Infinity`, they will be clamped
to `Number.MIN_VALUE` or `Number.MAX_VALUE` respectively.

```js
import random from '@foldr/random';

random(0, 10);       // => Random number between 0..10, inclusive
random(5, 10);       // => Random number between 5..10, inclusive
random(5);           // => Random number between 0..5, inclusive
random(5.01, 5.99);  // => Random number between 5.01..5.99, inclusive
random();            // => Either 0 or 1.

toFinite({ valueOf() { return 5; } }) // => 5
```
