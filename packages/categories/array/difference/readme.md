# @foldr/difference

**The `difference` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/difference) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/difference/src/index.js) for details.

Creates a new array of all the values that exist in the first array, but not
any of the other arrays provided.

```js
import difference from '@foldr/difference';

difference([1, 2, 3], [2, 3, 4], [3, 4, 5]);
// => [1]

difference([1, 2, 3], [4, 5, 6]);
// => [1, 2, 3]
```
