# @foldr/map-values-async

**The `mapValuesAsync` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/map-values-async) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/map-values-async/src/index.js) for details.

Asynchronous version of [mapValues](#mapValues).

Invokes `iteratee` for each item in `collection` and waits for all iteratee functions
to resolve before returning an Object of asynchronously mapping the values of `collection`.

This function is similar to [mapValues](#map-values), except that it accepts Promise returning
iteratee functions and returns a `Promise`.

Iteratee functions are invoked with the signature: `iteratee(value, key, collection)`, where:
- `value` is the current item in the collection being iterated over.
- `key` is the corresponding key for `value`.
- `collection` is collection.

```js
import mapValuesAsync from '@foldr/map-values-async';

function getUserDetails(id) {
  // Magically get user details from the server somehow...
  return Promise.resolve({ id });
}

const usersByName = {
  bob: 2,
  john: 1,
  willy: 4,
};

const users = await mapValuesAsync(usersByName, getUserDetails);
// =>
// {
//   bob: { id: 2 },
//   john: { id: 1 },
//   willy: { id: 4 },
// }
```
