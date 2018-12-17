# @foldr/zip-object

**The `zipObject` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/zip-object) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/zip-object/src/index.js) for details.

Creates an object using the arrays `keys` and `values` where `keys` and `values`
are parallel arrays representing the object's own properties and their values,
respectively.

```js
import zipObject from '@foldr/zip-object';

const keys = ['foo', 'bar'];
const values = [1, 2];

zipObject(keys, values);
// => { foo: 1, bar: 2 }
```
