# @foldr/partition-fx

**The `partitionFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/partition-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/partition-fx/src/index.js) for details.

**Functional, autocurried version of [partition](#partition).**

"Partitions" the given collection's values into two arrays: The first for which `partitioner`
returns truthy for and the second for which `partitioner` returns false.

`partitioner` functions are called with the signature `partitioner(value)`,
where `value` is the current item in the collection being iterated over.

```js
import { partition } from '@foldr/all';

const toEvenOdd = partition(x => x % 2 === 0);

toEvenOdd([1, 2, 3]);            // => [[2], [1, 3]]
toEvenOdd({ a: 1, b: 2, c: 3 }); // => [[2], [1, 3]]
```
