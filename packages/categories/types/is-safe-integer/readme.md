# @foldr/is-safe-integer

**The `isSafeInteger` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-safe-integer) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-safe-integer/src/index.js) for details.

Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
double precision number which isn't the result of a rounded unsafe integer.

```js
import isSafeInteger from '@foldr/is-safe-integer';

isSafeInterger(0);        // => true
isSafeInterger(10);       // => true
isSafeInterger(NaN);      // => false
isSafeInterger(1.1);      // => false
isSafeInterger(Infinity); // => false
```
