# @foldr/for-each

**The `forEach` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/for-each) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/for-each/src/index.js) for details.

This function is similar to `Array#forEach` except that it works for Array, String,
Object, Map, Set and Arguments objects.

Iterates over `collection`, calling `iteratee` for each item in the collection.

Iteratee functions are called with the signature `iteratee(value, key, collection)`, where:
- `value` is the current item in the collection being iterated over.
- `key` is the key of the current item in the collection being iterated over.
- `collection` is the passed in collection.

```js
import { forEach, unary } from '@foldr/all';

forEach([1, 2, 3], unary(console.log)); // Prints 1, then 2, then 3.
```
