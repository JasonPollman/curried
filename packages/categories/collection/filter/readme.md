# @foldr/filter

**The `filter` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/filter) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/filter/src/index.js) for details.

This function is similar to `Array#filter` except that is works for collections and guards
against bad input.

A collection is an Array, Object, String, Map, Set, or Arguments object.

Iterates over `collection`, calling `filterFn` for each item in the collection. If
`filterFn` returns `true`, the value will be kept in the returned array, otherwise
the value is omitted from the returned array.

Filter functions are called with the signature `filterFn(value, key, collection)`, where:
- `value` is the current item in the collection being iterated over.
- `key` is the key of the current item in the collection being iterated over.
- `collection` is the passed in collection.

```js
import filter from '@foldr/filter';

function isEven(x) {
  return x % 2 === 0;
}

filter([1, 2, 3], isEven);            // => [2]
filter({ a: 1, b: 2, c: 3 }, isEven); // => [2]
```
