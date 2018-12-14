# @foldr/to-array

**The `toArray` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/to-array) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/to-array/src/index.js) for details.

Converts `x` to an array.

*If `x` is already an array, a shallow copy of it is returned.*

```js
import toArray from '@foldr/to-array';

toArray({ foo: 'bar', baz: 'quxx }); // => ['bar', 'quxx']
toArray(new Set([1, 2, 3]));         // => [1, 2, 3]
toArray('foobar');                   // => ['f', 'o', 'o', 'b', 'a', 'r']
```
