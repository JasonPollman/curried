# @foldr/tail

**The `tail` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/tail) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/tail/src/index.js) for details.

Returns a new array containing all elements of the provided array except the first.

```js
import tail from '@foldr/tail';

tail([1, 2, 3, 4]); // => [2, 3, 4]
tail([1]);          // => []
tail([]);           // => []
```
