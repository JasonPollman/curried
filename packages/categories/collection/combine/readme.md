# @foldr/combine

**The `combine` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/combine) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/combine/src/index.js) for details.

Combines the properties of objects together like Object#assign, but doesn't mutate
any of the input collections.

This is similar to using the spread operator `{ ...x, ...y }`, except that
it works more generically (with Maps and Objects, for example) and guards
against bad input.

**Note, properties will be applied left to right.**
Properties in subsequent objects will overwrite previous ones.

```js
import combine from '@foldr/combine';

combine({ x: 1 }, { y: 2 }); // => { x: 1, y: 2 }
combine('foo', ['F']);       // => { 0: 'F', 1: 'o', 2: 'o' }
```
