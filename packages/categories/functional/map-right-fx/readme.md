# @foldr/map-right-fx

**The `mapRightFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/map-right-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/map-right-fx/src/index.js) for details.

**Functional, autocurried version of [mapRight](#map-right).**

This function is like [mapFx](#map-fx) except that iteration is performed from right to left.

Iteratee functions are called with the signature `iteratee(value)`, where:
- `value` is the current item in the collection being iterated over.

```js
import mapRightFx from '@foldr/map-right-fx';

function square(x) {
  return x ** 2;
}

mapRightFx(square)([1, 2, 3]);            // => [9, 4, 1]
mapRightFx(square)({ a: 1, b: 2, c: 3 }); // => [9, 4, 1]
mapRightFx(identity, 'foobar');           // => ['r', 'a', 'b', 'o', 'o', 'f']
```
