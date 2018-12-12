# @foldr/map-async-limit-fx

**The `mapAsyncLimitFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/map-async-limit-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/map-async-limit-fx/src/index.js) for details.

**Functional, autocurried version of [mapAsync](#map-async).**

This function is similar to [mapAsyncFx](#map-async-fx), except that it accepts
a `maxConcurrency` parameter. See [mapAsync](#map-async) for more details.

Invokes `iteratee` for each item in `collection` up to `maxConcurrency` items
at a time and waits for all iteratee functions to resolve before returning
an Array of the resolved iteratee results.

Iteratee functions are invoked with the signature: `iteratee(value)`, where:
- `value` is the current item in the collection being iterated over.

```js
import mapAsyncLimitFx from '@foldr/map-async-limit-fx';

function getUserById(id) {
  // Magically get the user from the database somehow...
  return Promise.resolve({ id });
}

const mapAsync2 = mapAsyncLimitFx(2);
const getUsersById = mapAsync2(getUserById);

const users = await getUsersById([1, 2, 3, 4]);
// => [{ id: 1}, { id: 2 }, { id: 3 }, { id: 4 }]

// Altogether now...
const users = await mapAsyncLimitFx(2, getUserBydId, [1, 2, 3, 4]);
// => [{ id: 1}, { id: 2 }, { id: 3 }, { id: 4 }]
```
