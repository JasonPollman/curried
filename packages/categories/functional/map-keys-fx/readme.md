# @foldr/map-keys-fx

**The `mapKeysFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/map-keys-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/map-keys-fx/src/index.js) for details.

**Functional, autocurried version of [mapKeys](#mapKeys).**

Creates a new object with the same values as `collection` but with the keys mapped
using `iteratee`.

Iteratee functions are called with the signature `iteratee(key)`, where:
- `key` is the key of the current item in the collection that's being iterated over.

```js
import mapKeysFx from '@foldr/map-keys-fx';

function uppercaseKey(key) {
  return key.toUpperCase();
}

mapKeysFx(uppercaseKey)({ foo: 1, bar: 2, baz: 3 }); // => { FOO: 1, BAR: 2, BAZ: 3 }
```
