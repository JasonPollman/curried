# @foldr/map-async

**The `mapAsync` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/map-async) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/map-async/src/index.js) for details.

Asynchronous mapping function.

Invokes `iteratee` for each item in `collection` and waits for all iteratee functions
to resolve before returning an Array of the resolved iteratee results.

This function is similar to [map](#map), except that it accepts Promise returning
iteratee functions and returns a `Promise`.

Iteratee functions are invoked with the signature: `iteratee(value, key, collection)`, where:
- `value` is the current item in the collection being iterated over.
- `key` is the corresponding key for `value`.
- `collection` is collection.

```js
import mapAsync from '@foldr/map-async';

function getUserById(id) {
  // Magically get the user from the database somehow...
  return Promise.resolve({ id });
}

const userIdList = [1, 2, 3, 4];
const users = await mapAsync(userIdList, getUserById);
// => [{ id: 1}, { id: 2 }, { id: 3 }, { id: 4 }]
```
