# @foldr/intersection

**The `intersection` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/intersection) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/intersection/src/index.js) for details.

Creates a new array of all the values that exist in *all* of the given arrays.

```js
import intersection from '@foldr/intersection';

intersection([1, 2, 3], [2, 3, 4], [3, 4, 5]);
// => [3]

intersection([1, 2, 3], [4, 5, 6]);
// => []

intersection([1, 2, 3]);
// => [1, 2, 3]
```
