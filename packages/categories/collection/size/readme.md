# @foldr/size

**The `size` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/size) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/size/src/index.js) for details.

Gets the *size* of an object.

That is, the number of the object's own enumerable properties.

```js
import size from '@foldr/size';

size([1, 2, 3]);       // => 3
size({ foo: 'bar' });  // => 1
size(null);            // => 0

const set = new Set([1, 2, 3]);
size(set); // => 3
```
