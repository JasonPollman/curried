# @foldr/slice

**The `slice` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/slice) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/slice/src/index.js) for details.

Slices an array, like Array#slice, except that this version guards against
"bad" input and always returns an Array.

```js
import slice from '@foldr/slice';

slice([1, 2, 3, 4, 5], 2);    // => [3, 4, 5]
slice([1, 2, 3, 4, 5], 0, 2); // => [1, 2]
slice([1, 2, 3, 4, 5], -2);   // => [4, 5]
```
