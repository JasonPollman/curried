# @foldr/to-kebab-case

**The `toKebabCase` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/to-kebab-case) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/to-kebab-case/src/index.js) for details.

Converts a string to kebab-case.
This is sometimes refered to as "spinal case".

```js
import toKebabCase from '@foldr/to-kebab-case';

toKebabCase('fooBar');  // => 'foo-bar'
toKebabCase('foo bar');  // => 'foo-bar'
toKebabCase('foo_bar');  // => 'foo-bar'
```
