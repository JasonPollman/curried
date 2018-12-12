# @foldr/chunk

**The `chunk` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/chunk) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/chunk/src/index.js) for details.

Chunks an array into equal parts of size `n`.

If the number of elements in the array doesn't split evenly, the last array in the
returned array will contain the remaining elements.

```js
import chunk from '@foldr/chunk';

chunk([1, 2, 3, 4]);       // => [[1], [2], [3], [4]]
chunk([1, 2, 3, 4], 2);    // => [[1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 3); // => [[1, 2], [3, 4], [5]]
```
