# @foldr/every-fx

**The `everyFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/every-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/every-fx/src/index.js) for details.

**Functional, autocurried version of [every](#every).**

Iterates over `collection`, calling `predicate` for each item in the collection. If `predicate`
returns `falsy`, iteration is broken and `false` is returned. Otherwise `true` is returned.

Predicate functions are called with the signature `predicate(value)`, where:
- `value` is the current item in the collection being iterated over.

```js
import everyFx from '@foldr/every-fx';

function isEven(x) {
  return x % 2 === 0;
}

everyFx(isEven, [1, 2, 3]);            // => false
everyFx(isEven)([2, 4, 6]);            // => true

everyFx(isEven, { a: 1, b: 2, c: 3 }); // => false
everyFx(isEven)({ a: 2, b: 4, c: 6 }); // => true
```
