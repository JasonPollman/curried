# @foldr/to-string-tag

**The `toStringTag` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/to-string-tag) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/to-string-tag/src/index.js) for details.

Calls Object.prototype.toString on `x`.

This is primarily used internally, but could be useful as cross-frame compatible "instanceof"
checks, since `x instanceof Array`, for example, won't work across browser frames.

```js
import toStringTag from '@foldr/to-string-tag';

toStringTag([]);    // => '[object Array]'
toStringTag({});    // => '[object Object]'
toStringTag(10);    // => '[object Number]'
toStringTag('foo'); // => '[object String]'
```
