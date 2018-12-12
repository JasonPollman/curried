# @foldr/cast-array

**The `castArray` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/cast-array) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/cast-array/src/index.js) for details.

Converts the given value to an array.

If `x` is an array, it will be returned, otherwise it
will be "cast" as an array.

```js
import castArray from '@foldr/cast-array';

castArray(0);  // => [0]
castArray({}); // => [{}]

castArray([1, 2, 3]); // => [1, 2, 3]
```
