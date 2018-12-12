# @foldr/map-fx

**The `mapFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/map-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/map-fx/src/index.js) for details.

**Functional, autocurried version of [map](#map).**

Iterates over `collection`, calling `iteratee` for each item in the collection and returning
a new array containing the return values from mapping `collection` to `iteratee`.

Iteratee functions are called with a single argument (`value`), that is is the current item
in the collection being iterated over.

```js
import mapFx from '@foldr/map-fx';

function square(x) {
  return x ** 2;
}

mapFx(square, [1, 2, 3]);            // => [1, 4, 9]
mapFx(square, { a: 1, b: 2, c: 3 }); // => [1, 4, 9]
mapFx(identity, 'foobar');           // => ['f', 'o', 'o', 'b', 'a', 'r']
```
