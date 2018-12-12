# @foldr/is-date

**The `isDate` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-date) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-date/src/index.js) for details.

Determines if the given value is an instance of `Date`.

```js
import isDate from '@foldr/is-date';

isDate(new Date());  // => true
isDate('foo');       // => false
```
