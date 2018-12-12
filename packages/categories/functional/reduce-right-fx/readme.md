# @foldr/reduce-right-fx

**The `reduceRightFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/reduce-right-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/reduce-right-fx/src/index.js) for details.

**Functional, autocurried version of [reduceRight](#reduce-right).**

```js
import reduceRightFx from '@foldr/reduce-right-fx';

function square(acc, x) {
  return acc + x ** 2;
}

reduceRightFx(square, 0)([1, 2, 3]); // => 14
```
