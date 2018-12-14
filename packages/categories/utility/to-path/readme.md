# @foldr/to-path

**The `toPath` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/to-path) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/to-path/src/index.js) for details.

Converts a string path (i.e. `foo.bar.baz`) to any array of "path tokens".
This works using both the dot and bracket notiation and supports strings.

```js
import toPath from '@foldr/to-path';

toPath('foo');                  // => ['foo']
toPath('foo.bar.baz');          // => ['foo', 'bar', 'baz']
toPath('foo[bar].baz');         // => ['foo', 'bar', 'baz']
toPath('foo[0][1]["bar"].baz'); // => ['foo', '0', '1', 'bar', 'baz']
```
