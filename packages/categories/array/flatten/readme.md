# @foldr/flatten

**The `flatten` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/flatten) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/flatten/src/index.js) for details.

Flattens an array *one* level deep.

This will iterate over the provided array pushing all items into a new array.
If the current item is an array, it's contents will also be pushed into the new array.

```js
import flatten from '@foldr/flatten';

flatten([1, 2, 3, 4]);       // => [1, 2, 3, 4]
flatten([1, [2, 3], 4]);     // => [1, 2, 3, 4]
flatten([[1], [2], [3], 4]); // => [1, 2, 3, 4]
```
