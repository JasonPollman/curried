# @foldr/from-pairs

**The `fromPairs` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/from-pairs) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/from-pairs/src/index.js) for details.

Creates an object from the provided array of key/value tuples.

Note, if the 0th index in a tuple occurs more than once, later provided values
will overwrite previous.

```js
import fromPairs from '@foldr/from-pairs';

fromPairs([
  ['foo', 1],
  ['bar', 2],
  ['baz', 3],
]);

// => { foo: 1, bar: 2, baz: 3 }
```
