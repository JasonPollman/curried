# @foldr/zip-object-fx

**The `zipObjectFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/zip-object-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/zip-object-fx/src/index.js) for details.

**Functional, autocurried version of [zipObject](#zip-object).**

Creates an object using the arrays `keys` and `values` where `keys` and `values`
are parallel arrays representing the object's own properties and their values,
respectively.

```js
import { zipObject } from '@foldr/all';

const keys = ['foo', 'bar'];
const values = [1, 2];

zipObject(values)(keys);
// => { foo: 1, bar: 2 }
```
