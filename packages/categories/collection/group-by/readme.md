# @foldr/group-by

**The `groupBy` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/group-by) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/group-by/src/index.js) for details.

Groups a collection's values into an object of arrays keyed by the value returned
when invoking `iteratee` with the current value in the collection.

A collection is an Array, Object, String, Map, Set, or Arguments object.

Iterates over `collection`, calling `iteratee` for each item in the collection.
The item is added to the returned object's Array property that is the result
of invoking `iteratee` with the item.

Iteratee functions are called with the signature `iteratee(value, key, collection)`, where:
- `value` is the current item in the collection being iterated over.
- `key` is the key of the current item in the collection being iterated over.
- `collection` is the passed in collection.

```js
import groupBy from '@foldr/group-by';

groupBy([1, 2, 3], x => x % 2 === 0); // => { false: [1, 3], true: [2] }

const people = [
    { id: 0, name: 'John' }
    { id: 1, name: 'Bill' },
    { id: 2, name: 'John' },
];

// You can use the shorthand iteratee syntax here.
groupBy(people, 'name');

// => {
//     John: [
//       { id: 0, name: 'John' }
//       { id: 2, name: 'John' },
//     ],
//     Bill: [
//       { id: 1, name: 'Bill' },
//     ],
// }
```
