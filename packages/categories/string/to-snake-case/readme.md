# @foldr/to-snake-case

**The `toSnakeCase` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/to-snake-case) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/to-snake-case/src/index.js) for details.

Converts a string to snake_case.

```js
import toSnakeCase from '@foldr/to-snake-case';

toSnakeCase('fooBar');  // => 'foo_bar'
toSnakeCase('foo bar');  // => 'foo_bar'
toSnakeCase('foo-bar');  // => 'foo_bar'
```
