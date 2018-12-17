# @foldr/to-pairs

**The `toPairs` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/to-pairs) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/to-pairs/src/index.js) for details.

Creates an array of key/value tuples from the given collection.

```js
import toPairs from '@foldr/to-pairs';

toPairs({
  foo: 1,
  bar: 2,
  baz: 3,
});
// => [['foo', 1], ['bar', 2], ['baz', 3]]
```
