# @foldr/map-series-async-fx

**The `mapSeriesAsyncFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/map-series-async-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/map-series-async-fx/src/index.js) for details.

**Functional, autocurried version of [mapSeriesAsync](#map-series-async).**

Iterates over `collection` serially, in order, and one item at a time invoking `iteratee`
for each item.

Iteratee functions are invoked with the signature: `iteratee(value, key, collection)`, where:
- `value` is the current item in the collection being iterated over.

```js
import mapSeriesAsyncFx from '@foldr/map-series-async-fx';

function processItem(x) {
  // Do something async...
  return Promise.resolve(x * 2);
}

const items = [1, 2, 3];

await mapSeriesAsyncFx(processItem)(items);
// => [2, 4, 6];
```
