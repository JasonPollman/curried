# @foldr/filter-fx

**The `filterFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/filter-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/filter-fx/src/index.js) for details.

**Functional, autocurried version of [filter](#filter).**

This function is similar to `Array#filter` except that is works for collections
and guards against bad input.

Iterates over `collection`, calling `filterFn` for each item in the collection. If
`filterFn` returns `true`, the value will be kept in the returned array, otherwise
the value is omitted from the returned array.

Filterer functions are called with the signature `filterFn(value)`, where:
- `value` is the current item in the collection being iterated over.

```js
import filterFx from '@foldr/filter-fx';

function isEven(x) {
  return x % 2 === 0;
}

filterFx(isEven, [1, 2, 3]);            // => [2]
filterFx(isEven, { a: 1, b: 2, c: 3 }); // => [2]
```
