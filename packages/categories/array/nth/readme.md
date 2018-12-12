# @foldr/nth

**The `nth` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/nth) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/nth/src/index.js) for details.

Returns the nth element in an array.

If the value of `n` is greater than zero, the nth element of `array` will be returned.
If `n` is less than zero, the nth value of the array starting from the end of the array
will be returned.

```js
import nth from '@foldr/nth';

nth([1, 2, 3, 4], 1);  // => 2
nth([1, 2, 3, 4], -2); // => 3
nth([], 1);            // => undefined
```
