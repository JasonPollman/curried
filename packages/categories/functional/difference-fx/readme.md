# @foldr/difference-fx

**The `differenceFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/difference-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/difference-fx/src/index.js) for details.

**Functional, autocurried version of [difference](#difference).**

Creates a new array of all the values that exist in the first array, but not
any of the other arrays provided.

```js
import differenceFx from '@foldr/difference-fx';

differenceFx([1, 2, 3])([2, 3, 4]);
// => [1]

differenceFx([1, 2, 3])([4, 5, 6]);
// => [1, 2, 3]
```
