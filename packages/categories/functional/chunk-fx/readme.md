# @foldr/chunk-fx

**The `chunkFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/chunk-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/chunk-fx/src/index.js) for details.

**Functional, autocurried version of [chunk](#chunk).**

Chunks an array into equal parts of size `n`.

If the number of elements in the array doesn't split evenly, the last array in the returned
set will contain the remaining items.

```js
import chunkFx from '@foldr/chunk-fx';

chunkFx(1)([1, 2, 3, 4]);    // => [[1], [2], [3], [4]]
chunkFx(2)([1, 2, 3, 4]);    // => [[1, 2], [3, 4]]
chunkFx(3, [1, 2, 3, 4, 5]); // => [[1, 2], [3, 4], [5]]
```
