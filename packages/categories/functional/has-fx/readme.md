# @foldr/has-fx

**The `hasFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/has-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/has-fx/src/index.js) for details.

**Functional, autocurried version of [has](#has).**

Checks that `thing` contains it's own property `property`.
A variant of Object.prototype.hasOwnProperty.

```js
import hasFx from '@foldr/has-fx';

hasFx('foo')({ foo: 1 });  // => true
hasFx('bar', { bar: 1 });  // => false
```
