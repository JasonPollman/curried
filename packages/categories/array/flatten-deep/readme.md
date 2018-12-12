# @foldr/flatten-deep

**The `flattenDeep` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/flatten-deep) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/flatten-deep/src/index.js) for details.

Flattens an array to the specified depth (which defaults to `Infinity`).

This will iterate over the provided array pushing all items into a new array.
If the current item is an array, it's contents will also be pushed into the new array.

```js
import flattenDeep from '@foldr/flatten-deep';

flattenDeep([1, 2, 3, 4]);                 // => [1, 2, 3, 4]
flattenDeep([1, [2, [3, 4, [5, 6]], [7]]); // => [1, 2, 3, 4, 5, 6, 7]
flattenDeep([[1], [2], [3], 4]);           // => [1, 2, 3, 4]
```
