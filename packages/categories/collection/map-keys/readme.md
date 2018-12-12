# @foldr/map-keys

**The `mapKeys` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/map-keys) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/map-keys/src/index.js) for details.

Creates a new object with the same values as `collection` but with the keys mapped
using `iteratee`.

Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
`value` is the current item in the collection, `key` is the key of the current item in the
collection, and `collection` is collection.

```js
import mapKeys from '@foldr/map-keys';

function uppercaseKey(value, key) {
  return key.toUpperCase();
}

mapKeys({ foo: 1, bar: 2, baz: 3 }, uppercaseKey); // => { FOO: 1, BAR: 2, BAZ: 3 }

// Using the shorthand string iteratee you can
// map an object to a property of the object.

const people = {
  1: { name: 'Ben', age: 21 },
  2: { name: 'John', age: 32 },
  3: { name: 'Al', age: 18 },
};

mapKeys(people, 'name');
// => {
//  Ben: { name: 'Ben', age: 21 },
//  John: { name: 'John', age: 32 },
//  Al: { name: 'Al', age: 18 },
// }
```
