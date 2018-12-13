# @foldr/pad-end

**The `padEnd` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/pad-end) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/pad-end/src/index.js) for details.

Pads the end of a string to `length` using `chars` (which default to a space).

If `length` is less than or equal to zero or the `toString` evaluation of `chars`
is an empty string, the original string is returned.

```js
import padEnd from '@foldr/pad-end';

padEnd('foo', 5); // => 'foo  ';
padEnd('foo', 8); // => 'foo     ';

// Using the optional `chars` argument
pad('foo', 10, '<>'); // => 'foo<><><><';
```
