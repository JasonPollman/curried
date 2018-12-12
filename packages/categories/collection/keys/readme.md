# @foldr/keys

**The `keys` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/keys) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/keys/src/index.js) for details.

Gets the keys of an object.

That is, the object's own enumerable properties.
This is based on `Object.keys`, except that it guards against non-object input.

**Note, the order of the returned keys is not guaranteed to be consistent across platforms.**

```js
import keys from '@foldr/keys';

keys([1, 2, 3]);                     // => ['1', '2', '3']
keys({ foo: 'bar' });                // => ['foo']
keys(null);                          // => []
keys(new Map([['a', 1], ['b', 2]])); // => ['a', 'b']
```
