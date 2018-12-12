# @foldr/flatten-deep-fx

**The `flattenDeepFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/flatten-deep-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/flatten-deep-fx/src/index.js) for details.

**Functional, autocurried version of [flattenDeep](#flatten-deep).**

Flattens an array to the specified depth (which defaults to `Infinity`).

This will iterate over the provided array pushing all items into a new array.
If the current item is an array, it's contents will also be pushed into the new array.

```js
import flattenDeepFx from '@foldr/flatten-deep-fx';

flattenDeepFx(1)([1, 2, 3, 4]);                  // => [1, 2, 3, 4]
flattenDeepFx(10)([1, [2, [3, 4, [5, 6]], [7]]); // => [1, 2, 3, 4, 5, 6, 7]
flattenDeepFx(Infinity)([[1], [2], [3], 4]);     // => [1, 2, 3, 4]
```
