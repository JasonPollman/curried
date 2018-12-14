# @foldr/is-regexp

**The `isRegExp` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-regexp) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-regexp/src/index.js) for details.

Determines if the given value is an instance of `RegExp`.

```js
import isRegExp from '@foldr/is-regexp';

isRegExp(/^foo$/i);             // => true
isRegExp(new RegExp('.*bar$')); // => true
isRegExp('string');             // => false
```
