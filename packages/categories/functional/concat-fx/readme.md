# @foldr/concat-fx

**The `concatFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/concat-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/concat-fx/src/index.js) for details.

**Functional, autocurried version of [concat](#concat).**

Concatenates all arguments into a single joined array.

```js
import concatFx from '@foldr/concat-fx';

concatFx([1, 2, 3])([4, 5, 6]);   // => [1, 2, 3, 4, 5, 6]
concatFx(null)([4, 5, 6]);        // => [null, 4, 5, 6]
concatFx([4, 5, 6])(undefined);   // => [4, 5, 6, undefined]
```
