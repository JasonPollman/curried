# @foldr/reverse

**The `reverse` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/reverse) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/reverse/src/index.js) for details.

Creates a new array with the values reversed.

This is similar to Array#reverse except that it does **not** mutate the original array.

```js
import reverse from '@foldr/reverse';

const items = ['foo', 'bar', 'baz'];
reverse(items); // => ['baz', 'bar', 'foo']
```
