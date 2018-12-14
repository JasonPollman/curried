# @foldr/concat

**The `concat` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/concat) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/concat/src/index.js) for details.

Concatenates all arguments into a single joined array.

```js
import concat from '@foldr/concat';

concat([1, 2, 3], [4, 5, 6]);   // => [1, 2, 3, 4, 5, 6]
concat(null, [4, 5, 6]);        // => [null, 4, 5, 6]
concat([4, 5, 6], undefined);   // => [4, 5, 6, undefined]
concat();                       // => []
```
