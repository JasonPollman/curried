# @foldr/union-fx

**The `unionFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/union-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/union-fx/src/index.js) for details.

**Functional, autocurried version of [union](#union).**

Creates a new array containing all of the unique the values from arrays `a` and `b`.

```js
import unionFx from '@foldr/union-fx';

unionFx([1, 2, 3])([2, 3, 4]);
// => [1, 2, 3, 4]

unionFx([1, 2, 3])([4, 5, 6]);
// => [1, 2, 3, 4, 5, 6]
```
