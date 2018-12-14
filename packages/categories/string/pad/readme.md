# @foldr/pad

**The `pad` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/pad) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/pad/src/index.js) for details.

Pads both ends of a string to the given `length` using `chars` (which default to a single space).

If the length is odd, the remaining uneven character will be
applied to the *right* side of the returned string.

If `length` is less than or equal to zero or the `toString` evaluation of `chars`
is an empty string, the original string is returned.

```js
import pad from '@foldr/pad';

pad('foo', 5); // => ' foo ';
pad('foo', 8); // => '  foo   ';

// Using the optional `chars` argument
pad('foo', 10, '<>'); // => '<><foo<><>';
```
