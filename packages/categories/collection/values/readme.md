# @foldr/values

**The `values` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/values) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/values/src/index.js) for details.

Gets the enumerable values of an object.
That is, the object's own enumerable properties.

If an array is passed, a shallow copy of the array is made.

*Note, the order of keys is not guaranteed across platforms.*

```js
import values from '@foldr/values';

values([1, 2, 3]);                     // => ['1', '2', '3']
values({ foo: 'bar' });                // => ['foo']
values(null);                          // => []
values(new Map([['a', 1], ['b', 2]])); // => [1, 2]
```
