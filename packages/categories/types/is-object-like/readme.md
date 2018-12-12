# @foldr/is-object-like

**The `isObjectLike` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-object-like) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-object-like/src/index.js) for details.

Determines if the given value is an object (and not `null`).

Unlike [isObject](#is-object), this will not return `true` for values of `x` that are functions.

```js
import isObjectLike from '@foldr/is-object-like';

isObjectLike({});             // => true
isObjectLike([]);             // => true
isObjectLike(function () {}); // => false
isObjectLike('foobar');       // => false
```
