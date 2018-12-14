# @foldr/intersection-fx

**The `intersectionFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/intersection-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/intersection-fx/src/index.js) for details.

**Functional, autocurried version of [intersection](#intersection).**

Computes the intersection of the two given arrays.

```js
import intersectionFx from '@foldr/intersection-fx';

intersectionFx([1, 2, 3], [2, 3, 4], [3, 4, 5]);
// => [3]

intersectionFx([1, 2, 3], [4, 5, 6]);
// => []

intersectionFx([1, 2, 3]);
// => [1, 2, 3]
```
