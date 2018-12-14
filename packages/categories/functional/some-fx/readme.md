# @foldr/some-fx

**The `someFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/some-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/some-fx/src/index.js) for details.

**Functional, autocurried version of [some](#some).**

Iterates over `collection`, calling `predicate` for each item in the collection. If `predicate`
returns truthy, iteration is broken and `true` is returned. Otherwise `false` is returned.

Predicate functions are called with the signature `predicate(value)`, where:
- `value` is the current item in the collection being iterated over.

```js
import someFx from '@foldr/some-fx';

function isEven(x) {
  return x % 2 === 0;
}

someFx(isEven, [1, 2, 3]);            // => true
someFx(isEven, [2, 4, 6]);            // => true
someFx(isEven)([1, 3, 5]);            // => false

someFx(isEven, { a: 1, b: 2, c: 3 }); // => true
someFx(isEven)({ a: 2, b: 4, c: 6 }); // => true
someFx(isEven, { a: 1, b: 3, c: 5 }); // => false
```
