# @foldr/attempt-fx

**The `attemptFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/attempt-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/attempt-fx/src/index.js) for details.

**Functional, autocurried version of [attempt](#attempt).**

Invokes and returns the return value from `fn`. If the call to `fn` throws,
the caught error is returned.

```js
import attemptFx from '@foldr/attempt-fx';

function assertIsPositive() {
   if (x < 0) throw new Error('x must be a positive number');
   return x;
}

// Call was okay.
const attemptFx([1])(assertIsPositive); // => 1;

// Call threw.
const attemptFx([-1], assertIsPositive); => Error('x must be a positive number');
```
