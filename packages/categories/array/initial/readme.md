# @foldr/initial

**The `initial` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/initial) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/initial/src/index.js) for details.

Returns a new array containing all elements of the provided array except the last.

```js
import initial from '@foldr/initial';

initial([1, 2, 3, 4]); // => [1, 2, 3]
initial([1]);          // => []
initial([]);           // => []
```
