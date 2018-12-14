# @foldr/map-values-fx

**The `mapValuesFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/map-values-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/map-values-fx/src/index.js) for details.

**Functional, autocurried version of [mapValues](#map-values).**

Creates a new object with the same keys as `collection` by mapping over `collection` and
calling `iteratee` for each value in the collection.

Iteratee functions are called with the signature `iteratee(value)`, where:
- `value` is the current item in the collection being iterated over.

```js
import mapValuesFx from '@foldr/map-values-fx';

function square(x) {
  return x ** 2;
}

mapValuesFx(square, { foo: 1, bar: 2, baz: 3 }); // => { foo: 1, bar: 4, baz: 9 }

// Using the shorthand string iteratee you can
// map an object to a property of the object.

const people = {
  1: { name: 'Ben', age: 21 },
  2: { name: 'John', age: 32 },
  3: { name: 'Al', age: 18 },
};

mapValuesFx('name')(people); // => { 1: 'Ben', 2: 'John', 3: 'Al' }
```
