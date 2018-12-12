# @foldr/map-async-fx

**The `mapAsyncFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/map-async-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/map-async-fx/src/index.js) for details.

**Functional, autocurried version of [mapAsync](#map-async).**

Invokes `iteratee` for each item in `collection` and waits for all iteratee functions
to resolve before returning an Array of the resolved iteratee results.

Iteratee functions are invoked with the signature: `iteratee(value)`, where:
- `value` is the current item in the collection being iterated over.

```js
import mapAsyncFx from '@foldr/map-async-fx';

function getUserById(id) {
  // Magically get the user from the database somehow...
  return Promise.resolve({ id });
}

const getUsersById = mapAsyncFx(getUserById);

const users = await getUsersById([1, 2, 3, 4]);
// => [{ id: 1}, { id: 2 }, { id: 3 }, { id: 4 }]
```
