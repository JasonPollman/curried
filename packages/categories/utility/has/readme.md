# @foldr/has

**The `has` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/has) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/has/src/index.js) for details.

Checks if `value` contains own property `property`.

This is a variant of Object.prototype.hasOwnProperty.

```js
import has from '@foldr/has';

has({ foo: 1 }, 'foo');  // => true
has({ bar: 1 }, 'bar');  // => false
```
