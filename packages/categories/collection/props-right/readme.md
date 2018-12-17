# @foldr/props-right

**The `propsRight` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/props-right) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/props-right/src/index.js) for details.

Combines the properties of objects together like Object#assign, but doesn't mutate
any of the input collections.

This is similar to [props](#props), except that it assigns from right to left.
Properties in subsequent objects will be overwritten by previous ones.

Some libaries call this `defaults`.

```js
import propsRight from '@foldr/props-right';

propsRight({ x: 1 }, { y: 2 });       // => { x: 1, y: 2 }
propsRight({ x: 5 }, { x: 1, y: 2 }); // => { x: 5, y: 2 }
propsRight('foo', ['F']);             // => { 0: 'f', 1: 'o', 2: 'o' }
```
