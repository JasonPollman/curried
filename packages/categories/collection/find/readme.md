# @foldr/find

**The `find` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/find) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/find/src/index.js) for details.

This function is similar to `Array#find` except that is works for collections and guards
against bad input.

A collection is an Array, Object, String, Map, Set, or Arguments object.

Iterates over `collection`, calling `iteratee` for each item in the collection. If
`iteratee` returns `true`, the current value will be returned. If all items are exhausted
then `undefined` is returned.

Iteratee functions are called with the signature `iteratee(value, key, collection)`, where:
- `value` is the current item in the collection being iterated over.
- `key` is the key of the current item in the collection being iterated over.
- `collection` is the passed in collection.

```js
import find from '@foldr/find';

function isEven(x) {
  return x % 2 === 0;
}

find([1, 2, 3], isEven);            // => 2
find({ a: 1, b: 2, c: 3 }, isEven); // => 2
find({ a: 1, b: 3, c: 5 }, isEven); // => undefined
```
