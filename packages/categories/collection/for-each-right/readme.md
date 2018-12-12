# @foldr/for-each-right

**The `forEachRight` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/for-each-right) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/for-each-right/src/index.js) for details.

This function is similar to [forEach](#for-each) except
that iteration is performed from right to left.

Iteratee functions are called with the signature `iteratee(value, key, collection)`, where:
- `value` is the current item in the collection being iterated over.
- `key` is the key of the current item in the collection being iterated over.
- `collection` is the passed in collection.

```js
import { forEachRight, unary } from '@foldr/all';

forEach([1, 2, 3], unary(console.log)); // Prints 3, then 2, then 1.
```
