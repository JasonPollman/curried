# @foldr/pad-start

**The `padStart` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/pad-start) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/pad-start/src/index.js) for details.

Pads the beginning of a string to `length` using `chars` (which default to a space).

If `length` is less than or equal to zero or the `toString` evaluation of `chars`
is an empty string, the original string is returned.

```js
import padStart from '@foldr/pad-start';

padStart('foo', 5); // => '  foo';
padStart('foo', 8); // => '     foo';

// Using the optional `chars` argument
pad('foo', 10, '<>'); // => '<><><><foo';
```
