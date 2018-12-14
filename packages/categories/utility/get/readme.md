# @foldr/get

**The `get` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/get) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/get/src/index.js) for details.

Walks the given object or string and finds the property
defined by `path`, which is a "path string" in the format
`foo.bar.baz`, `foo[1].bar`, `foo[bar][baz]`.

```js
import get from '@foldr/get';

const thing = { foo: [{ bar: 1 }, { bar: 2 }, { bar: 3 }]};

get(thing, 'foo');             // => [{ bar: 1 }, { bar: 2 }, { bar: 3 }]
get(thing, 'foo[0]');          // => { bar: 1 }
get(thing, 'foo[0].bar');      // => 1
get(thing, 'foo[0].bar.baz');  // => undefined

// Using a fallback value if the item at path doesn't exist or is undefined.
get(thing, 'foo.xxx', 'fallback'); // => 'fallback'
```
