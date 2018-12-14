# @foldr/map-series-async

**The `mapSeriesAsync` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/map-series-async) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/map-series-async/src/index.js) for details.

Asynchronous map series function.

Iterates over `collection` serially, in order, and one item at a time invoking `iteratee`
for each item.

Iteratee functions are invoked with the signature: `iteratee(value, key, collection)`, where:
- `value` is the current item in the collection being iterated over.
- `key` is the corresponding key for `value`.
- `collection` is collection.

```js
import mapSeriesAsync from '@foldr/map-series-async';

function processItem(x) {
  // Do something async...
  return Promise.resolve(x * 2);
}

const items = [1, 2, 3];

await mapSeriesAsync(items, processItem);
// => [2, 4, 6];
```
