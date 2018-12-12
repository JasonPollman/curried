# @foldr/reduce-fx

**The `reduceFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/reduce-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/reduce-fx/src/index.js) for details.

**Functional, autocurried version of [reduce](#reduce).**

```js
import reduceFx from '@foldr/reduce-fx';

function square(acc, x) {
  return acc + x ** 2;
}

reduceFx(square, 0)([1, 2, 3]); // => 14
```
