# @foldr/map-values

**The `mapValues` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/map-values) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/map-values/src/index.js) for details.

Creates a new object with the same keys as `collection` by mapping over `collection` and
calling `iteratee` for each value in the collection.

Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
`value` is the current item in the collection, `key` is the key of the current item in the
collection, and `collection` is collection.

```js
import mapValues from '@foldr/map-values';

function square(x) {
  return x ** 2;
}

mapValues({ foo: 1, bar: 2, baz: 3 }, square); // => { foo: 1, bar: 4, baz: 9 }

// Using the shorthand string iteratee you can
// map an object to a property of the object.

const people = {
  1: { name: 'Ben', age: 21 },
  2: { name: 'John', age: 32 },
  3: { name: 'Al', age: 18 },
};

mapValues(people, 'name'); // => { 1: 'Ben', 2: 'John', 3: 'Al' }
```
