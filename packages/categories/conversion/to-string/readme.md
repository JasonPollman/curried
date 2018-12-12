# @foldr/to-string

**The `toString` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/to-string) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/to-string/src/index.js) for details.

Converts a value into a string by calling it's inherited or own `toString` method.
An empty string is returned for `null` and `undefined`.

```js
import toString from '@foldr/to-string';

toString(null);      // => ''
toString(undefined); // => ''
toString(0);         // => '0'
toString('foo');     // => 'foo'
toString([1, 2, 3]); // => '1,2,3'

toString({
  value: 'string-value',
  toString() { return this.value; },
}) // => 'value'
```
