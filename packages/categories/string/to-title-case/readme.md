# @foldr/to-title-case

**The `toTitleCase` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/to-title-case) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/to-title-case/src/index.js) for details.

Capitalizes every word in a string.

```js
import toTitleCase from '@foldr/to-title-case';

toTitleCase('fooBar');  // => 'Foo Bar'
toTitleCase('foo bar');  // => 'Foo Bar'
toTitleCase('foo_bar');  // => 'Foo Bar'
```
