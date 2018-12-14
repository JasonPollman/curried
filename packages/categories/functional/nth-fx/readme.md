# @foldr/nth-fx

**The `nthFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/nth-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/nth-fx/src/index.js) for details.

**Functional, autocurried version of [nth](#nth).**

Returns the nth element in an array.

If the value of `n` is greater than zero, the nth element of `array` will be returned.
If `n` is less than zero, the nth value of the array starting from the end of the array
will be returned.

```js
import nthFx from '@foldr/nth-fx';

nthFx(1, [1, 2, 3, 4]);  // => 2
nthFx(-2)([1, 2, 3, 4]); // => 3
nthFx(1)([]);            // => undefined
```
