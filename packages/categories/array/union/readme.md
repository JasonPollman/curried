# @foldr/union

**The `union` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/union) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/union/src/index.js) for details.

Creates a new array containing all of the unique the values from `arrays`.

```js
import union from '@foldr/union';

union([1, 2, 3], [2, 3, 4], [3, 4, 5]);
// => [1, 2, 3, 4, 5]

union([1, 2, 3], [4, 5, 6]);
// => [1, 2, 3, 4, 5, 6]
```
