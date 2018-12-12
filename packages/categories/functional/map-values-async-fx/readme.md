# @foldr/map-values-async-fx

**The `mapValuesAsyncFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/map-values-async-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/map-values-async-fx/src/index.js) for details.

**Functional, autocurried version of [mapValuesAsync](#map-values-async).**

Invokes `iteratee` for each item in `collection` and waits for all iteratee functions
to resolve before returning an Object of asynchronously mapping the values of `collection`.

Iteratee functions are invoked with the signature: `iteratee(value, key, collection)`, where:
- `value` is the current item in the collection being iterated over.

```js
import mapValuesAsyncFx from '@foldr/map-values-async-fx';

const getUserObjectDetails = mapValuesAsyncFx(function (id) {
  // Magically get user details from the server somehow...
  return Promise.resolve({ id });
});

const users = await getUserObjectDetails({
  bob: 2,
  john: 1,
  willy: 4,
});

// =>
// {
//   bob: { id: 2 },
//   john: { id: 1 },
//   willy: { id: 4 },
// }
```
