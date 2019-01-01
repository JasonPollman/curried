# @foldr/partition

**The `partition` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/partition) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/partition/src/index.js) for details.

"Partitions" the given collection's values into two arrays: The first for which `partitioner`
returns truthy for and the second for which `partitioner` returns false.

A collection is an Array, Object, String, Map, Set, or Arguments object.

Iterates over `collection`, calling `partitioner` for each item in the collection. If
`partitioner` returns truthy, the value will be put into the 0th array of the returned
array. Otherwise, it will be present in the second.

`partitioner` functions are called with the signature `partitioner(value, key, collection)`,
where:
- `value` is the current item in the collection being iterated over.
- `key` is the key of the current item in the collection being iterated over.
- `collection` is the passed in collection.

```js
import partition from '@foldr/partition';

function isEven(x) {
  return x % 2 === 0;
}

partition([1, 2, 3], isEven);            // => [[2], [1, 3]]
partition({ a: 1, b: 2, c: 3 }, isEven); // => [[2], [1, 3]]
```
