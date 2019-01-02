# @foldr/group-by-fx

**The `groupByFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/group-by-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/group-by-fx/src/index.js) for details.

**Functional, autocurried version of [groupBy](#group-by).**

Groups a collection's values into an object of arrays keyed by the value returned
when invoking `iteratee` with the current value in the collection.

Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
`value` is the current item in the collection being iterated over.

```js
import groupByFx from '@foldr/group-by-fx';

groupByFx(x => x % 2 === 0)([1, 2, 3]); // => { false: [1, 3], true: [2] }

const people = [
    { id: 0, name: 'John' }
    { id: 1, name: 'Bill' },
    { id: 2, name: 'John' },
];

// You can use the shorthand iteratee syntax here.
groupByFx('name')(people);

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
