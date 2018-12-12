# @foldr/is-array-like

**The `isArrayLike` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-array-like) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-array-like/src/index.js) for details.

Determines if the given value is "array-like".

An item is array-like, if it is non-falsy and has a length property. This will be `true`
for arrays, arguments, strings, and other objects with a  `length` property.

```js
import isArrayLike from '@foldr/is-array-like';

isArrayLike([]);     // => true
isArrayLike('foo');  // => true
isArrayLike({});     // => false
```
