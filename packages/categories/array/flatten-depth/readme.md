# @foldr/flatten-depth

**The `flattenDepth` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/flatten-depth) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/flatten-depth/src/index.js) for details.

Recursively flattens an array to the specified depth (which defaults to `1`).

This will iterate over the provided array pushing all items into a new array.
If the current item is an array, it's contents will also be pushed into the new array.

```js
import flattenDepth from '@foldr/flatten-depth';

flattenDepth([1, 2, 3, 4]);                    // => [1, 2, 3, 4]
flattenDepth([[1], [2], [3], 4]);              // => [1, 2, 3, 4]

flattenDepth([1, [2, [3, 4, [5, 6]], [7]]);    // => [1, 2, 3, 4, 5, 6, 7]
flattenDepth([1, [2, [3, 4, [5, 6]], [7]], 2); // => [1, 2, [3, 4, [5, 6]], 7]
```
