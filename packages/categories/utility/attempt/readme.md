# @foldr/attempt

**The `attempt` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/attempt) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/attempt/src/index.js) for details.

*Attempts* to invoke `fn`.

Invokes and returns the return value from `fn`. If the call to `fn` throws,
either the `fallback` value (if provided) or the caught error is returned.

```js
import attempt from '@foldr/attempt';

function assertIsPositive() {
   if (x < 0) throw new Error('x must be a positive number');
   return x;
}

// Call was okay.
const attempt(assertIsPositive, [1]); // => 1;

// Call threw, but no fallback value was given.
const attempt(assertIsPositive, [-1]); => Error('x must be a positive number');

// Call threw, fallback was returned.
const attempt(assertIsPositive, [-1], 'fallback'); => 'fallback';

// Call threw, don't care about fallback, but don't want an error either.
const attempt(assertIsPositive, [-1], 0); => 0;
```
