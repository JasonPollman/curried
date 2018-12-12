# @foldr/find-key

**The `findKey` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/find-key) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/find-key/src/index.js) for details.

This function is similar to `Array#findIndex` except that is works for collections and guards
against bad input.

A collection is an Array, Object, String, Map, Set, or Arguments object.

Iterates over `collection`, calling `iteratee` for each item in the collection. If
`iteratee` returns `true`, the current key will be returned. If all items are exhausted,
`undefined` is returned.

Iteratee functions are called with the signature `iteratee(value, key, collection)`, where:
- `value` is the current item in the collection being iterated over.
- `key` is the key of the current item in the collection being iterated over.
- `collection` is the passed in collection.

```js
import findKey from '@foldr/find-key';

function isEven(x) {
  return x % 2 === 0;
}

findKey([1, 2, 3], isEven);            // => 1
findKey({ a: 1, b: 2, c: 3 }, isEven); // => 'b'
findKey({ a: 1, b: 3, c: 5 }, isEven); // => undefined

const data = new Map([['x', 1], ['y', 2]]);
findKey(data, isEven); // => 'y'
```
