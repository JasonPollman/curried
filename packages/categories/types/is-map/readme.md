# @foldr/is-map

**The `isMap` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-map) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-map/src/index.js) for details.

Determines if the given value is an instance of `Map`.

```js
import isMap from '@foldr/is-map';

isMap(new Map());  // => true
isMap('foo');      // => false
```
